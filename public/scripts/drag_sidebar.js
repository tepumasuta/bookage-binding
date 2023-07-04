class SideBar {
  constructor(sideBarNode) {
    this.sideBar = sideBarNode
    this.leftCallbacks = []
    this.callback = null

    this.setDragCallbacks()
  }

  setDragCallbacks() {
    const makeCallback = (dx, dy) => e => {
      this.sideBar.style.top = `${e.clientY - dy}px`
      this.sideBar.style.left = `${e.clientX - dx}px`
    }

    this.sideBar.addEventListener('mousedown', e => {
      if (e.button !== 1) return
      objectsPull.cursor.hideOutline()

      this.leftCallbacks.push(this.callback)
      for (let leftCallback of this.leftCallbacks) {
        removeEventListener('mousemove', leftCallback)
      }
      this.leftCallbacks = []

      this.callback = makeCallback(e.offsetX, e.offsetY)
      addEventListener('mousemove', this.callback)
    })
    this.sideBar.addEventListener('mouseup', () => {
      objectsPull.cursor.showOutline()

      removeEventListener('mousemove', this.callback)
    })
  }
}

addEventListener('DOMContentLoaded', function () {
  const sideBar = new SideBar(document.getElementById('side-bar'))
  objectsPull['sideBar'] = sideBar
})
