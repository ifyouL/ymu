<template>
  <div class="ymu-card" :class="{'ymu-card--shadow': shadow}">
    <div class="ymu-card__hd">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ymu-card__bd">
      <slot></slot>
    </div>
    <div class="ymu-card__ft" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('card')

export default useName({
  props: {
    header: String,
    shadow: {
      type: Boolean,
      default: true
    }
  }
})
</script>

index.scss
