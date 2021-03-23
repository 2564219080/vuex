<template>
  <div id="app">
    <div>
      <div>原始形式获取state状态：{{this.$store.state.count}}</div>
      <div>计算属性：{{count}}</div>
      <child-a />
      <child-b />
      
     
    </div>
  </div>
</template>



<script>
import {mapState} from 'vuex'
import ChildA from './components/child-a'
import ChildB from './components/child-b'
export default {
  name: 'App',
  components: {
    ChildA,
    ChildB
  },
  computed:{
    // count(){
    //   return this.$store.state.count
    // }
    //辅助函数
    ...mapState(['count'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
