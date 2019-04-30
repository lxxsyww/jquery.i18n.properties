//把引入皮肤css路径<link>标签选出来
var cssStyle = document.getElementById('skinColor');

//换肤函数
function changeSyle(name) {
    console.log(name)
    event.stopPropagation();
    cssStyle.href = "css/skinColour_" + name + ".css";
//保存肤色名
    setStorage("skinName", name);

//切换图片的路径
    $('.home-bReturn').attr('src', 'img/' + name + '/home_yzl_8.png');
    $('.home-bHome').attr('src', 'img/' + name + '/home_yzl_7.png');

}

//html5设置本地存储
function setStorage(sname, vul) {
    window.localStorage.setItem(sname, vul);
}

function getStorage(attr) {
    var str = window.localStorage.getItem(attr);
    return str;
}

//访问本地存储，获取皮肤名
var cssName = getStorage("skinName");

//判断是否有皮肤名，就使用获取的皮肤名，没有就用默认的
if (cssName && cssName != null) {
    cssStyle.href = "css/skinColour_" + cssName + ".css";
//设置图片路径
    $('.home-bReturn').attr('src', 'img/' + cssName + '/home_yzl_8.png');
    $('.home-bHome').attr('src', 'img/' + cssName + '/home_yzl_7.png');

} else {
//没有皮肤就使用blue默认的路径
    cssStyle.href = "css/skinColour_zh.css";
//设置默认图片路径
    $('.home-bReturn').attr('src', 'img/blue/home_yzl_8.png');
    $('.home-bHome').attr('src', 'img/blue/home_yzl_7.png');
}

$("#language").on('change',function () {
    var skin = $(this).children('option:selected').data('skin');
    changeSyle(skin)
})
