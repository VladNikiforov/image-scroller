const scrollers = document.querySelectorAll('.scroller')
scrollers.forEach((scroller) => {
  const imageContainer = scroller.querySelector('.image-container')
  if (imageContainer) {
    const originalContent = imageContainer.innerHTML
    imageContainer.innerHTML += originalContent
  }
})

//BillCipher
let imgs_BillCipher = ['Bill-Cipher', 'broken-TV', 'art', 'binary']
imgs_BillCipher = [...imgs_BillCipher, ...imgs_BillCipher].map((img) => `images/BillCipher/${img}.png`)

const BillCiphers = document.querySelectorAll('.BillCipher')
BillCiphers.forEach((BillCipher) => {
  let indexBillCipher = 0

  function updateImage() {
    BillCipher.src = imgs_BillCipher[indexBillCipher]
    setTimeout(updateImage, indexBillCipher === 0 ? 1000 : 100)

    indexBillCipher = (indexBillCipher + 1) % imgs_BillCipher.length
  }

  updateImage()
})

//Collage
function imageCollage(imgs_array, path) {
  imgs_array = imgs_array.map((img) => `images/${path}/${img}.png`)

  const containers = document.querySelectorAll(`.${path}`)

  containers.forEach((container) => {
    let index = 0

    setInterval(() => {
      container.src = imgs_array[index]
      index = (index + 1) % imgs_array.length
    }, 1000)
  })
}

imageCollage(['basketball', 'football', 'volleyball'], 'Sports')
imageCollage(['water', 'fire', 'earth', 'wind', 'leaf'], 'Elements')

//Paperplane
function paperplane() {
  const paperplane = document.getElementById('paper-plane')
  paperplane.style.animation = 'fly 2.5s forwards ease-in'
  setTimeout(() => {
    paperplane.style.animation = 'none'
  }, 3000)
}

//Theme
const Themes = document.querySelectorAll('.Theme')
Themes.forEach((Theme) => {
  Theme.addEventListener('click', () => {
    if (Theme.src.includes('Moon.png')) {
      Theme.src = 'images/Theme/Sun.png'
      document.body.style.backgroundColor = '#333'
    } else {
      Theme.src = 'images/Theme/Moon.png'
      document.body.style.backgroundColor = '#fff'
    }
  })
})

//Watermelon
const Watermelon = document.getElementById('Watermelon')
Watermelon.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 75,
    origin: { y: 0.6 },
  })
})

//Checkboxes
for (let i = 0; i < 25; i++) {
  let checkbox = (document.createElement('input').type = 'checkbox')
  checkbox.id = i + 1

  let checkboxesData = [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
  checkbox.checked = checkboxesData[i]

  const Checkboxes = document.getElementById('Checkboxes')
  Checkboxes.appendChild(checkbox)
}
