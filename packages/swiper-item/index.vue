<template>
  <div class="ymu-swiper-slide" :style="slideStl">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('swiper-item')

export default useName({
  data () {
    return {
      translate: 0
    }
  },
  computed: {
    width () {
      return this.$parent.calcWidth
    },
    height () {
      return this.$parent.calcHeight
    },
    slideStl () {
      const result = {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
      if (this.$parent.isVertical) {
        result.transform = `translateY(${this.translate}px)`
      } else {
        result.transform = `translateX(${this.translate}px)`
      }
      return result
    }
  },
  beforeCreate () {
    this.$parent.swipes.push(this)
  },
  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
  }
})
</script>
