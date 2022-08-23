<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <!-- footer在登录注册中不展示 -->
    <my-footer v-show="$route.meta.show"></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
  }
};
</script>

<style>
@import url("./assets/css/reset.css");
</style>