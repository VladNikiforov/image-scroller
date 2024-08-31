//BILL CIPHER GLITCH
let imgs_BillCipher = ['Bill-Cipher', 'broken-TV', 'art', 'binary', 'Bill-Cipher', 'broken-TV', 'art', 'binary']
imgs_BillCipher = imgs_BillCipher.map((img) => {
  return `images/BillCipher/${img}.png`
})

let indexBillCipher = 0
function glitchEffect() {
  const BillCipher = document.getElementById('BillCipher')
  BillCipher.src = imgs_BillCipher[indexBillCipher]

  setTimeout(glitchEffect, indexBillCipher == 0 ? 2000 : 100)

  indexBillCipher == imgs_BillCipher.length - 1 ? (indexBillCipher = 0) : indexBillCipher++
}
glitchEffect()

//ELEMENTS LOOP
let imgs_Elements = ['water', 'fire', 'earth', 'wind', 'leaf']
imgs_Elements = imgs_Elements.map((img) => {
  return `images/Elements/${img}.png`
})

let indexElements = 0
setInterval(() => {
  const Elements = document.getElementById('Elements')
  Elements.src = imgs_Elements[indexElements]

  indexElements == imgs_Elements.length - 1 ? (indexElements = 0) : indexElements++
}, 1000)

//SPORTS LOOP
let imgs_Sports = ['basketball', 'football', 'volleyball']
imgs_Sports = imgs_Sports.map((img) => {
  return `images/Sports/${img}.png`
})

let indexSports = 0
setInterval(() => {
  const Sports = document.getElementById('Sports')
  Sports.src = imgs_Sports[indexSports]

  indexSports == imgs_Sports.length - 1 ? (indexSports = 0) : indexSports++
}, 1000)

//EASTER EGGS:
//- Paper plane
function paperplane() {
  const paperplane = document.getElementById('paper-plane')
  paperplane.style.animation = 'fly 2.5s forwards ease-in'
  setTimeout(() => {
    paperplane.style.animation = 'none'
  }, 3000)
}

//- Theme
const Theme = document.getElementById('Theme')
Theme.addEventListener('click', () => {
  if (Theme.src.includes('Moon.png')) {
    Theme.src = 'images/Theme/Sun.png'
    document.body.style.backgroundColor = '#2b2b2b'
  } else {
    Theme.src = 'images/Theme/Moon.png'
    document.body.style.backgroundColor = '#fff'
  }
})

//- Watermelon
const Watermelon = document.getElementById('Watermelon')
Watermelon.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 75,
    origin: { y: 0.6 },
  })
})

//- Checkboxes
for (let i = 0; i < 25; i++) {
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = i + 1

  let checkboxesData = [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
  checkbox.checked = checkboxesData[i]

  const Checkboxes = document.getElementById('Checkboxes')
  Checkboxes.appendChild(checkbox)
}

//SCROLL
const scrollers = document.querySelectorAll('.scroller')

scrollers.forEach((scroller) => {
  const scrollerContent = scroller.querySelector('.scroller-content')
  const scrollerElements = [...scrollerContent.children]

  const fragment = document.createDocumentFragment()

  scrollerElements.forEach((item) => {
    fragment.appendChild(item.cloneNode(true))
  })

  scrollerContent.appendChild(fragment)
})

//TODO:
//10: 2 animated, 2 special, 6 img
//special, img, img, animated, img x2
