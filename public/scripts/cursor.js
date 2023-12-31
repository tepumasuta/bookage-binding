addEventListener('DOMContentLoaded', function () {
  const cursorDot = document.getElementById('cursor-dot')
  const cursorDotOutline = document.getElementById('cursor-dot-outline')

  const cursorObject = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    outlineVisible: true,
    cursorEnlarged: false,
    delayOutline: true,
    $dot: cursorDot,
    $outline: cursorDotOutline,

    init: function () {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth
      this.outlineSize = this.$outline.offsetWidth

      this.setupEventListeners()
      this.animateDotOutline()
    },

    setupEventListeners: function () {
      const self = this

      // Anchor hovering
      document.querySelectorAll('a').forEach(function (el) {
        el.addEventListener('mouseover', function () {
          self.cursorEnlarged = true
          self.toggleCursorSize()
        })
        el.addEventListener('mouseout', function () {
          self.cursorEnlarged = false
          self.toggleCursorSize()
        })
      })

      document.querySelectorAll('.toggle').forEach(function (el) {
        el.addEventListener('mouseover', function () {
          self.cursorEnlarged = true
          self.toggleCursorSize()
        })
        el.addEventListener('mouseout', function () {
          self.cursorEnlarged = false
          self.toggleCursorSize()
        })
      })

      document.querySelectorAll('.download').forEach(function (el) {
        el.addEventListener('mouseover', function () {
          self.cursorEnlarged = true
          self.toggleCursorSize()
        })
        el.addEventListener('mouseout', function () {
          self.cursorEnlarged = false
          self.toggleCursorSize()
        })
      })

      document.querySelectorAll('.copy').forEach(function (el) {
        el.addEventListener('mouseover', function () {
          self.cursorEnlarged = true
          self.toggleCursorSize()
        })
        el.addEventListener('mouseout', function () {
          self.cursorEnlarged = false
          self.toggleCursorSize()
        })
      })

      // Click events
      document.addEventListener('mousedown', function () {
        self.cursorEnlarged = true
        self.toggleCursorSize()
      })
      document.addEventListener('mouseup', function () {
        self.cursorEnlarged = false
        self.toggleCursorSize()
      })

      document.addEventListener('mousemove', function (e) {
        // Show the cursor
        self.cursorVisible = true
        self.toggleCursorVisibility()

        // Position the dot
        self.endX = e.pageX
        self.endY = e.pageY
        self.$dot.style.top = self.endY + 'px'
        self.$dot.style.left = self.endX + 'px'
      })

      // Hide/show cursor
      document.addEventListener('mouseenter', function (e) {
        self.cursorVisible = true
        self.toggleCursorVisibility()
        self.$dot.style.opacity = 1
        self.$outline.style.opacity = 1
      })

      document.addEventListener('mouseleave', function (e) {
        self.cursorVisible = true
        self.toggleCursorVisibility()
        self.$dot.style.opacity = 0
        self.$outline.style.opacity = 0
      })
    },

    animateDotOutline: function () {
      const self = this

      self._x += (self.endX - self._x) / self.delay
      self._y += (self.endY - self._y) / self.delay
      self.$outline.style.top = self._y + 'px'
      self.$outline.style.left = self._x + 'px'

      requestAnimationFrame(self.animateDotOutline.bind(self))
    },

    toggleCursorSize: function () {
      const self = this

      if (self.cursorEnlarged) {
        self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)'
        self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)'
      } else {
        self.$dot.style.transform = 'translate(-50%, -50%) scale(1)'
        self.$outline.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    },

    toggleCursorVisibility: function () {
      const self = this
      if (self.cursorVisible) {
        self.$dot.style.opacity = 1
        self.$outline.style.opacity = self.outlineVisible ? 1 : 0
      } else {
        self.$dot.style.opacity = 0
        self.$outline.style.opacity = 0
      }
    },
    hideOutline: function () {
      const self = this

      self.outlineVisible = false
      self.toggleCursorVisibility()
    },
    showOutline: function () {
      const self = this

      self.outlineVisible = true
      self.toggleCursorVisibility()
    },
  }
  cursorObject.init()
  objectsPull['cursor'] = cursorObject
})
