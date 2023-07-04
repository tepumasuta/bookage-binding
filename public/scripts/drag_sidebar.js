addEventListener('DOMContentLoaded', function () {
  const sideBar = document.getElementById('side-bar')
  let leftCallback = null,
    callback

  let makeCallback = (dx, dy) => e => {
    sideBar.style.top = `${e.clientY - dy}px`
    sideBar.style.left = `${e.clientX - dx}px`
  }

  sideBar.addEventListener('mousedown', e => {
    if (e.button !== 1) return

    leftCallback = callback
    if (leftCallback !== null) {
      sideBar.removeEventListener('mousemove', leftCallback)
    }
    leftCallback = null

    callback = makeCallback(e.offsetX, e.offsetY)
    addEventListener('mousemove', callback)
  })
  sideBar.addEventListener('mouseup', () => removeEventListener('mousemove', callback))
})
