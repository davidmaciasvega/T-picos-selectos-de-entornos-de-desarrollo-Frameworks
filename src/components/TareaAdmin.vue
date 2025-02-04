<template>
  <div class="Contenedor">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <input
          v-model="tarea.nombreTarea"
          type="text"
          class="form-control form-control-lg"
          placeholder="Ingresa la tarea"
          @keyup.enter="agregarTarea"
        >
        <br>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <textarea
          v-model="tarea.descripcion"
          class="form-control"
          placeholder="Descripción de la tarea"
          rows="2"
        />
        <br>
        <div class="boton pt-3">
          <button 
            class="btn btn-primary btn-lg"
            @click="agregarTarea"
          >
            Agregar Tarea
          </button>
        </div>
      </div>
    </div>
    <br><br>
    <div class="row mt-4">
      <div class="col-lg-8 offset-lg-2">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in tareas"
              :key="item.id"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.nombreTarea }}</td>
              <td>{{ item.descripcion }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tareas: [],
      tarea: {
        id: null,
        nombreTarea: "",
        descripcion: "",
        estado: false,
      },
    };
  },
  methods: {
    agregarTarea() {
      if (this.tarea.nombreTarea.trim() === "") return;
      
      this.tareas.push({
        id: Date.now(),
        nombreTarea: this.tarea.nombreTarea,
        descripcion: this.tarea.descripcion,
        estado: false,
      });
      
      this.tarea = {
        id: null,
        nombreTarea: "",
        descripcion: "",
        estado: false,
      };
    },
  },
};
</script>

<style scoped>
.boton {
  text-align: center;
}
</style>
