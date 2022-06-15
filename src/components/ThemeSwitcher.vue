<template>
 <Button @click="switchTheme">
  <i v-if="store.theme==='light'" class="pi pi-moon"></i>
  <i v-if="store.theme==='dark'" class="pi pi-sun"></i>
 </Button>
</template>

<script>
  export default {
    inject: ['store'],
    methods: {
      switchTheme() {
        this.store.theme = this.store.theme === 'light' ? 'dark' : 'light';
        const linkElement = document.getElementById('theme-link');
        const newTheme = `src/assets/themes/${this.store.theme}/theme.css`
        linkElement.setAttribute('href', newTheme);
      }
    }


  }
</script>

<style lang="scss" scoped>

</style>