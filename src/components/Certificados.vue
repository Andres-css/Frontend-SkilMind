<template>
    <div class="container my-5">
      <h1 class="text-center mb-5 text-primary">Consulta de Certificados</h1>
      
      <form @submit.prevent="consultarCertificados" class="row g-3 mb-4">
        <div class="col-md-5">
          <label for="tipoDocumento" class="form-label">Tipo de documento</label>
          <select v-model="tipoDocumento" id="tipoDocumento" class="form-select" required>
            <option value="">Seleccione un tipo</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="PA">Pasaporte</option>
          </select>
        </div>
        <div class="col-md-5">
          <label for="numeroDocumento" class="form-label">Número de documento</label>
          <input v-model="numeroDocumento" type="text" class="form-control" id="numeroDocumento" required>
        </div>
        <div class="col-md-2 d-flex align-items-end">
          <button type="submit" class="btn w-100" style="background-color: #143c64; color: white;">Consultar Certificados</button>
        </div>
      </form>
      
      <div v-if="mostrarResultados">
        <h2 class="mb-3">Resultados de la consulta</h2>
        <div v-if="certificados.length > 0">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Número del certificado</th>
                  <th>Nombre del curso</th>
                  <th>Fecha de emisión</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="certificado in certificados" :key="certificado.numero">
                  <td>{{ certificado.numero }}</td>
                  <td>{{ certificado.curso }}</td>
                  <td>{{ certificado.fecha }}</td>
                  <td>
                    <span :class="{'badge bg-success': certificado.estado === 'Válido', 'badge bg-warning': certificado.estado === 'En proceso'}">
                      {{ certificado.estado }}
                    </span>
                  </td>
                  <td>
                    <button @click="descargarCertificado(certificado.numero)" class="btn btn-sm btn-outline-primary">
                      <i class="bi bi-download me-1"></i> Descargar PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-else class="alert alert-info" role="alert">
          No se encontraron certificados para este documento.
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tipoDocumento = ref('')
  const numeroDocumento = ref('')
  const mostrarResultados = ref(false)
  const certificados = ref([])
  
  // Simulación de datos de certificados
  const certificadosSimulados = [
    { numero: 'CERT-001', curso: 'Introducción a Vue.js', fecha: '2023-01-15', estado: 'Válido' },
    { numero: 'CERT-002', curso: 'Diseño Responsivo con Bootstrap', fecha: '2022-11-30', estado: 'Válido' },
    { numero: 'CERT-003', curso: 'JavaScript Avanzado', fecha: '2022-06-20', estado: 'En proceso' },
  ]
  
  const consultarCertificados = () => {
    // Simulamos una consulta a un API
    setTimeout(() => {
      // En un caso real, aquí se haría una llamada a un API con tipoDocumento.value y numeroDocumento.value
      if (numeroDocumento.value === '12345678') {
        certificados.value = certificadosSimulados
      } else {
        certificados.value = []
      }
      mostrarResultados.value = true
    }, 500) // Simulamos un pequeño retraso para imitar una llamada a un API
  }
  
  const descargarCertificado = (numeroCertificado) => {
    // En un caso real, aquí se haría una llamada a un API para descargar el PDF
    console.log(`Descargando certificado ${numeroCertificado}`)
    alert(`Se ha iniciado la descarga del certificado ${numeroCertificado}`)
  }
  </script>
  
  <style scoped>
  :root {
    --primary-color: #143c64;
  }
  
  .text-primary {
    color: var(--primary-color) !important;
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
  
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
  
  h2 {
    color: var(--primary-color);
    font-size: 1.8rem;
  }
  
  .table {
    --bs-table-striped-bg: rgba(20, 60, 100, 0.05);
  }
  
  @media (max-width: 768px) {
    .col-md-2 {
      margin-top: 1rem;
    }
  }
    
  .btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
  </style>
  
  