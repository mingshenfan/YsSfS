<style lang="scss">
.FormCC {
  box-sizing: border-box;
  width: 100%;
  font-size: 0.3rem;
  padding: 0.3rem 0.5rem 0.3rem 0;
  background: #fff;
  margin-left: 0.3rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
    input {
    text-align: right;
    border: none;
    }
}
 
</style>

<template>
    <div>
        <div class="FormCC">
        <p>当前驾照签发城市</p>
        <input type="text" placeholder="请选择bu发城市" @focus="aaa(show)"  v-model="message"/>
        <van-popup v-model="show" position="bottom" :overlay="true">
             <van-picker show-toolbar title="请选择bu发城市" :columns="columns" @cancel="onCancel" @confirm="onConfirm" @change="onChange" />
        </van-popup>   
        </div>
        <div class="FormCC">
            <p>当前驾照签发城市</p>
            <input type="text" placeholder="请选择签发城市" @focus="aaa(show)"  v-model="datt" />
            <van-popup v-model="show" position="bottom" :overlay="true">
                <van-picker show-toolbar title="请选择签发城市" :columns="datas" @cancel="onCancel" @confirm="cityConfirm" @change="onChange" />
            </van-popup>
        </div>
    </div>
</template>

<script>
export default {
   name: "cha",
  data() {
    return {
      show: false,
      message: " ",
      datt: " ",
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
      datas: ["杭州", "苏州", "兰州", "南阳"],
    };
  },
  methods: {
    aaa(e) {
      this.show = true;
    },
    onChange(picker, value, index) {
      this.show = true;
    },
    onCancel(e) {
      this.show = false;
    },
    onConfirm(value, index) {
      this.message = value;
      console.log("this.message...",this.message);
      this.show = false;
    },
    cityConfirm(values, index) {
      this.datt = values;
      console.log("this.datt...",this.datt);
      this.show = false;
    }
  },
}
</script>