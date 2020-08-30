<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="bottom">
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          class="px-4"
          ><font-awesome-icon class="mx-4" :icon="route.icon" size="3x"
        /></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Routes } from "../../router/routes";
@Component
export default class BottomBar extends Vue {
  private routes = Routes.filter(r => r.bottomNavigation);
}
</script>
<style lang="scss" scoped>
.router-link-exact-active {
  color: white !important;
}
.nav-link {
  filter: brightness(70%);
}
</style>
