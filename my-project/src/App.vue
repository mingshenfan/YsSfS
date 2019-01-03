<template>
  <div id="app">
    <Cha></Cha>
    <!-- <Index/>
    <Ioo  v-on:formSubmit="trans"></Ioo>
    <p>{{ gettext }}</p> -->
  </div>
</template>

<script>
// import Index from "./components/Index";
// import Axios from "./components/Axios";
// import Ioo from "./components/ioo";
import Cha from "./components/cha";

export default {
  name: "App",
  components: {
    Cha
    // Index,
    // Ioo,
    // Axios
  },
  data() {
    return {
     // gettext: ""
    };
  },
  // methods: {
  //   trans: function(text, language) {
  //     console.log(text, language);

  //     this.$http
  //       .get(
  //         "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180523T081500Z.2cbe2187ca53b561.81816292eafc61819dd41db8281aef0144c5d936&lang=" +
  //           language +
  //           "&text=" +
  //           text
  //       )
  //       .then(data => {
  //         this.gettext = data.body.text[0];
  //       });
  //   }
  // }
};
</script>

<style lang="scss">
#app {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>