import { createRouter, createWebHashHistory } from "vue-router";
import Nav from "../components/Nav.vue";
import Home from "../components/Home.vue";
import Cursos from "../components/Cursos.vue";
import DetalleCurso from "../components/DetalleCurso.vue";
import Certificados from "../components/Certificados.vue";
import SobreNosotros from "../components/SobreNosotros.vue";
import Contactenos from "../components/Contactenos.vue";
import PanelAdmin from "../components/Administrador/PanelAdmin.vue";


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
            {
                path: "/cursos",
                component: Cursos,
            },
            {
                path: "/detalle-curso",
                component: DetalleCurso,
            },
            {
                path: "/certificados",
                component: Certificados,
            },
            {
                path: "/sobre-nosotros",
                component: SobreNosotros,
            },
            {
                path: "/contactenos",
                component: Contactenos,
            },
            {
                path: "/panel-admin",
                component: PanelAdmin,
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
