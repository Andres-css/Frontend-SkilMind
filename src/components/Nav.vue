<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (route) => {
  router.push(route);
};
</script>

<template>
  <div id="app" class="d-flex flex-column" style="height: 100vh;">
    <!-- Header/Nav -->
    <header>
      <nav class="navbar navbar-expand-lg fixed-top custom-bg">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand" href="#" @click="goTo('/')">
            <img src="../assets/Logo SkilMind.png" alt="Logo de la empresa" style="max-height: 60px;">
          </a>

          <!-- Botón toggle para móviles -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Menú de navegación -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;color: white;" @click="goTo('/')">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;color: white;" @click="goTo('/cursos')">Cursos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;color: white;"
                  @click="goTo('/certificados')">Certificados</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;color: white;" @click="goTo('/sobre-nosotros')">Sobre
                  Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="cursor: pointer;color: white;" @click="goTo('/contactenos')">Contáctenos</a>
              </li>
            </ul>

            <!-- Botones de autenticación -->
            <div class="d-flex ms-lg-3">
              <button class="btn btn-outline-light me-2" data-bs-toggle="modal"
                data-bs-target="#loginModal">Acceder</button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="content mt-5 pt-4 flex-grow-1">
      <router-view></router-view>
    </main>

    <!-- Modal de Login -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Iniciar Sesión</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="username" placeholder="Ingrese su usuario">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
              </div>
              <button type="button" class="btn w-100" style="background-color: #143c64; color: white;">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="custom-bg">
      <div class="footer-container text-white text-center py-4">
        <div class="footer-logo mb-3">
          <img src="../assets/Logo SkilMind.png" alt="Logo Footer" style="max-height: 60px;">
        </div>
        <div class="footer-links mb-3">
          <a style="cursor: pointer;" class="text-white text-decoration-none me-3" @click="goTo('/')">Inicio</a>
          <a style="cursor: pointer;" class="text-white text-decoration-none me-3" @click="goTo('/cursos')">Cursos</a>
          <a style="cursor: pointer;" class="text-white text-decoration-none me-3"
            @click="goTo('/certificados')">Certificados</a>
          <a style="cursor: pointer;" class="text-white text-decoration-none me-3"
            @click="goTo('/sobre-nosotros')">Sobre Nosotros</a>
          <a style="cursor: pointer;" class="text-white text-decoration-none"
            @click="goTo('/contactenos')">Contáctenos</a>
        </div>
        <div class="social-icons mb-3">
          <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2024 SkilMind. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Asegura que el contenido ocupe al menos el 100% de la altura de la pantalla */
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Esto asegura que #app ocupe al menos toda la altura de la pantalla */
}

.content {
  margin-top: 80px;
  /* Ajusta para no solaparse con el navbar fijo */
  flex-grow: 1;
  /* Asegura que el contenido crezca y empuje el footer al fondo si es necesario */
}

.custom-bg {
  background-color: #143c64 !important;
}

footer.custom-bg {
  margin-top: auto;
  /* Esto asegura que el footer se mantenga en la parte inferior si el contenido es pequeño */
}
</style>
