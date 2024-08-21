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
