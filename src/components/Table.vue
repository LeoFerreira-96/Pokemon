<template>
  <div class="container">
    <DataTable
      :value="this.pokemons"
      :paginator="true"
      :rows="6"
      selectionMode="single"
      dataKey="id"
      @rowSelect="ClickShow($event)"
      responsiveLayout="scroll"
    >
      <Column field="id" header="#" :sortable="true"></Column>
      <Column field="name" header="Nome" :sortable="true"></Column>
      <Column field="height" header="Altura" :sortable="true"></Column>
      <Column field="weight" header="Peso" :sortable="true"></Column>
    </DataTable>
    <!-- <Dialog v-model:visible="display" :style="{width: '35vw'}">
          <template #header>
            <h3>{{this.infoPokemon.name}}</h3>
          </template>
            <div class="content">
              <Image :src="this.infoPokemon.image" :alt="this.pokemons.name" width="150" />
            </div>
            <h3>Habilidades</h3>
            <ul id="abilities">
              <li v-for="item in this.infoPokemon.abilities" :key="item">
                {{ item }}
              </li>
            </ul>

          <template #footer>
              <Button label="Fechar" autofocus @click="ClickClose()"/>
        </template>
      </Dialog> -->
  </div>
  <div class="card">
    <!-- <h3>{{ this.infoPokemon.name.toUpperCase() }}</h3> -->
    <h3>{{ this.infoPokemon.name }}</h3>

    <Image
      :src="this.infoPokemon.image"
      :alt="this.pokemons.name"
      width="300"
    />
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "Table",

  data() {
    return {
      infoPokemon: "",
      pokemons: [],
      display: false,
    };
  },
  mounted() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      const {
        data: { results },
      } = await api.get("pokemon?limit=151&offset=0");
      console.log("results", results);
      for await (let pokemon of results) {
        const { data } = await api.get(`pokemon/${pokemon.name}`);
        this.pokemons.push({
          id: data.id,
          name: data.name,
          height: `${data.height * 10} cm`,
          weight: `${data.weight / 10} kg`,
          abilities: data.abilities.map((e) => {
            return e.ability.name;
          }),
          image: data.sprites.front_default,
        });
      }
    },

    ClickShow(event) {
      this.display = true;
      this.infoPokemon = event.data;
    },
    ClickClose() {
      this.display = false;
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #000000;
  width: 100%;
  height: 450px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  border: 1px solid #000000;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 35px;
}
</style>