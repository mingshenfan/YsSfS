<template>
    <div>
        <!-- <button @click="login">登录</button> -->
        <header class="newFlow">
            <p class="flow-current">订单提交 :after</p>
            <p class="flow-no">
                 填写收货地址 :after</p>
            <p class="flow-no"> 正在办理 :after</p>
            <p class="flow-no"> 办理完成 :after</p>
        </header>
        <div class="newBanner">
            <img src="http://localhost:8080/src/assets/banner.jpg" alt="">
            <p>已有<span></span>个用户在车轮补还驾照成功</p>
        </div>
        <ul class="click">
            <li @click="UpImg">
              <div>
              <van-icon class="addIcon" name="plus" />
              </div>
              <p>身份证正面</p>
              <mt-actionsheet
                :actions="data"
                v-model="sheetVisible">
                <div class="actionImg">
                  wdawdawda
                </div>
              </mt-actionsheet>
            </li>
             <li>
              <div>
              <van-icon class="addIcon" name="plus" />
              </div>
              <p>身份证反面</p>
              <mt-actionsheet
                :actions="data"
                v-model="sheetVisible">
                <div>
                  wdawdawda
                </div>
              </mt-actionsheet>
            </li>
             <li>
              <div>
              <van-icon class="addIcon" name="plus" />
              </div>
              <p>驾驶证正页</p>
              <mt-actionsheet
                :actions="data"
                v-model="sheetVisible">
                <div>
                  wdawdawda
                </div>
              </mt-actionsheet>
            </li>
             <li>
              <div>
              <van-icon class="addIcon" name="plus" />
              </div>
              <p>驾驶证辅页</p>
              <mt-actionsheet
                :actions="data"
                v-model="sheetVisible">
                <div>
                  wdawdawda
                </div>
              </mt-actionsheet>
            </li>
             <li>
              <div>
              <van-icon class="addIcon" name="plus" />
              </div>
              <p>白底半身照</p>
              <mt-actionsheet
                :actions="data"
                v-model="sheetVisible">
                <div>
                  wdawdawda
                </div>
              </mt-actionsheet>
            </li>
        </ul>
        <div class="form">
             <TypePicker></TypePicker>
             <InputPicker/>
             <div class="FormCC">
               <p>当前驾照签发城市</p>
               <p class="FormCCr"><span>￥</span><span>399</span></p>
             </div>
        </div>
        <div class="FormTO">
               <p>优惠</p>
               <p>></p>
        </div>
        <div class="FormAt">
          <a href="">常见问题</a>
        </div>
        <footer>
            <div><span class="hFzC">实付：</span><span>￥</span><span>399</span></div>
            <div>
                <button disabled>立即支付</button>
            </div>
        </footer>
        
    </div>
</template>
<script>
const JSBridge = require("../utils/JSBridge.js");
import { Swipe, SwipeItem } from "mint-ui";
import {uploadImg} from '@/api/index';
import TypePicker from '@/components/chaC/TypePicker'
import InputPicker from '@/components/chaC/InputPicker'
export default {
  name: "cha",
  data() {
    return {
      show: false,
      message: " ",
      message1: " ",
      columns: [
        "杭州",
        "苏州",
        "兰州",
        "南阳",
        "合肥",
        "石家庄",
        "爱尔兰",
        "北国"
      ],
      columns1: ["杭州", "苏州", "兰州", "南阳"],
      data: [
        {
          name: "拍照",
          method: this.upload(1)
        },
        {
          name: "从相册中选择",
          method: this.upload(2)
        }
      ],
      sheetVisible: false,
    };
  },
  methods: {
    onRead(file) {
      console.log(file);
    },
    UpImg(){
      this.sheetVisible= true
    },
    aaa(e) {
      this.show = true;
    },
    onChange(picker, value, index) {
      this.message = value;
      this.message1 = value;
    },
    onCancel(e) {
      this.show = false;
    },
    async upload(type){
      let res = await uploadImg(type);
      console.log("res...",res);
      if(res.result == 1){
        this.updataList({
          src: res.data.url,
          index:this.list.finIndex(item=>item==this.current)
        })
      }else{
        alert("上传失败")
      }
    },
    onConfirm(value, index) {
      this.message = value;
      this.message1 = value;
      this.show = false;
    },
    ShouPup(e) {
      this.show = true;
    }
  },
  components: {
    TypePicker,
    InputPicker
  },
};
</script>
<style  lang="scss" >
body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  line-height: 1.5;
  color: #3d4145;
  background: #eee;
}
.newFlow {
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  overflow: hidden;
  font-size: 0.28rem;
}
.newFlow > p.flow-current {
  background-color: #3aaffd;
  color: #fff;
}
.newFlow > p {
  flex: 1;
  text-align: center;
  font-size: 0.24rem;
  color: #3aaffd;
  line-height: 0.78rem;
  background-color: #fff;
  flex-basis: auto;
  position: relative;
  font-size: 0.28rem;
}
.newFlow > p.flow-no::before {
  content: "";
  display: block;
  position: absolute;
  border-top: 0.41rem solid #eee;
  border-bottom: 0.41rem solid #eee;
  border-left: 0.15rem solid #fff;
  border-right: 0.02rem solid #eee;
  height: 0;
  top: -0.01rem;
  right: 0;
  z-index: 1;
  font-size: 0;
}
.newFlow > p.flow-no::after {
  content: "";
  display: block;
  position: absolute;
  border-top: 0.41rem solid #fff;
  border-bottom: 0.41rem solid #fff;
  border-left: 0.15rem solid transparent;
  border-right: 0.02rem solid #fff;
  top: -0.01rem;
  right: -1px;
  z-index: 2;
}
.click{
  width: 100%;
  display: flex;
  li{
    flex: 1;
    text-align: center;
    div{
      border: 1px solid #3d4145;
    }
    .addIcon{
      border: 1px solid red;
      margin: .2rem 0;
    }
  }
}
.newBanner {
  font-size: 0;
  position: relative;
  height: 2rem;
}
.newBanner img {
  width: 100%;
}
.newBanner p {
  color: #fb611f;
  font-size: 0.28rem;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0.2rem;
}
.form {
  margin-top: 0.3rem;
  background: #fff;
  margin-bottom: 0.3rem;
}

.FormCCr {
  color: red;
}
.FormTO {
  width: 100%;
  font-size: 0.3rem;
  padding: 0.3rem 0.5rem 0.3rem 0;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.FormAt {
  text-align: center;
  padding: 0.5rem;
}
.FormAt a {
  color: #3aaffd;

  text-decoration: #3d4145;
}
footer {
  font-size: 0.3rem;
  position: fixed;
  bottom: 0;
  height: 0.85rem;
  line-height: 0.85rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 0.36rem;
}
footer span {
  color: #ff443f;
}
.hFzC {
  color: #3d4145;
}
.van-field {
  display: flex;
}
.van-cell__title {
  max-width: 200px;
}
.van-cell__value {
  flex: 1;
}
footer mt-button {
  width: 1.8rem;
  float: right;
  height: 0.85rem;
  border: none;
  color: #fff;
  font-size: 0.32rem;
  background-color: #999;
}
</style>
