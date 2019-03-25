export default {
  inserted: el => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: '0',
    }

    function loadImage() {
      const imageElement = Array.from(el.children).find(el => el.nodeName === 'IMG')
      if (imageElement) {
        imageElement.addEventListener('load', () => el.classList.add('loaded'))
        imageElement.addEventListener('error', () => console.error('error', imageElement.dataset.url)) // eslint-disable-line no-console
        imageElement.src = imageElement.dataset.url
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver() {
      const observer = new IntersectionObserver(handleIntersect, observerOptions)
      observer.observe(el)
    }

    if ('IntersectionObserver' in window) {
      createObserver() // Use IntersectionObserver.
    } else {
      loadImage() // Fallback, just load the image.
    }
  }
}
