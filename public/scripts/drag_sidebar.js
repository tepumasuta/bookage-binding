document.addEventListener('DOMContentLoaded', function () {
  const sideBar = document.getElementById('side-bar')
  let set = false,
    callback

  let makeCallback = (dx, dy) => e => {
    sideBar.style.top = `${e.clientY - dy}px`
    sideBar.style.left = `${e.clientX - dx}px`
  }

  sideBar.addEventListener('mousedown', e => {
    if (e.button !== 1) return
    set = true

    callback = makeCallback(e.offsetX, e.offsetY)
    sideBar.addEventListener('mousemove', callback)
  })
  sideBar.addEventListener('mouseup', () => {
    if (!set) return
    set = false

    sideBar.removeEventListener('mousemove', callback)
  })
})
