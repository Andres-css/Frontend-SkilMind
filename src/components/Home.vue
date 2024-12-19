<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import Experto from "../assets/clasificacion.png";
import Aprendizaje from "../assets/aprender-en-linea.png";
import Certificacion from "../assets/certificado-de-garantia.png";
import Mujer from "../assets/mujer.png";
import Mujer2 from "../assets/mujer 2.png";
import Hombre from "../assets/hombre.png";
import Programacion from "../assets/programacion.png";
import Marketing from "../assets/marketing.png";
import DiseñoUX from "../assets/diseñoux.png";

const router = useRouter()

function irCursos(){
    router.push('/cursos')
}

function irDetalleCursos(){
    router.push('/detalle-curso')
}

const courses = ref([
  {
    image: Programacion,
    title: "Programación Web",
    description: "Aprende HTML, CSS y JavaScript desde cero."
  },
  {
    image: Marketing,
    title: "Marketing Digital",
    description: "Domina las estrategias de marketing online."
  },
  {
    image: DiseñoUX,
    title: "Diseño UX/UI",
    description: "Crea interfaces atractivas y funcionales."
  }
]);

const benefits = ref([
  {
    icon: Experto,
    title: "Cursos creados por expertos",
    description: "Aprende de los mejores en cada industria."
  },
  {
    icon: Aprendizaje,
    title: "Aprendizaje a tu propio ritmo",
    description: "Estudia cuando y donde quieras."
  },
  {
    icon: Certificacion,
    title: "Certificados al finalizar",
    description: "Obtén reconocimiento por tus logros."
  },
]);

const testimonials = ref([
  {
    avatar: Mujer,
    name: "María G.",
    rating: "★★★★★",
    text: "Los cursos son excelentes y el soporte es increíble. ¡Altamente recomendado!"
  },
  {
    avatar: Hombre,
    name: "Juan P.",
    rating: "★★★★☆",
    text: "Aprendí mucho y pude aplicarlo inmediatamente en mi trabajo. Gracias por la experiencia."
  },
  {
    avatar: Mujer2,
    name: "Ana L.",
    rating: "★★★★★",
    text: "La flexibilidad de los cursos me permitió estudiar mientras trabajaba. ¡Fantástico!"
  }
]);

const email = ref("");

function subscribe() {
  alert(`Gracias por suscribirte con el correo: ${email.value}`);
}
</script>

<template>
    <main style="margin-top: 50px;">
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Aprende desde cualquier lugar, a tu propio ritmo.</h1>
                <p>Accede a cursos en línea diseñados por expertos y mejora tus habilidades hoy mismo.</p>
                <div class="cta-buttons">
                    <a @click="irCursos()" class="btn" style="background-color: #143c64; color: white;">Explorar Cursos</a>
                    <a @click="irCursos()" class="btn" style="background-color: #143c64; color: white;">Comenzar Gratis</a>
                </div>
            </div>
        </section>

        <!-- Featured Courses Section -->
        <section class="featured-courses">
            <div class="container">
                <h2>Cursos Destacados</h2>
                <div class="courses-grid">
                    <div v-for="(course, index) in courses" :key="index" class="course-card">
                        <img :src="course.image" :alt="course.title">
                        <h3>{{ course.title }}</h3>
                        <p>{{ course.description }}</p>
                        <a @click="irDetalleCursos()" class="btn btn-outline">Ver Detalles</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="benefits" style="background-color: #143c64;">
            <div class="container">
                <h2 style="color: white;">¿Por qué elegirnos?</h2>
                <div class="benefits-grid" style="color: white;">
                    <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item">
                        <img :src="benefit.icon" :alt="benefit.title">
                        <h3>{{ benefit.title }}</h3>
                        <p>{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials">
            <div class="container">
                <h2>Lo que dicen nuestros estudiantes</h2>
                <div class="benefits-grid">
                    <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
                        <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-avatar">
                        <h3>{{ testimonial.name }}</h3>
                        <div class="star-rating">{{ testimonial.rating }}</div>
                        <p>{{ testimonial.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Signup Section -->
        <section class="newsletter">
            <div class="container">
                <h2 style="color: black;">Mantente actualizado</h2>
                <p style="color: black;">Recibe las últimas noticias sobre cursos y ofertas especiales.</p>
                <form class="newsletter-form" @submit.prevent="subscribe">
                    <input type="email" v-model="email"
                        placeholder="Introduce tu correo para recibir ofertas y nuevos cursos" required>
                    <button type="submit" class="btn " style="background-color: #143c64;">Suscribirse</button>
                </form>
            </div>
        </section>
    </main>
</template>

<style scoped>
/* Variables para colores y fuentes */
:root {
    --color-primary: #4CAF50;
    --color-secondary: #FF5722;
    --color-text: #333;
    --color-background: #f7f7f7;
    --color-card-bg: #ffffff;
    --color-accent: #FFC107;
    --font-main: 'Roboto', sans-serif;
    --font-heading: 'Poppins', sans-serif;
}

/* Estilos base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    line-height: 1.6;
    color: var(--color-text);
    background-color: var(--color-background);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
}

h1, h2, h3 {
    font-family: var(--font-heading);
    margin-bottom: 1rem;
}

/* Botones */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-secondary {
    background-color: var(--color-secondary);
    color: white;
}

.btn-outline {
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
}

.btn:hover {
    transform: scale(1.05);
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/Portada.jpg') no-repeat center center;
    background-size: 100%;
    background-position: center; /* Para centrar la imagen */
    background-repeat: no-repeat; /* Para evitar que la imagen se repita */
    color: white;
    text-align: center;
    padding: 7rem 0;
    border-bottom: 10px solid var(--color-accent);
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

/* Featured Courses Section */
.featured-courses {
    padding: 3rem 0;
}

.featured-courses h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
    font-weight: bold;
    text-transform: uppercase;
}

.courses-grid {
    display: grid;
    gap: 2rem;
}

.course-card {
    background-color: var(--color-card-bg);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.course-card:hover {
    transform: translateY(-10px);
}

.course-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-bottom: 5px solid var(--color-primary);
}

.course-card h3, .course-card p {
    padding: 0 1rem;
}

.course-card h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: var(--color-secondary);
}

.course-card .btn {
    display: block;
    text-align: center;
    margin: 1.5rem;
}

/* Benefits Section */
.benefits {
    background-color: var(--color-primary);
    color: rgb(0, 0, 0);
    padding: 3rem 0;
}

.benefits h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
}

.benefits-grid {
    display: grid;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}

.benefit-item {
    text-align: center;
}

.benefit-item img {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
}

.benefit-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Testimonials Section */
.testimonials {
    background-color: var(--color-background);
    padding: 3rem 0;
}

.testimonials h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
}

.testimonials-grid {
    display: grid;
    gap: 2rem;
    justify-items: center;
}

.testimonial-card {
    background-color: var(--color-card-bg);
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    max-width: 400px;
}

.testimonial-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid var(--color-primary);
}

.star-rating {
    color: gold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

/* Newsletter Section */
.newsletter {
    background-color: var(--color-secondary);
    color: white;
    padding: 3rem 0;
    text-align: center;
}

.newsletter h2 {
    margin-bottom: 1rem;
    font-weight: bold;
}

.newsletter p {
    margin-bottom: 2rem;
}

.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 700px;
    margin: 0 auto;
}

.newsletter-form input {
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
}

.newsletter-form button {
    background-color: var(--color-accent);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
    background-color: #e0a800;
}

/* Media Queries */
@media (min-width: 768px) {
    .courses-grid,
    .benefits-grid,
    .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .newsletter-form {
        flex-direction: row;
    }

    .newsletter-form input {
        flex-grow: 1;
    }
}

@media (min-width: 1024px) {
    .courses-grid,
    .benefits-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .hero h1 {
        font-size: 4rem;
    }

    .hero p {
        font-size: 1.5rem;
    }
}
</style>
