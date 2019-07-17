import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home/Home')
const TopNewList = () => import('../pages/Home/TopNewList/TopNewList')

const Message = () => import('../pages/Message/Message')
const Info = () => import('../pages/Info/Info')
const NewsList = () => import('../pages/Info/NewsList/NewsList')

const Results = () => import('../pages/Results/Results')
const Relation = () => import('../pages/Relation/Relation')

Vue.use(Router)

export default new Router({
  /*mode: 'history',//默认是hash模式
  // linkActiveClass: 'menvscode-active',
  scrollBehavior (to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    /!*console.log(to) // to：要进入的目标路由对象，到哪里去
    console.log(from) // from：离开的路由对象，哪里来
    console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}*!/
    if (savePosition) {
      return savePosition
    } else {
      /!*if (to.hash) {
        return {selector: to.hash}
      }*!/
      return {x: 0, y: 0}
    }
  },*/
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/notice',
          name: 'Notice',
          component: TopNewList
        },
        {
          path: '/home/dynamic',
          name: 'Dynamic',
          component: TopNewList
        },
        {
          path: '/home/building',
          name: 'Building',
          component: TopNewList
        },
        {
          path: '/home/engineering',
          name: 'Engineering',
          component: TopNewList
        },
        {
          path: '/home',
          redirect: '/home/notice'
        }
      ]
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      children: [
        {
          path: '/info/talents',
          component: NewsList
        },
        {
          path: '/info/international',
          component: NewsList
        },
        {
          path: '/info/experts',
          component: NewsList
        },
        {
          path: '/info/exchange',
          component: NewsList
        },
        {
          path: '/info',
          redirect: '/info/talents'
        }
      ]
    },
    {
      path: '/results',
      name: 'Results',
      component: Results,
    },
    {
      path: '/relation',
      name: 'Relation',
      component: Relation,
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
