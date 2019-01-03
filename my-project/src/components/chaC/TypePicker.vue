<template>
    <div class="FormCC">
        <li @click="clickType">
            <span>服务类型</span>
            <span>{{type}}</span>
        </li>
        <van-popup v-model="showType" position="bottom" overlay>
            <van-picker :columns="typeArray" @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>
        </van-popup>
    </div>
</template>
<style lang="scss">
.FormCC {
  width: 100%;
  font-size: 0.3rem;
  padding: 0.3rem 0.5rem 0.3rem 0;
  background: #fff;
  margin-left: 0.3rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  
}

.FormCC  li {
    display: -webkit-flex;
     width: 100%;
     display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
li {
  list-style: none;
}
</style>

<script>
export default {
  name: "TypePicker",
  data() {
    return {
      showType: false,
      typeArray: ["补驾照", "换驾照"],
      type: ""
    };
  },
  methods: {
    onCancel(e) {
      this.showType = false;
    },
    onConfirm(value) {
      console.log("value...", value);
      this.type = value;
      this.onCancel();
    },
    clickType() {
      this.showType = true;
    }
  }
};
</script>