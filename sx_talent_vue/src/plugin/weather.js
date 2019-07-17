//所谓vue的插件，就是一个js对象
let myplugin = {
  install: function (Vue, Options) {
    //在这里写插件需要实现的功能
    // 添加属性与方法
    //这里我写的$testProp等加了$符号的，表示他为vue全局的，但实际上不加也可以的，访问时也不加就行了
    Vue.prototype.$myoption = '我是来自插件的属性',
      Vue.prototype.$myfn = function () {
        console.log('我是来自插件的方法')
      }
    // 原文：https://blog.csdn.net/qq_38796823/article/details/89376401
  }
}
export default myplugin;


