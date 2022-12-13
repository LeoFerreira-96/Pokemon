
<template>
  <Dialog v-model:visible="display">
    <template #header>
		<h3>Header</h3>
	</template>

	Content

	<template #footer>
		<Button label="No" icon="pi pi-times" class="p-button-text"/>
        <Button label="Yes" icon="pi pi-check" autofocus />
	</template>
</Dialog>
</template>

<script>
export default {
  name: 'Options',
  components:{
  }
}
</script>