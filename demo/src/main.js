import Vue from 'vue'
import App from './App.vue'
//引入vuex
import Vuex from 'vuex'

Vue.config.productionTip = false

//注册vuex的功能 实际上是vue.use调用了Vuex 中的install方法
Vue.use(Vuex)

const store = new Vuex.Store({
    //实例化Vuex的构造阐述 state mutation actions
    state: {
        //储存的状态
        count: 520,
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    //修改state中的数据通过mutations
    mutations: {
        //修改state的mutation的方法
        //每一个mutation方法都有对应的参数
        //state就是指当前vuex中的state对象
        //payload 载荷 提交mutation的方法的时候 传递的参数 可以是任何类型，任何形式
        addCount(state, payload) {
            state.count += payload
        }
    },
    actions: {
        //content相当于组件中的this.store 是vuex实例
        getAsyncCount(context, parmas) {
            setTimeout(() => {
                context.commit('addCount', parmas)
            }, 1000);
        }
    },
    getters: {
        //state就是指当前vuex中的state对象
        //一定要有返回值
        filterArr: state => state.arr.filter(item => item > 5),
        name: state => state.user.name,
        token: state => state.setting.token
    },
    modules: {
        user: {
            state: {
                name: 'zs'
            }
        },
        setting: {
            state: {
                token: 123456
            }
        }
    }
})

new Vue({
    render: h => h(App),
    store
}).$mount('#app')