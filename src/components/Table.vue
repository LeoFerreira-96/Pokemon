<template>
    <div class="container">
        <DataTable :value="pokemons" responsiveLayout="scroll" :paginator="true" :rows="25">
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
import api from '../services/api'
export default {
  name: 'Table',
  components:{
    DataTable,
    Column
  },
  data() {
        return {
            pokemons: []
        }
    },
    mounted() {
        this.getPokemons()
    },
    methods: {
      async getPokemons() {
        try {
          const pokemons = await api.get('pokemon?limit=151&offset=0')
        this.pokemons = pokemons.data.results.map(async ( _,index) => {
          const id = Number(index+1)
          return this.pokemons = await api.get(`pokemon/${id}`)
        })
        }catch (error) {
          console.log(error)
        }
      }
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