<template>
  <div class="wrap">
      <div>
          <h1 class="h1">在线翻译</h1>
          <h3 class="h3">简单/方便/快捷</h3>
      </div>
      <form v-on:submit="formSubmit">
          <textarea  class="icpn"  placeholder="请输入要翻译的内容" rows="10" cols="30" v-model="inputtext" />
          <div class="btnn">
            <select class="sele" v-model="language">
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="ko">Korean</option>
            </select>
            <input class="sub" type="submit" value="翻译">
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: "ioo",
  data: function() {
    return {
      inputtext: "",
      language: "en"
    };
  },
  methods: {
    formSubmit: function(e) {
      this.$emit("formSubmit", this.inputtext, this.language);
      e.preventDefault();
    }
  },
  created: function() {
    this.lange = "en";
  }
};
</script>

<style>
.wrap{
  width: 100%;
  height: 100%;
}
.h1 {
  width: 100%;
  height: 50px;
  background: palegreen;
  border-radius: 20px;
  text-align: center;
}
.h3 {
  width: 100%;
  text-align: center;
  padding: 10px;
}
.icpn {
  width: 100%;
  height: 50px;
  border: none;
  background: palegoldenrod;
}
.btnn{
  width: 100%;
  height: 30px;
  background: #ccc;
  line-height: 30px;
  display: flex;
  
}
.sele{
  width: 100px;
  height: 100%;
  border-style: none;
  background: pink;
  border: 1px skyblue solid;
}
.sub{
  padding: 0 10px;
  background: pink;
  border: 1px skyblue solid;
  border: none;
  margin-left: 30px;
}
</style>
