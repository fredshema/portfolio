import Home from "./home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      guest: true,
    },
  },
];
