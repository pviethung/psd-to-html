const run = () => {
  toggleSmallNav()
  collapseSmallNav()
  changeHeaderBg()
  toggleGalleryNav()
}

// mobile navbar toggle btn
const toggleSmallNav = () => {
  const btn = document.querySelector('.header__toggle-btn')
  if (!btn) return

  const navbar = document.querySelector('.header__navbar--small')

  btn.addEventListener('click', (e) => {
    e.preventDefault()

    btn.classList.toggle('active')
    navbar.classList.toggle('active')
  })
}

// mobile navbar collapse
const collapseSmallNav = () => {
  const navbar = document.querySelector('.header__navbar--small')
  if (!navbar) return

  const nav = document.querySelector('.header__nav--small')
  Array.from(nav.children).forEach((child) => {
    child.addEventListener('click', () => {
      navbar.classList.remove('active')
    })
  })
}

// portfolio page toggle nav button
const toggleGalleryNav = () => {
  const btn = document.querySelector('.gallery__square')
  if (!btn) return

  const list = document.querySelector('.gallery__list')

  btn.addEventListener('click', () => {
    list.classList.toggle('active')
    btn.classList.toggle('active')
  })
}

// change index page header style
const changeHeaderBg = () => {
  const header = document.querySelector('.index__header')
  if (!header) return

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
}

// Glide lib
if (window.Glide) {
  // index blog section
  new Glide('.blog__cards', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    gap: 30,
    breakpoints: {
      576: {
        perView: 1,
      },
      992: {
        perView: 2,
      },
    },
  }).mount()

  // index reviews section
  new Glide('.reviews__blockquote .container', {
    type: 'carousel',
    focusAt: 'center',
    perView: 1,
  }).mount()

  new Glide('.reviews__imgs', {
    type: 'carousel',
    focusAt: 'center',
    perView: 5,
    breakpoints: {
      768: {
        perView: 3,
      },
    },
  }).mount()
}

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

run()
