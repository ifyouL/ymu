<template>
  <div class="ymu-navbar">
    <div class="ymu-navbar-left">
      <slot name="left">
        <div
          class="ymu-navbar-button"
          :class="{'ymu-navbar-button--has-arrow': leftArrow}"
          @click="handleClickLeft"
        >
          <Icon class="ymu-navbar-button__icon" v-if="leftArrow" name="ios-arrow-back"></Icon>
          <span class="ymu-navbar-button__text" v-text="leftText"></span>
        </div>
      </slot>
    </div>
    <div class="ymu-navbar-title">
      <slot>{{ title }}</slot>
    </div>
    <div class="ymu-navbar-right">
      <slot name="right">
        <div class="ymu-navbar__right-button" @click="$emit('on-click-right')">{{ rightText }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Button from '../button'
import Icon from '../icon'
import use from '../../src/utils/use'
const [useName, useBem] = use('navbar')

export default useName({
  components: {
    Icon,
    Button
  },
  props: {
    title: String,
    leftText: {
      type: String,
      default: ''
    },
    rightText: String,
    leftArrow: {
      type: Boolean,
      default: true
    },
    fixed: Boolean,
    back: {
      Boolean: Boolean,
      default: true
    }
  },
  methods: {
    handleClickLeft () {
      this.$emit('on-click-left')
      if (this.back) {
        this.$router.back()
      }
    }
  }
})
</script>

<style src="./index.scss" lang="scss"></style>
