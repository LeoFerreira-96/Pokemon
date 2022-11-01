<template>
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <Title></Title>
  <div class="content">
    <Table></Table>
    <div class="card"></div>
  </div>
</template>

<script>
import Table from './Table.vue'
import Title from './Title.vue';
export default {
  name: 'Background',
  components:{
    Table,
    Title
  }
}
</script>

<style scoped>
body {
  margin:0;
}

.card {
  border: 1px solid #000000;
  border-radius: 10px;
  margin-left: 15px;
  width: 35%;
}
.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgb(255, 251, 0) 50%, rgb(0, 0, 0) 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-55%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

.content {
  background-color:rgba(255,255,255,.8);
  border-radius:.25em;
  box-shadow:0 0 .25em rgba(0,0,0,.25);
  box-sizing:border-box;
  width: 90%;
  height: 80%;
  left:50%;
  display: flex;
  padding:20px;
  position:fixed;
  text-align:center;
  top:55%;
  transform:translate(-50%, -50%);
}

h1 {
  font-family:monospace;
}

main{

}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
</style>
