<template>
    <div class="container mt-5">
        <header class="text-center mb-5">
            <h1 class="display-4 text-primary">Contáctenos</h1>
            <p class="lead">Estamos aquí para ayudarte. Contáctanos a través de cualquiera de los siguientes medios.</p>
        </header>

        <div class="row">
            <div class="col-md-6 mb-4">
                <h2 class="h3 mb-3 text-primary">Medios de contacto</h2>
                <div class="row">
                    <div class="col-sm-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-telephone-fill me-2"></i>Teléfono</h5>
                                <p class="card-text">+57 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-envelope-fill me-2"></i>Correo electrónico</h5>
                                <p class="card-text">contacto@skilmind.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-whatsapp me-2"></i>WhatsApp</h5>
                                <p class="card-text">+57 987 654 3210</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-globe me-2"></i>Redes sociales</h5>
                                <p class="card-text">
                                    <a href="https://facebook.com/skilmind" target="_blank"
                                        class="text-decoration-none">
                                        <i class="bi bi-facebook me-2"></i>facebook.com/skilmind
                                    </a><br>
                                    <a href="https://twitter.com/skilmind" target="_blank" class="text-decoration-none">
                                        <i class="bi bi-twitter me-2"></i>@skilmind
                                    </a><br>
                                    <a href="https://linkedin.com/company/skilmind" target="_blank"
                                        class="text-decoration-none">
                                        <i class="bi bi-linkedin me-2"></i>linkedin.com/company/skilmind
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <h2 class="h3 mb-3 text-primary">Formulario de contacto</h2>
                <form @submit.prevent="enviarFormulario" novalidate>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre completo</label>
                        <input type="text" class="form-control" :class="{ 'is-invalid': errores.nombre }" id="nombre"
                            v-model="formulario.nombre" required>
                        <div class="invalid-feedback">{{ errores.nombre }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" :class="{ 'is-invalid': errores.email }" id="email"
                            v-model="formulario.email" required>
                        <div class="invalid-feedback">{{ errores.email }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="asunto" class="form-label">Asunto</label>
                        <input type="text" class="form-control" :class="{ 'is-invalid': errores.asunto }" id="asunto"
                            v-model="formulario.asunto" required>
                        <div class="invalid-feedback">{{ errores.asunto }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="mensaje" class="form-label">Mensaje</label>
                        <textarea class="form-control" :class="{ 'is-invalid': errores.mensaje }" id="mensaje" rows="4"
                            v-model="formulario.mensaje" required></textarea>
                        <div class="invalid-feedback">{{ errores.mensaje }}</div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-5" :disabled="enviando">
                        <span v-if="enviando" class="spinner-border spinner-border-sm me-2" role="status"
                            aria-hidden="true"></span>
                        {{ enviando ? 'Enviando...' : 'Enviar solicitud' }}
                    </button>
                </form>
                <div v-if="mensajeExito" class="alert alert-success mt-3" role="alert">
                    {{ mensajeExito }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formulario = reactive({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
})

const errores = reactive({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
})

const mensajeExito = ref('')
const enviando = ref(false)

const validarFormulario = () => {
    let esValido = true

    if (!formulario.nombre.trim()) {
        errores.nombre = 'El nombre es requerido'
        esValido = false
    } else {
        errores.nombre = ''
    }

    if (!formulario.email.trim()) {
        errores.email = 'El correo electrónico es requerido'
        esValido = false
    } else if (!/\S+@\S+\.\S+/.test(formulario.email)) {
        errores.email = 'El correo electrónico no es válido'
        esValido = false
    } else {
        errores.email = ''
    }

    if (!formulario.asunto.trim()) {
        errores.asunto = 'El asunto es requerido'
        esValido = false
    } else {
        errores.asunto = ''
    }

    if (!formulario.mensaje.trim()) {
        errores.mensaje = 'El mensaje es requerido'
        esValido = false
    } else {
        errores.mensaje = ''
    }

    return esValido
}

const enviarFormulario = async () => {
    if (!validarFormulario()) return

    enviando.value = true

    try {
        // Simular envío de formulario
        await new Promise(resolve => setTimeout(resolve, 2000))

        mensajeExito.value = 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.'

        // Limpiar formulario
        Object.keys(formulario).forEach(key => formulario[key] = '')

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            mensajeExito.value = ''
        }, 5000)
    } catch (error) {
        console.error('Error al enviar el formulario:', error)
        mensajeExito.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
    } finally {
        enviando.value = false
    }
}
</script>

<style scoped>
.text-primary {
    color: #143c64 !important;
}

.btn-primary {
    background-color: #143c64;
    border-color: #143c64;
}

.btn-primary:hover:not(:disabled) {
    background-color: #0f2d4a;
    border-color: #0f2d4a;
}

.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}

a {
    color: #143c64;
}

a:hover {
    color: #0f2d4a;
}
</style>