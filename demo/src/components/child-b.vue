<template>
  <div>
      这是user的值{{this.$store.state.user.name}}
      这是setting的值{{this.$store.state.setting.token}}
      <div>
          name：{{name}}（辅助函数的方式）
          token:{{token}}（辅助函数的方式）
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['name','token'])
    }
}
</script>

<style>

</style>