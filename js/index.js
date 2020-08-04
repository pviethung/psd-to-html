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
