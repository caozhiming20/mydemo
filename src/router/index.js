import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);
// 路由懒加载，并利用webpack2+的ensure,实现代码分割
// const OtherMassivePage = resolve => {
//   // 空数组用来指定该路由组件需要加载的依赖
//   require.ensure([], () => {
//     resolve(require('./routes/OtherMassivePage.vue'))
//   })
// }
// 路由懒加载+打包代码分割
const HelloWorld= resolve =>{require.ensure([],()=>{resolve(require('@/components/helloWorld'))})};
const Login = resolve =>{require.ensure([],()=>{resolve(require('@/views/Login'))})};
const main = resolve =>{require.ensure([],()=>{resolve(require('@/views/main'))})};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/Login"
    },
    {
      path:"/Login",
      name:"Login",
      component:Login
    },
    {
      path:"/main",
      name:"main",
      component:main,
      //定义权限，利用vue-router提供的钩子函数beforeEach()对路由进行判断。
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
  ]
})
