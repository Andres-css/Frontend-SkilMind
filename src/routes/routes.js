import { createRouter, createWebHashHistory } from "vue-router";
import Nav from "../components/Nav.vue";
import Home from "../components/Home.vue";


const routes = [
    {
        path: "/",
        component: Nav,
        children: [
            { path: "", redirect: "/home" },
            {
                path: "/home",
                component: Home,
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
