addEventListener('DOMContentLoaded', function () {
  const sideBar = document.getElementById('side-bar')
  var leftCallbacks = [],
    callback

  let makeCallback = (dx, dy) => e => {
    sideBar.style.top = `${e.clientY - dy}px`
    sideBar.style.left = `${e.clientX - dx}px`
  }

  sideBar.addEventListener('mousedown', e => {
    if (e.button !== 1) return
    objectsPull.cursor.hideOutline()

    leftCallbacks.push(callback)
    for (let leftCallback of leftCallbacks) {
      removeEventListener('mousemove', leftCallback)
    }
    leftCallbacks = []

    callback = makeCallback(e.offsetX, e.offsetY)
    addEventListener('mousemove', callback)
  })
  sideBar.addEventListener('mouseup', () => {
    objectsPull.cursor.showOutline()

    removeEventListener('mousemove', callback)
  })
})
