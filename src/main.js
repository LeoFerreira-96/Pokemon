/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */

import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from "vue";
import App from "./App.vue";

import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Image from 'primevue/image';

import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";

const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);
app.component('Image', Image);

app.mount("#app");