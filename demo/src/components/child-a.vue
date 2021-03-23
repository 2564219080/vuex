<template>
<div>
    <button @click='test'>+1(原始形式)</button>
    <button @click='addCount(10)'>+1(辅助函数)</button>
    <button @click='getTime'>异步改变(原始形式)</button>
    <button @click='getAsyncCount(480)'>异步改变(辅助函数)</button>
    <div>
        getter过滤后的{{this.$store.getters.filterArr}}(原始形式)
    </div>
    <div>
        getter过滤后的{{filterArr}}(原始形式)
    </div>
</div>
  
</template>

<script>
import {mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    methods:{
        test(){
            this.$store.commit('addCount',1)
        },
        ...mapMutations(['addCount'] )
        ,getTime(){
            this.$store.dispatch('getAsyncCount',111)
        },
        ...mapActions(['getAsyncCount'])
    },
    computed:{
        // filterArr:function(){
        //     return this.$store.getters.filterArr
        // }
        ...mapGetters(['filterArr'])
    }
}
</script>

<style>

</style>