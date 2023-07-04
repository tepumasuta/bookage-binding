class Scrollbar {
  constructor(scrollbar, scrollOutline) {
    this.scrollbar = scrollbar
    this.scrollOutline = scrollOutline

    this.percentage = this.calculatePercentage()
    this.baseOffset = this.scrollbar.offsetTop
    this.setScrollbarPosition()

    this.setEventListeners()
  }

  calculatePercentage() {
    return window.scrollY / (document.body.scrollHeight - window.innerHeight)
  }

  setScrollbarPosition() {
    this.scrollbar.style.top = `${
      (this.baseOffset +
        this.scrollOutline.offsetHeight -
        this.scrollOutline.offsetWidth / 2 -
        this.scrollbar.offsetHeight) *
      this.percentage
    }px`
  }

  setEventListeners() {
    this.setScrollListener()
  }

  setScrollListener() {
    addEventListener('scroll', () => {
      this.percentage = this.calculatePercentage()
      this.setScrollbarPosition()
    })
  }
}

addEventListener('DOMContentLoaded', () => {
  const bar = new Scrollbar(document.getElementById('scrollbar'), document.getElementById('scroll-outline'))
  objectsPull['scrollbar'] = bar
})
