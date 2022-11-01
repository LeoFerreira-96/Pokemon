<template>
    <div class="container">
        <DataTable :value="pokemon">
        <Column field="id" header="#"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="height" header="Altura"></Column>
        <Column field="weight" header="Peso"></Column>
        <Column field="buttons" header="Botões"></Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
  name: 'Table',
  components:{
    DataTable,
    Column
  }
}
</script>

<style scoped>
.container{
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 15px;
    width: 65%;
}
</style>