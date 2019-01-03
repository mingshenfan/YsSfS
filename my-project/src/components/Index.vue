<template>
  <div class="wrap">
    <el-row class="header">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img class="headerLog" src="https://img-static.youlinyouke.com/web/d2d8a719-615f-4770-a5a5-da45ad9946a5-1511763110.png" alt="">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="navTop">
            <!-- <router-link to="/">首页</router-link>
            <router-link to="/album">精品专辑</router-link>
            <router-link to="/advisor">专家顾问</router-link>
            <router-link to="/shop">立即购买</router-link>
            <router-link to="/join">加入我们</router-link> -->
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-row>
            <el-button class="btnTOP" type="primary">登录网页版</el-button>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        activeName: 'second'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .wrap {
    width: 100%;
    height: 100%;
  }
  .header {
    width: 100%;
    height: 64px;
    background: white;
    padding-top: 20px;
  }
  .headerLog {
    width: 46px;
    height: 14px;
    margin-left: 40%;
  }
  .navTop {
    display: flex;
  }
  .navTop p {
    width: 80px;
    height: 30px;
    font-size: 12px;
    text-align: center;
    color: black;
  }
  .clickP {
    border-bottom: 1px solid #1fb8ca;
    color: rgb(180, 52, 52);
  }
  .btnTOP {
    padding: 5px 10px;
    font-size: 12px;
    background: #1fb8ca;
    border: none;
  }
</style>
