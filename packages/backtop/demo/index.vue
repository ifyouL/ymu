<template>
  <div class="demo-backtop">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <p>hello world, 我是编号{{ index }}</p>
      </li>
    </ul>
    <ymu-backtop></ymu-backtop>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    for (let index = 0; index < 50; index++) {
      this.list.push(index);
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  padding: 0 12px;
}

li {
  line-height: 40px;
  font-size: 14px;
  color: #666;
}
</style>
