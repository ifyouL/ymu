<template>
  <div class="ymu-cell" @click="handleClick" :class="cellCls">
    <template v-if="$slots.media">
      <div class="ymu-cell__media">
        <slot name="media"></slot>
      </div>
    </template>
    <div class="ymu-cell__label">
      <slot name="label">
        <span v-if="label">{{ label }}</span>
      </slot>
    </div>
    <div class="ymu-cell__value">
      <slot name="value">{{ value }}</slot>
    </div>
    <Icon class="icon" v-if="isLink" name="ios-arrow-forward"></Icon>
  </div>
</template>

<script>
import Icon from '../icon'
import Clickable from '../clickable'
import use from '../../src/utils/use'
const [useName, useBem] = use('cell')

export default useName({
  components: {
    Icon,
    Clickable
  },
  props: {
    isLink: Boolean,
    label: String,
    value: String,
    to: String,
    url: String,
    clickable: Boolean,
    replace: Boolean
  },
  computed: {
    cellCls () {
      return {
        'ymu-cell--clickable': this.clickable || this.to || this.url || this.isLink
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
      if (this.to) {
        this.$router[this.replace ? 'replace' : 'push'](this.to)
      } else if (this.url) {
        if (this.replace) {
          window.location.href = this.url
        } else {
          window.location.replace(this.url)
        }
      }
    }
  }
})
</script>
