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

const Bill = document.getElementById('Bill')

const images = ['images/BillCipher.png', 'images/brokenTV.png', 'images/art.png', 'images/binary.png', 'images/brokenTV.png', 'images/art.png', 'images/binary.png']

let currentIndex = 0

function glitchEffect() {
  Bill.src = images[currentIndex]

  setTimeout(glitchEffect, currentIndex == 0 ? 250 : 100)

  currentIndex = (currentIndex + 1) % images.length
}

glitchEffect()

const Water = document.getElementById('Water')

const elements = ['images/water.png', 'images/fire.png', 'images/earth.png', 'images/wind.png', 'images/leaf.png']

let currentElement = 0

function switchImgs() {
  Water.src = elements[currentElement]

  setTimeout(switchImgs, 1000)

  currentElement = (currentElement + 1) % elements.length
}

switchImgs()
