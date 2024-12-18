<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Programacion from "../assets/programacion.png";
import Marketing from "../assets/marketing.png";
import DiseñoUX from "../assets/diseñoux.png";
import Python from "../assets/Python.png";
import DiseñoGrafico from "../assets/diseno-grafico.png";
import SEO from "../assets/seo.png"

const router = useRouter();
const filtroTipo = ref('');

const cursos = ref([
    {
        id: 1,
        nombre: 'Introducción a JavaScript',
        descripcion: 'Aprende los fundamentos de JavaScript, el lenguaje de programación más popular de la web.',
        tipo: 'Programación',
        imagen: Programacion
    },
    {
        id: 2,
        nombre: 'Diseño UX/UI',
        descripcion: 'Descubre cómo crear interfaces de usuario atractivas y funcionales.',
        tipo: 'Diseño',
        imagen: DiseñoUX
    },
    {
        id: 3,
        nombre: 'Marketing Digital',
        descripcion: 'Domina las estrategias de marketing en línea para impulsar tu negocio.',
        tipo: 'Marketing',
        imagen: Marketing
    },
    {
        id: 4,
        nombre: 'Python para Data Science',
        descripcion: 'Utiliza Python para analizar y visualizar datos complejos.',
        tipo: 'Programación',
        imagen: Python
    },
    {
        id: 5,
        nombre: 'Diseño Gráfico Avanzado',
        descripcion: 'Perfecciona tus habilidades en diseño gráfico con herramientas profesionales.',
        tipo: 'Diseño',
        imagen: DiseñoGrafico
    },
    {
        id: 6,
        nombre: 'SEO y SEM',
        descripcion: 'Aprende a optimizar tu sitio web y gestionar campañas de publicidad en línea.',
        tipo: 'Marketing',
        imagen: SEO
    },
]);

const cursosFiltrados = computed(() => {
    if (filtroTipo.value === '') {
        return cursos.value;
    }
    return cursos.value.filter(curso => curso.tipo === filtroTipo.value);
});

const verDetalles = (id) => {
    console.log(`Ver detalles del curso con ID: ${id}`);
    router.push('/detalle-curso')
    // Aquí iría la lógica para navegar a la página de detalles del curso
};
</script>

<template>
    <div class="container my-5">
        <h1 class="text-center mb-5" style="color: #143c64 ;">Nuestros Cursos</h1>

        <div class="row mb-4">
            <div class="col-md-4 offset-md-4">
                <select v-model="filtroTipo" class="form-select">
                    <option value="">Todos los cursos</option>
                    <option value="Programación">Programación</option>
                    <option value="Diseño">Diseño</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div v-for="curso in cursosFiltrados" :key="curso.id" class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img :src="curso.imagen" class="card-img-top" :alt="curso.nombre">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">{{ curso.nombre }}</h5>
                        <p class="card-text flex-grow-1">{{ curso.descripcion }}</p>
                        <button @click="verDetalles(curso.id)" class="btn mt-auto" style="background-color: #143c64; color: white;">
                            Más detalles
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-primary:hover {
    background-color: #0d2b4a;
    border-color: #0d2b4a;
}

h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}

.card-img-top {
    width: 100%;
    height: 200px; /* Altura fija */
    object-fit: contain; /* Mantén la proporción sin recortar */
    background-color: #f8f9fa; /* Color de fondo (opcional para contraste) */
}

</style>
