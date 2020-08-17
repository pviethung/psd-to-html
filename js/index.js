// Glide lib
if (window.Glide) {
  new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 5,
  }).mount()

  new Glide('.blog__cards', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    gap: 30,
  }).mount()

  new Glide('.reviews__blockquote .container', {
    type: 'carousel',
    focusAt: 'center',
    perView: 1,
  }).mount()
}

// change header style
const header = document.querySelector('.index__header')
const logo = document.querySelector('.index__header img:last-child')
const logoLight = document.querySelector('.index__header img:first-child')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    header.classList.add('active')
    logo.style.display = 'block'
    logoLight.style.display = 'none'
  } else {
    header.classList.remove('active')
    logo.style.display = 'none'
    logoLight.style.display = 'block'
  }
})

// Isotope lib
if (window.Isotope) {
  const elem = document.querySelector('.gallery__imgs')
  const iso = new Isotope(elem, {})

  Array.from(document.querySelector('.gallery__list').children).forEach(
    (child) => {
      child.addEventListener('click', () => {
        let value = child.dataset.filter
        iso.arrange({
          filter: value,
        })
      })
    }
  )
}

// portfolio btns
const btn = document.querySelector('.gallery__square')
const portList = document.querySelector('.gallery__list')

btn.addEventListener('click', () => {
  portList.classList.toggle('active')
  btn.classList.toggle('active')
})
