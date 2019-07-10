<template>
  <div class="itemBox">
    <div class="apply_banner">
      <img src="./images/apply_banner.png">
      <div><p>应用中心（<span id="thirdAppCount">32</span>项）</p></div>
    </div>
    <div class="apply_nav">
      <ul>
        <li :class="{active : seen === 0}" @click="selectItem(0)">全部</li>
        <li :class="{active : seen === 1}" @click="selectItem(1)">教育教学</li>
        <li :class="{active : seen === 2}" @click="selectItem(2)">教育管理</li>
        <li :class="{active : seen === 3}" @click="selectItem(3)">教育评价</li>
        <li :class="{active : seen === 4}" @click="selectItem(4)">生活服务</li>
        <a href="/api/thirdApp/scenario" class="apply_access"><span>应用接入</span><img
          src="./images/y.png" alt=""></a>
      </ul>
    </div>
    <div class="apply_content">
      <div :class="{active : (seen === 0) || (seen === 1) }" class="apply_jyjx">
        <div class="apply_title"><span></span>
          <p>教育教学<span style="padding-left:10px;" id="educationTeachingListCount"></span></p></div>
        <ul id="educationTeachingList">
          <li><a href="/api/thirdApp/applyDetail?id=64"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/68871847173C4F49A56297A7D8CEDE7A?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-07-01T06:59:26Z/-1//6a64dadbcc925a3ba340710ee891e540b6367abb8638fbe80fa58445a11d7ea8">
            <h4 title="网络教研">网络教研</h4>
            <p>使用次数：<span>4389</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=40"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/3EB8C87ED54A4D1590D8493CB62BD359?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T07:58:20Z/-1//e735ebe24f6459d18785e8c730c3f1d2f8de64e04781cf0d8ffc92dd359456ee">
            <h4 title="作业测评">作业测评</h4>
            <p>使用次数：<span>72148</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=41"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/82E179DE5C21465E90AA8549BB6ED042?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T05:48:50Z/-1//d0a7cf849dac77249d0e3cfff0abde7fcf41496b76e8dc5c314d2c2ac6156786">
            <h4 title="学生报告">学生报告</h4>
            <p>使用次数：<span>5127</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=6"><img class="apply_img"
                                                            src="https://bj.bcebos.com/v1/wisdomedu-img/BB91791AE16F4FA7880CBD8A2CBA4C19?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T05:47:43Z/-1//192b3e1170fcf9cae2ff1006d0bb2b1c6db9308d9ee0072e8cb4808190900778">
            <h4 title="智能评阅">智能评阅</h4>
            <p>使用次数：<span>23587</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=38"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/CBEF2D348DBA4A818A4B38CCDA9A861C?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T05:45:40Z/-1//29b141832d1eec03078a26b749745e9c5b52dc7395ae3b3f73707cdd000a239c">
            <h4 title="智能组卷">智能组卷</h4>
            <p>使用次数：<span>121873</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=62"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/C2758AF6395D4646B90CB10D9C844FF2?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-12T07:40:06Z/-1//101cd43ecf63cb14e606a93dbae197bd6c0c676e82b14b9fddf1887eb6a06b3a">
            <h4 title="微课制作">微课制作</h4>
            <p>使用次数：<span>12101</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=50"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/9F1110B171B84C6DAE0B38F8F445C737?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:28:29Z/-1//45cd9504ddae791e5fb90b9ca3e6ab1aeafb94524996dbb72875b27613a08609">
            <h4 title="AI课堂">AI课堂</h4>
            <p>使用次数：<span>3012</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=51"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/1487735256BF4847B847735237DBF8AB?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:28:53Z/-1//3faee76486ed247330d03ac0ced98a83f39bcd65f4ec753ecd08347ed6543319">
            <h4 title="VR课堂">VR课堂</h4>
            <p>使用次数：<span>815</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=3"><img class="apply_img"
                                                            src="https://bj.bcebos.com/v1/wisdomedu-img/C207CC73C4EA46E8900EADC1BA1AF8FC?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-07T08:19:14Z/-1//87f182fcd88c1f3693f3966d047f058eeebc063582c8dc90a0cb9877324b33ae">
            <h4 title="在线备课">在线备课</h4>
            <p>使用次数：<span>89308</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=35"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/0A9D9A8451554CF1AC6908C11D82398E?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-26T08:14:02Z/-1//24b02564869480e206a1a3a1f95b838b37c614a162918af398fec49105edce67">
            <h4 title="中考信息技术考试">中考信息技术考试</h4>
            <p>使用次数：<span>135</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=39"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/33C24C6611654574B984907C4DA53E07?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T02:16:08Z/-1//5a19cdc93435690e95f30a9365b3e9d8d4cc4d80ddd35dd37a37320581d4008f">
            <h4 title="书法教学">书法教学</h4>
            <p>使用次数：<span>6853</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=36"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/47044D7DB37D4D978F7822E755644D1A?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T02:06:36Z/-1//afaf08517bd009de78d8f1f952238d8d34f3900b9d22b6dc2e308f536d934c00">
            <h4 title="互动课堂">互动课堂</h4>
            <p>使用次数：<span>23561</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=5"><img class="apply_img"
                                                            src="https://bj.bcebos.com/v1/wisdomedu-img/AD3BACBD24FD40E8924C65BE28B5B528?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-07T08:18:37Z/-1//66f1f887555519c19cc4df284c3671478bfe1afc8f9e32acb9a83e1c2c5fc934">
            <h4 title="家庭作业">家庭作业</h4>
            <p>使用次数：<span>79489</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=7"><img class="apply_img"
                                                            src="https://bj.bcebos.com/v1/wisdomedu-img/71172D2FBAA2470D93D4EF5AC318F25D?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-07T08:30:48Z/-1//d65d89265a1a93c208919a563651d31e1860d32fc861da30b60bada2123e1aba">
            <h4 title="网络直播">网络直播</h4>
            <p>使用次数：<span>374839</span></p></a></li>
        </ul>
      </div>
      <div :class="{active : (seen === 0) || (seen === 2) }" class="apply_jygl">
        <div class="apply_title"><span></span>
          <p>教育管理<span style="padding-left:10px;" id="educationManageListCount"></span></p></div>
        <ul id="educationManageList">
          <li><a href="/api/thirdApp/applyDetail?id=56"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/5957D4E1DB7047698470877FA4A1D169?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:39:39Z/-1//43bbd0cff81586a63db5a0994bf5fbb92a7e8c3a9ccd8bde2265dce3ae6a9726">
            <h4 title="财务管理">财务管理</h4>
            <p>使用次数：<span>32188</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=53"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/6C8DD25B63FD4A6B8E960A440C844931?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:34:41Z/-1//0639592583cfc93ddbd2c28bd0dc6e50aab190e98cbb7a7410ea3c17a57da526">
            <h4 title="资产管理">资产管理</h4>
            <p>使用次数：<span>6389</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=52"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/F1D88E2470A64A2897B298E257D6CA1A?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:33:47Z/-1//4782890426635697a1da18d4ab55edd31800d121c59212d2b42e36de3f0cb0d2">
            <h4 title="人事管理">人事管理</h4>
            <p>使用次数：<span>6490</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=18"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/0C60D015639148D5A8EA95148AFC6457?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T02:41:26Z/-1//45fa86157c1ea1c90b35c91d8a2e17806ede15b615721f49788bf027ee1d5c28">
            <h4 title="校园安防">校园安防</h4>
            <p>使用次数：<span>12266</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=45"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/55AC4045044249248FFDE33BAFC35EEC?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T06:33:26Z/-1//1d1b283dab3585effac126dafa60fbeba314da81188f7348b5882d98b2f6f960">
            <h4 title="走班排课">走班排课</h4>
            <p>使用次数：<span>6542</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=10"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/1CCEC79DCF6C4B85AF4AC71C0AFA21CF?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T04:55:16Z/-1//30dbb69f759760cfad8cfcefa32d83ba00516d86f572b024e89d5982516b4d79">
            <h4 title="职业生涯规划">职业生涯规划</h4>
            <p>使用次数：<span>6529</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=37"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/9E245E02D32A4AEA961241CB150CEA4F?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T02:12:04Z/-1//c1f3180a23fef891b5e90601ed9324d0971d188e32bafa26516846fefbf4522d">
            <h4 title="数字图书馆">数字图书馆</h4>
            <p>使用次数：<span>16589</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=8"><img class="apply_img"
                                                            src="https://bj.bcebos.com/v1/wisdomedu-img/AC88040A9E484031B6DC3D3D97779B9A?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-07T08:56:31Z/-1//1b01abb299796ecf2cb0ba44eeb2199d139fcdfbb0e1078a776ad26510663c94">
            <h4 title="协同办公">协同办公</h4>
            <p>使用次数：<span>21345</span></p></a></li>
        </ul>
      </div>
      <div :class="{active : (seen === 0) || (seen === 3) }" class="apply_jypj">
        <div class="apply_title"><span></span>
          <p>教育评价<span style="padding-left:10px;" id="educationEvaluationListCount"></span></p></div>
        <ul id="educationEvaluationList">
          <li><a href="/api/thirdApp/applyDetail?id=63"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/77E021CAF4034A5BB5E300EABD24F0DE?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-06-26T08:30:36Z/-1//475f3854c803c858c3915f80d8287cd32ed87d6059d8e5dc5cbf32ac425c08ec">
            <h4 title="一师一优课">一师一优课</h4>
            <p>使用次数：<span>45565</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=61"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/6B2A6B3943BD4A03B24410E60722F175?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:38:53Z/-1//69adef248c282b79d314da554e35a44386dc25b6108353a136e86adf042f7cfa">
            <h4 title="学校综合评价">学校综合评价</h4>
            <p>使用次数：<span>629</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=42"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/4E9CF812AD8C494A8542BF47F200A778?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T05:39:02Z/-1//c89ea30fbbfff8e61e67482fcbcfd3b78714edda15c1b521224e20bdcfe4a633">
            <h4 title="学生综合素质评价">学生综合素质评价</h4>
            <p>使用次数：<span>5999</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=43"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/63001C7906BE4864BC4F69EFBFA73B05?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T05:45:39Z/-1//c0674cba4e310fd91d44914460f0d90a6528fabf7f1598747e50e61c986f334d">
            <h4 title="教师发展性评价">教师发展性评价</h4>
            <p>使用次数：<span>4999</span></p></a></li>
        </ul>
      </div>
      <div :class="{active : (seen === 0) || (seen === 4) }" class="apply_shfw">
        <div class="apply_title"><span></span>
          <p>生活服务<span style="padding-left:10px;" id="lifeServiceListCount"></span></p></div>
        <ul id="lifeServiceList">
          <li><a href="/api/thirdApp/applyDetail?id=44"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/424E98E17DA548D9AC52DF36016E9CD3?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T05:54:53Z/-1//51a92f1a3056fc537fd0c6318c41797eb1d42df56ac5326d935163aa257ff192">
            <h4 title="心理测评">心理测评</h4>
            <p>使用次数：<span>3669</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=58"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/13BDD46CB82846198A21EA1AAD774823?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:36:23Z/-1//7231481327a08bb097338b693f53016e9ec2aa7ff021fb906ee5439b739f2782">
            <h4 title="校园电视台">校园电视台</h4>
            <p>使用次数：<span>3511</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=60"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/7B1DA19DC0574C36820A45A769967921?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:35:58Z/-1//add0ef03461deac0a261bff9d6f68b0c3b6900a17036c017a962fabd3183ae93">
            <h4 title="数字校园广播">数字校园广播</h4>
            <p>使用次数：<span>5653</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=59"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/53CD24BCAB3B4C7CB00CF823886AFD6A?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-04-02T05:36:50Z/-1//dd7d9366f1ade862319518552d6ba0ffdce5dc3bcdfb9e76937f65b56697b24a">
            <h4 title="食品管理">食品管理</h4>
            <p>使用次数：<span>16223</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=46"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/D8F29D3ED39B49418B7103CE884CE6C0?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-27T06:37:57Z/-1//0e76cd8b99c8e2cedeff84a3b30811b28fd24accb4a9adde7d30ab09b0ad41fb">
            <h4 title="电子班牌">电子班牌</h4>
            <p>使用次数：<span>8553</span></p></a></li>
          <li><a href="/api/thirdApp/applyDetail?id=47"><img class="apply_img"
                                                             src="https://bj.bcebos.com/v1/wisdomedu-img/DAAF0BFC89354AC8844FADA15FD4EF08?authorization=bce-auth-v1/7642b4b48046452697e90662eed41ace/2019-03-30T03:35:07Z/-1//269e8e4092af6646c132bc74966a7a50dc6c5cae3f462987f30a2891da510829">
            <h4 title="家校互通">家校互通</h4>
            <p>使用次数：<span>32633</span></p></a></li>
        </ul>
      </div>
      <input type="hidden" id="userRoleId" value=",2,">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApplicationCenter',
    data () {
      return {
        seen: 0
      }
    },
    methods: {
      selectItem (selectType) {
        this.seen = selectType
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .itemBox
    min-height 700px

    .apply_banner
      height: 100px;
      overflow: hidden;
      width: 100%;
      position: relative;

      img
        height: 100px;
        display: block;
        top: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;

      > div
        width: 1200px;
        margin: 36px auto;

        p
          font-size: 30px;
          float: right;
          color: #fff;
          font-weight: bold;
          position: relative;


    .apply_nav
      width: 100%;
      height: 70px;
      background: #fff;
      box-shadow: 0 3px 3px #ccc;

      ul
        width: 1200px;
        height: 100%;
        margin: 0 auto;

        li
          margin: 0 16px;
          padding: 0 10px;
          float: left;
          line-height: 70px;
          font-size: 18px;
          color: #6b7a8f;
          cursor: pointer;

          &.active
            color: #3971ff;
            border-bottom: 2px solid #3971ff;
            height: 70px;

        .apply_access
          display: inline-block;
          height: 40px;
          line-height: 39px;
          background: linear-gradient(90deg, rgba(57, 113, 255, 1) 0%, rgba(53, 82, 255, 1) 100%);
          border-radius: 20px;
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          padding: 0 16px;
          float: right;
          margin-top: 14px;

          img
            width: 7px;
            height: 15px;
            margin-left: 17px;
            vertical-align: middle;

    .apply_content
      .apply_jyjx,
      .apply_jygl,
      .apply_jypj,
      .apply_shfw
        display none
        background: #F2F8FD;
        min-height: 118px;
        width: 100%;

        &.active
          display block

        .apply_title
          font-size: 26px;
          color: #334d7a;
          width: 1200px;
          margin: 0 auto;
          padding: 30px 0 60px;

          > span
            height: 26px;
            width: 4px;
            display: block;
            float: left;
            background: #ff0000;
            margin-right: 17px;
            border-radius: 4px;

          p
            float: left;

            span
              padding-left: 10px;

        ul
          width: 1200px;
          margin: 0 auto;
          padding-left: 20px;
          overflow: hidden;

          li
            height: 90px;
            width: 295px;
            float: left;
            margin-bottom: 40px;

            a
              display: block;
              height: 100%;
              width: 100%;

              .apply_img
                display: block;
                height: 70px;
                width: 70px;
                border-radius: 4px;
                float: left;
                margin-right: 20px;
                border-radius: 28px;

              h4
                font-size: 16px;
                color: #334d7a;
                margin: 12px 0 21px 0;
                float: left;
                width: 185px;
                font-weight: 400;

              p
                font-size: 14px;
                color: #68728B;
                float: left;
                width: 185px;
</style>
