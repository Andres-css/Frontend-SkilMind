<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const features = ref([
    {
        icon: 'bi-laptop',
        title: 'Aprendizaje Flexible',
        description: 'Accede a nuestros cursos en cualquier momento y desde cualquier lugar.'
    },
    {
        icon: 'bi-person-check',
        title: 'Instructores Expertos',
        description: 'Aprende de profesionales líderes en sus respectivos campos.'
    },
    {
        icon: 'bi-graph-up',
        title: 'Desarrollo Continuo',
        description: 'Actualiza constantemente tus habilidades con nuestro contenido siempre al día.'
    }
])

function irCursos(){
    router.push('/cursos')
}

</script>

<template>
    <div id="about-us" class="container-fluid p-0">
        <!-- Header Section -->
        <header class="bg-secondary text-white text-center py-5">
            <h1 class="display-4 fw-bold">Sobre SkilMind</h1>
            <p class="lead">SkilMind: Transformando el aprendizaje en 2024</p>
        </header>

        <!-- General Information Section -->
        <section class="py-5 bg-light">
            <div class="container">
                <h2 class="text-primary mb-4">Quiénes Somos</h2>
                <p class="lead">
                    SkilMind es un proyecto innovador de aprendizaje en línea que inicia en 2024, enfocado en ofrecer
                    cursos de alta calidad para el desarrollo profesional y personal.
                </p>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="card h-100 mission-card">
                            <div class="card-body">
                                <h3 class="h5 text-primary">
                                    <i class="bi bi-bullseye me-2"></i>Misión
                                </h3>
                                <p>Empoderar a las personas a través de la educación digital accesible y efectiva.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 vision-card">
                            <div class="card-body">
                                <h3 class="h5 text-primary">
                                    <i class="bi bi-eye me-2"></i>Visión
                                </h3>
                                <p>Ser líderes en aprendizaje en línea, transformando vidas a través del conocimiento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-5">
            <div class="container">
                <h2 class="text-primary mb-4 text-center">Nuestras Características</h2>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="(feature, index) in features" :key="index">
                        <div class="card h-100 feature-card">
                            <div class="card-body text-center">
                                <i :class="['bi', feature.icon, 'display-4', 'text-primary', 'mb-3']"></i>
                                <h3 class="h5">{{ feature.title }}</h3>
                                <p>{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="py-5 bg-light text-dark text-center">
            <div class="container">
                <h2 class="mb-4 text-primary">Únete a la revolución del aprendizaje en línea</h2>
                <p class="lead mb-4">Descubre cómo SkilMind puede impulsar tu desarrollo profesional y personal.</p>
                <button class="btn btn-primary btn-lg" @click="irCursos()">Explora Nuestros Cursos</button>
            </div>
        </section>
    </div>
</template>

<style scoped>
.bg-primary {
    background-color: #143c64 !important;
}

.bg-secondary {
    background-color: #1a5f7a !important;
}

.text-primary {
    color: #143c64 !important;
}

.mission-card,
.vision-card,
.feature-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mission-card:hover,
.vision-card:hover,
.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
    background-color: #143c64;
    border-color: #143c64;
}

.btn-primary:hover {
    background-color: #0d2b4a;
    border-color: #0d2b4a;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}
</style>