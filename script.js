document.addEventListener('DOMContentLoaded', () => {
  //SCROLL
  const scrollers = document.querySelectorAll('.scroller')

  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector('.scroller-content')
    const scrollerContent = Array.from(scrollerInner.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute('aria-hidden', true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })

  //BILL CIPHER GLITCH
  let imgs_BillCipher = ['Bill-Cipher', 'broken-TV', 'art', 'binary', 'broken-TV', 'art', 'binary']
  imgs_BillCipher = imgs_BillCipher.map((img) => {
    return `images/BillCipher/${img}.png`
  })

  let indexBillCipher = 0
  function glitchEffect() {
    const BillCipher = document.getElementById('BillCipher')
    BillCipher.src = imgs_BillCipher[indexBillCipher]

    setTimeout(glitchEffect, indexBillCipher == 0 ? 500 : 150)

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
})

function paperplane() {
  const paperplane = document.getElementById('paper-plane')
  paperplane.style.animation = 'fly 2.5s forwards ease-in'
  setTimeout(() => {
    paperplane.style.animation = 'none'
  }, 2500)
}

let mode = 'moon'
function theme() {
  const Theme = document.getElementById('Theme')
  if (mode == 'moon') {
    document.body.style.backgroundColor = '#2b2b2b'
    Theme.src = 'images/Theme/Sun.png'
    setTimeout(() => {
      mode = 'sun'
    }, 1000)
  }
  if (mode == 'sun') {
    document.body.style.backgroundColor = '#fff'
    Theme.src = 'images/Theme/Moon.png'
    setTimeout(() => {
      mode = 'moon'
    }, 1000)
  }
}

  function launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }