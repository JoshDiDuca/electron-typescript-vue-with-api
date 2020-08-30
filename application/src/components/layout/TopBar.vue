<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-nav class="mx-auto">
      <b-navbar-brand to="/">{{ applicationName }}</b-navbar-brand>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { APPLICATION_NAME } from "../../constants/";

@Component
export default class TopBar extends Vue {
  public get applicationName(): string {
    return APPLICATION_NAME;
  }
}
</script>
