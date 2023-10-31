// Challenge 1
function printName() {
const use = document.getElementById("user")

  if (use) {
    use.innerHTML = "karthik"
  }
}
window.onload = printName;
// var ele = document.getElementById("user")
// ele.innerHTML= "karthik"   //this can also be used without using onload()

// Challenge 2
document.getElementById("btn-click").onclick = backcolor; //this the element which is triggered and calls for a function to be run.
function backcolor() {
  document.getElementById("btn-click").style.background = "LightGreen"; //this for which element the function will run on.
}

// Challenge 3
function makeSentence() {
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adverb = document.getElementById("adverb").value;

    const full = noun + " " + verb + " " + adverb;

    const div = document.getElementById("statement");
    div.textContent = full;
  }
  const button = document.getElementById("build-button");
  button.addEventListener("click", makeSentence);

// Challenge 4.1
const gparent = document.getElementById("grandparent")
const parentt = document.getElementById("parent")
const childd = document.getElementById("child")

gparent.addEventListener("click", () =>{
  console.log("Granparent clicked")
})

parentt.addEventListener("click", () =>{
  console.log("Parent clicked")
})

childd.addEventListener("click", () =>{
  console.log("child clicked")
})

// Challenge 4.2
const gp = document.getElementById("grandparent")
const p = document.getElementById("parent")
const c = document.getElementById("child")

gp.addEventListener("click", printgp, true)
function printgp(){
  console.log("Granparent clicked")
}

p.addEventListener("click", printp, true)
function printp(){
  console.log("Parent clicked")
}

c.addEventListener("click", printc, true)
function printc(){
  console.log("Child clicked")
}

// Challenge 5
const select = document.getElementById("category")
select.addEventListener('click', e => {
  if (e.target.matches("#shirts")){
    console.log("shirts")
  }
  if (e.target.matches("#pants")){
    console.log("pants")
  }
  if (e.target.matches("#blazers")){
    console.log("blazers")
  }
})


