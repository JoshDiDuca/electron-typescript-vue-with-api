import { NavigationRoute } from "./NavigationRoute";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

export const Routes = new Array<NavigationRoute>(
  {
    name: "Home",
    icon: "home",
    component: Home,
    bottomNavigation: true,
    path: "/"
  },
  {
    name: "Lights",
    icon: "lightbulb",
    component: About,
    bottomNavigation: true,
    path: "/lights"
  },
  {
    name: "Temperature",
    icon: "temperature-low",
    component: About,
    bottomNavigation: true,
    path: "/temperature"
  },
  {
    name: "Security",
    icon: "unlock",
    component: About,
    bottomNavigation: true,
    path: "/security"
  },
  {
    name: "Cameras",
    icon: "video",
    component: About,
    bottomNavigation: true,
    path: "/cameras"
  },
  {
    name: "TVs",
    icon: "tv",
    component: About,
    bottomNavigation: true,
    path: "/tv"
  }
);
