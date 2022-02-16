function open_sidebar() {
  document.getElementById("nav-menu").style.width = "25%";
  document.getElementById("content").style.width = "75%";
  document.getElementById("foot").style.width = "75%";
}

function close_sidebar() {
  document.getElementById("nav-menu").style.width = "0%";
  document.getElementById("content").style.width = "100%";
  document.getElementById("foot").style.width = "100%";
}

console.log("Martyna Krygowska, kierunek, grupa")

const nav_button = document.getElementById("nav-button")
const nav_menu = document.getElementById("nav-menu")

nav_button.addEventListener("click", ()=> {
  if(nav_menu.style.width === "0%" || !nav_menu.style.width) { open_sidebar() }
  else { close_sidebar() }
})

const button = document.getElementById("form-button")

button.addEventListener("click", ()=> {
  const name = document.getElementById("form-name")
  const surname = document.getElementById("form-surname")
  const email = document.getElementById("form-email")
  const subject = document.getElementById("form-subject")
  const content = document.getElementById("form-content")
  const checkbox = document.getElementById("form-checkbox")
  const label = document.querySelector(".form-checkbox-label")
  if(checkbox.checked) {
    document.querySelector(".form-checkbox-label").style.color = "black"
    setTimeout(() => {
      alert(`Imie: ${name.value} \nNazwisko: ${surname.value} \nE-mail: ${email.value} \nTemat: ${subject.value} \nTreść: ${content.value}`)
    }, 10)
  }
  else { label.style.color = "red" }
})

const animals = [
  {animal: 'Słoń', weight: 1200},
  {animal: 'Mysz', weight: 0.1},
  {animal: 'Pies', weight: 30},
  {animal: 'Jeż', weight: 5},
  {animal: 'Tygrys', weight: 200},
];

animals.filter(animal => animal.weight > 10).forEach(animal => {
  const li = document.createElement("li")
  li.innerText = animal.animal
  document.getElementById("animals").appendChild(li)
})

document.addEventListener('scroll', () => {
  if(!window.scrollY){
    document.querySelector(".sidebar").style.top = "50px"
  }
  else { document.querySelector(".sidebar").style.top = "0px" }
});
