<template lang="html">
  <div class="">
    <button type="button" name="button" @click="s=!s"></button>
    <input type="text" v-focus="true" v-show="s">
  </div>
</template>

<script>
import { focus } from 'vue-focus'
export default {
  directives: { focus: focus },
  data () {
    return {
      s: true
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
