import { createRouter, createWebHistory } from "vue-router";
// import SelectType from "/src/components/SelectType";
// import InputPop from "/src/components/InputPop";


const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: '/',
            name: 'mainLayout',
            component: () => import('../layouts/mainLayout.vue'),
            redirect: '/SelectType',
            children: [
                {
                    path: "/SelectType",
                    name: "SelectType",
                    component: () => import("../components/SelectType.vue"),
                },
                {
                    path: "/InputPop",
                    name: "InputPop",
                    component: () => import("../components/InputPop.vue"),
                },
                {
                    path: "/test",
                    name: "test",
                    component: () => import("../components/TestVues.vue"),
                },
            ],
        },

    ],
});

export default router;