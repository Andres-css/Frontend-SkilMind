<script setup>
import { ref } from 'vue'

</script>

<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="logo">
          <img src="../assets/Logo SkilMind.png" alt="Logo de la empresa">
        </div>
        <nav>
          <ul>
            <li><a href="#inicio" class="active">Inicio</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#nosotros">Sobre Nosotros</a></li>
            <li><a href="#contacto">Contactenos</a></li>
          </ul>
        </nav>
        <div class="auth-buttons">
          <button class="btn btn-secondary" style="margin-right: 40px;">Acceder</button>
        </div>
        <button class="menu-toggle" aria-label="Abrir menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <main class="content">
      <router-view></router-view>
    </main>

    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="../assets/Logo SkilMind.png" alt="Logo Footer">
        </div>
        <div class="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#cursos">Cursos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div class="social-icons">
          <a href="#" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2024 SkilMind. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

/* Ajustes del encabezado y navegación */
header {
  background-color: #143c64;
  /* Fondo oscuro para mayor contraste */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
}



header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo img {
  max-height: 100px;
  /* Tamaño ajustado para mejor proporción */
  height: auto;
  margin-left: 6rem;
  /* Espacio entre el logo y el nav */
}

/* Navegación */
nav ul {
  list-style-type: none;
  display: none;
  /* Oculto en móvil por defecto */
  padding: 0;
  margin: 0;
}

nav ul li {
  margin-left: 1.5rem;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  /* Texto blanco para mayor contraste */
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #66b2ff;
  /* Color de hover */
}

/* Botones de autenticación */
.auth-buttons {
  display: none;
  /* Oculto en móvil por defecto */
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #66b2ff;
  /* Color primario */
  color: #fff;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  /* Blanco para contraste */
  border: 1px solid #ffffff;
}

.btn:hover {
  opacity: 0.9;
}

/* Botón de menú para móvil */
.menu-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  /* Blanco para contraste */
  margin: 5px 0;
  transition: all 0.3s ease;
}

footer {
  background-color: #143c64;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  margin: 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

}

footer .footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer .footer-logo img {
  max-height: 60px;
  margin-bottom: 1rem;
}

footer .footer-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

footer .footer-links a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

footer .footer-links a:hover {
  color: #66b2ff;
}

footer .social-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

footer .social-icons a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

footer .social-icons a:hover {
  color: #66b2ff;
}

/* Mostrar la navegación en dispositivos mayores a 768px */
@media (min-width: 768px) {
  nav ul {
    display: flex;
  }

  .auth-buttons {
    display: block;
  }

  .menu-toggle {
    display: none;
  }
}

@media (min-width: 1024px) {
  header .container {
    justify-content: flex-start;
  }

  nav {
    margin-left: auto;
    margin-right: 2rem;
  }

  .auth-buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>
