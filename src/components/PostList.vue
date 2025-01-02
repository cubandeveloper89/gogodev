<template>
    <h3>Post List</h3>
    <div class="container">
        <PostDetails v-for="elm in info" :key="elm.title" 
        :title="elm.title" 
        :content="elm.content" 
        user="Camilo Garcia"
        @sayHi="showAlert"
        />
        
    </div>
</template>

<script lang="ts" setup>
import IPost from '@/models/IPost';
import PostDetails from './PostDetails.vue';

let info: IPost[] = [{
    title: "Este es el Post #1",
    content: "Texto de ejemplo del post numero 1"
},{
    title: "Este es el Post #2",
    content: "Texto de ejemplo del post numero 2"
},{
    title: "Este es el Post #3",
    // content: "Texto de ejemplo del post numero 3"
},{
    title: "Este es el Post #4",
    content: "Texto de ejemplo del post numero 4"
},{
    title: "Este es el Post #5",
    content: "Texto de ejemplo del post numero 5"
}]
function showAlert(msg:string){
    alert(msg)
}
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: row; */
    justify-content: space-around;
}
</style>