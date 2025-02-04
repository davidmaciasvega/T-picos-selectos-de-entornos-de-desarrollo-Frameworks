<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a
          class="navbar-brand"
          href="#"
        >{{ titulo }}</a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li @click="redirigirEscuela">
          <img 
            :src="logoEscuela" 
            alt="Logo escuela" 
            class="icono-escuela"
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logoEscuela from '@/assets/udegv1.jpg';
export default {
  props: {
    titulo: {
      type: String,
      default: "Administrador de Tareas",
    },
  },
  data() {
    return {
      logoEscuela,
    };
  },
  methods: {
    redirigirEscuela() {
      window.location.href = 'https://udgplus.udg.mx/';
    }
  }
}
</script>
