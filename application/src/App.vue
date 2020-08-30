<template>
  <div id="app">
    <TopBar></TopBar>
    <BottomBar></BottomBar>
    <div class="current-router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Component } from "vue-property-decorator";
import Vue from "vue";

// @ is an alias to /src
import BottomBar from "@/components/layout/BottomBar.vue";
import TopBar from "@/components/layout/TopBar.vue";

@Component({ components: { BottomBar, TopBar } })
export default class App extends Vue {}
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "./assets/styles/bootstrap/_bootswatch.scss";
@import "./assets/styles/bootstrap/_variables.scss";
@import "./assets/styles/styles.scss";
</style>
