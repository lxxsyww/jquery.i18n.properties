import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./../pages/Home/Home')   //  首页

const CampusSpace = () => import('./../pages/CampusSpace/CampusSpace')  //  校园中心

const ResourceCenter = () => import('./../pages/ResourceCenter/ResourceCenter')  //  资源中心

const PersonalCenter = () => import('./../pages/PersonalCenter/PersonalCenter')  //  个人中心
const SpaceHomePage = () => import('./../pages/PersonalCenter/PersonalSpace/SpaceHomePage/SpaceHomePage') //  空间首页
const MyAgent = () => import('./../pages/PersonalCenter/PersonalSpace/MyAgent/MyAgent') //  我的代办
const MyResources = () => import('./../pages/PersonalCenter/PersonalSpace/MyResources/MyResources') //  我的资源
const MyApplication = () => import('./../pages/PersonalCenter/PersonalSpace/MyApplication/MyApplication') //  我的应用
const MySocial = () => import('./../pages/PersonalCenter/PersonalSpace/MyApplication/MyApplication') //  我的社交

const PersonalSpace = () => import('./../pages/PersonalCenter/PersonalSpace/PersonalSpace')  //  个人空间
const Settings = () => import('./../pages/PersonalCenter/Settings/Settings')  //  设置中心
const AccountSettings = () => import('./../pages/PersonalCenter/Settings/AccountSettings/AccountSettings')  //账户设置
const IntegralProfile = () => import('./../pages/PersonalCenter/Settings/IntegralProfile/IntegralProfile')  //积分概况
const PluginSettings = () => import('./../pages/PersonalCenter/Settings/PluginSettings/PluginSettings')  //插件设置

const PersonalHomePage = () => import('./../pages/PersonalCenter/PersonalHomePage/PersonalHomePage')  //  个人主页
const HomePage = () => import('./../pages/PersonalCenter/PersonalHomePage/HomePage/HomePage')  //主页
const Resource = () => import('./../pages/PersonalCenter/PersonalHomePage/Resource/Resource')  //资源
const Talk = () => import('./../pages/PersonalCenter/PersonalHomePage/Talk/Talk')  //说说

const ApplicationCenter = () => import('./../pages/ApplicationCenter/ApplicationCenter')  //  应用中心

const Internet = () => import('./../pages/Internet/Internet')  //  互联

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/space',
      name: 'CampusSpace',
      component: CampusSpace,
    },
    {
      path: '/resource',
      name: 'ResourceCenter',
      component: ResourceCenter,
    },
    {
      path: '/personal',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [
        {
          path: '/personal/settings',
          name: 'Settings',
          component: Settings,
          children: [
            {
              path: '/personal/settings/accountsettings',
              name: 'AccountSettings',
              component: AccountSettings,
            },
            {
              path: '/personal/settings/integralprofile',
              name: 'IntegralProfile',
              component: IntegralProfile,
            },
            {
              path: '/personal/settings/pluginsettings',
              name: 'PluginSettings',
              component: PluginSettings,
            },
            {
              path: '/personal/settings',
              redirect: '/personal/settings/accountsettings'
            },
          ]
        },
        {
          path: '/personal/personalspace',
          name: 'PersonalSpace',
          component: PersonalSpace,
          children: [
            //  空间首页
            {
              path: '/personal/personalspace/SpaceHomePage',
              name: 'SpaceHomePage',
              component: SpaceHomePage,
            },
            //  我的代办
            {
              path: '/personal/personalspace/MyAgent',
              name: 'MyAgent',
              component: MyAgent,
            },
            // 我的资源
            {
              path: '/personal/personalspace/MyResources',
              name: 'MyResources',
              component: MyResources,
            },
            //  我的应用
            {
              path: '/personal/personalspace/MyApplication',
              name: 'MyApplication',
              component: MyApplication,
            },
            //  我的社交
            {
              path: '/personal/personalspace/MySocial',
              name: 'MySocial',
              component: MySocial,
            },
            {
              path: '/personal/personalspace',
              redirect: '/personal/personalspace/SpaceHomePage'
            }
          ]
        },
        {
          path: '/personal/personalhomepage',
          name: 'PersonalHomePage',
          component: PersonalHomePage,
          children: [
            {
              path: '/personal/personalhomepage/homepage',
              name: 'HomePage',
              component: HomePage,
            },
            {
              path: '/personal/personalhomepage/resource',
              name: 'Resource',
              component: Resource,
            },
            {
              path: '/personal/personalhomepage/talk',
              name: 'Talk',
              component: Talk,
            },
            {
              path: '/personal/personalhomepage',
              redirect: '/personal/personalhomepage/homepage'
            }
          ]
        },
        {
          path: '/personal',
          redirect: '/personal/personalhomepage'
        },
      ]
    },
    {
      path: '/application',
      name: 'ApplicationCenter',
      component: ApplicationCenter,
    },
    {
      path: '/internet',
      name: 'Internet',
      component: Internet,
    },
  ]
})
