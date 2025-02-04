<template>
  <div>
    <Navbar titulo="Administrador de Tareas" />
    <TareaAdmin />
  </div>
</template>

<script>
import Navbar from './components/barraNav.vue';
import TareaAdmin from './components/TareaAdmin.vue';

export default {
  components: {
    Navbar,
    TareaAdmin
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif; 
}

</style>
