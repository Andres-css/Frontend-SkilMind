<script setup>
import { reactive } from 'vue'
import Programacion from "../assets/programacion.png"

const curso = reactive({
  nombre: 'Desarrollo Web Avanzado',
  tipo: 'Programación',
  descripcion: 'Este curso te llevará desde los fundamentos del desarrollo web hasta técnicas avanzadas utilizadas en la industria. Aprenderás HTML5, CSS3, JavaScript moderno, y frameworks populares como Vue.js y React.',
  imagen: Programacion,
  video: 'https://www.youtube.com/embed/q0UgClC8md4',
  modulos: [
    { nombre: 'Introducción al Desarrollo Web' },
    { nombre: 'Desarrollo Frontend Avanzado' },
    { nombre: 'Backend y APIs' },
    { nombre: 'Despliegue y Optimización' }
  ]
})

const inscripcion = reactive({
  nombre: '',
  apellidos: '',
  tipoDocumento: '',
  numeroDocumento: '',
  telefono: '',
  email: '',
  password: ''
})

const enviarInscripcion = () => {
  // Aquí iría la lógica para enviar la inscripción al servidor
  console.log('Inscripción enviada:', inscripcion)
  
  // Simulamos una respuesta exitosa
  setTimeout(() => {
    alert('Inscripción completada con éxito')
    // Limpiar el formulario
    Object.keys(inscripcion).forEach(key => inscripcion[key] = '')
  }, 1000)
}
</script>

<template>
    <div class="container mt-5">
        <header class="mb-5">
            <div class="row align-items-center">
                <div class="col-md-3 col-sm-4 mb-3 mb-sm-0">
                    <img :src="curso.imagen" :alt="curso.nombre" class="img-fluid rounded">
                </div>
                <div class="col-md-9 col-sm-8">
                    <h1 class="display-4 text-primary fw-bold">{{ curso.nombre }}</h1>
                    <h2 class="h4 text-secondary">{{ curso.tipo }}</h2>
                </div>
            </div>
        </header>

        <div class="row mb-5">
            <div class="col-md-8">
                <p>{{ curso.descripcion }}</p>
            </div>
            <div class="col-md-4">
                <!-- Botón actualizado -->
                <button 
                    class="btn btn-primary btn-lg w-100" 
                    data-bs-toggle="modal" 
                    data-bs-target="#inscripcionModal">
                    Inscribirse
                </button>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-12">
                <h3 class="h4 mb-3">Video del curso</h3>
                <div v-if="curso.video" class="ratio ratio-16x9">
                    <iframe :src="curso.video" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-12">
                <h3 class="h4 mb-3">Módulos del curso</h3>
                <ul class="list-group">
                    <li v-for="(modulo, index) in curso.modulos" :key="index" class="list-group-item">
                        {{ modulo.nombre }}
                    </li>
                </ul>
            </div>
        </div>

        <!-- Modal de inscripción -->
        <div class="modal fade" id="inscripcionModal" tabindex="-1" aria-labelledby="inscripcionModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="inscripcionModalLabel">Inscripción al curso</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="enviarInscripcion">
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" v-model="inscripcion.nombre"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="apellidos" class="form-label">Apellidos</label>
                                <input type="text" class="form-control" id="apellidos" v-model="inscripcion.apellidos"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="tipoDocumento" class="form-label">Tipo de documento</label>
                                <select class="form-select" id="tipoDocumento" v-model="inscripcion.tipoDocumento"
                                    required>
                                    <option value="">Seleccione...</option>
                                    <option value="cc">Cédula de ciudadanía</option>
                                    <option value="ce">Cédula de extranjería</option>
                                    <option value="pasaporte">Pasaporte</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="numeroDocumento" class="form-label">Número de documento</label>
                                <input type="text" class="form-control" id="numeroDocumento"
                                    v-model="inscripcion.numeroDocumento" required>
                            </div>
                            <div class="mb-3">
                                <label for="telefono" class="form-label">Teléfono</label>
                                <input type="tel" class="form-control" id="telefono" v-model="inscripcion.telefono"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" v-model="inscripcion.email"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="password" v-model="inscripcion.password"
                                    required>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Enviar inscripción</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.text-primary {
    color: #143c64 !important;
}

.btn-primary {
    background-color: #143c64;
    border-color: #143c64;
}

.btn-primary:hover {
    background-color: #0f2d4a;
    border-color: #0f2d4a;
}

.list-group-item {
    border-left: 3px solid #143c64;
    transition: background-color 0.3s ease;
}

.list-group-item:hover {
    background-color: #e7f1ff;
}

@media (max-width: 576px) {
    .display-4 {
        font-size: 2.5rem;
    }
}
</style>