<template>
  <div class="post">
    <h2>Hola {{ props.user }}</h2>
    <h4>{{ props.title }}</h4>
    <p>{{ props.content }}</p>
    <input type="text" name="" id="" v-model="message" />
    <button @click="handleClick">Di Hola</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, Ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: false,
    default: "Este post no tiene contenido",
  },
  user: {
    type: String,
    require: false,
    default: "Anónimo",
  },
});

const emit = defineEmits(["sayHi"]);  

let message: Ref<string> = ref("");

const handleClick = () => {
  emit("sayHi", message.value);
};
</script>

<style scoped>
.post {
  width: 300px;
  height: 200px;
  background-color: antiquewhite;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
