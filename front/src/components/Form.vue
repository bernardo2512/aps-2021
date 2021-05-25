<template>
  <div class="form-group">
    <p>
      <input
        placeholder="nome"
        type="text"
        name="author"
        class="form-control"
        v-model="name"
      />
    </p>

    <p>
      <textarea
        name="description"
        class="form-control"
        placeholder="Descrição"
        v-model="description"
      ></textarea>
    </p>

    <button class="btn btn-primary" v-on:click="addTask">
      Adicionar Tarefa
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    addTask() {
      if (this.description.trim() === "") {
        return;
      }

      this.$emit("add-task", {
        name: this.name,
        description: this.description,
      });

      fetch("http://187.49.232.153:3013/tasks", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          description: this.description
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
        .then(res => res.json())
        .then(resJson => console.log(resJson))
        .catch(err => console.log(err));

      this.name = "";
      this.description = "";
    },
  },
};
</script>