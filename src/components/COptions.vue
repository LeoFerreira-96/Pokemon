
<template>
  <CDialog v-model:visible="display">
    <template #header>
		<h3>Header</h3>
	</template>

	Content

	<template #footer>
		<CButton label="No" icon="pi pi-times" class="p-button-text"/>
        <CButton label="Yes" icon="pi pi-check" autofocus />
	</template>
</CDialog>
</template>

<script>
export default {
  name: 'COptions',
  components:{
  }
}
</script>