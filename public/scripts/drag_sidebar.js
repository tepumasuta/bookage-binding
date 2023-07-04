addEventListener('DOMContentLoaded', function () {
  const sideBar = document.getElementById('side-bar')
  let set = false,
    leftCallback = null,
    callback

  let makeCallback = (dx, dy) => e => {
    sideBar.style.top = `${e.clientY - dy}px`
    sideBar.style.left = `${e.clientX - dx}px`
  }

  sideBar.addEventListener('mousedown', e => {
    if (e.button !== 1) return
    set = true

    leftCallback = callback
    if (leftCallback !== null) { sideBar.removeEventListener('mousemove', leftCallback) }
    leftCallback = null

    callback = makeCallback(e.offsetX, e.offsetY)
    sideBar.addEventListener('mousemove', callback)
  })
  sideBar.addEventListener('mouseup', () => {
    set = false

    sideBar.removeEventListener('mousemove', callback)
  })
})
