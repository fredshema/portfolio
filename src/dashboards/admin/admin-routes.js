"use strict";
import Layout from "./admin";
import Blogs from "./pages/blogs/blogs.vue";

export default [
  {
    path: "/admin",
    component: Layout,
    children: [
      {
        path: "",
        redirect: { name: "blogs" },
      },
      {
        path: "blogs",
        name: "blogs",
        component: Blogs,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];
