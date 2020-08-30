import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);

import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import {
  faTv,
  faLightbulb,
  faTemperatureLow,
  faUnlock,
  faHome,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

library.add(faTv, faLightbulb, faTemperatureLow, faUnlock, faHome, faVideo);
