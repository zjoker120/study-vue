import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("../components/SelectType.vue"),
        },
        {
            path: "/InputPop",
            name: "InputPop",
            component: () => import("../components/InputPop.vue"),
        },
    ],
});

export default router;