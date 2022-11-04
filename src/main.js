import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Image from 'primevue/image';

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);
app.component('Image', Image);

app.mount("#app");