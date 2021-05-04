<template>
  <div id="app">
    <div class="nav">可拖拽标题栏</div>
    <img alt="Vue logo" src="./assets/logo.png" style="-webkit-user-drag: none;margin-top: 30px">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h4>你好，想子哥~</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
html, body {
  background: transparent;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-shadow: black ;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* background-color: rgba(211,213,215,0.8); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255,255,255,0.8);
  border-radius: 12px;
}

.nav {
  /* background-color: pink; */
  height: 26px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-app-region: drag;
  -webkit-user-select: none;
  user-select: none;
  background-color: rgba(0,0,0,0.1);
  border-radius: 12px 12px 0 0;
}
</style>
