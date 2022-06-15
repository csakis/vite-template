<template>
  <div class="grid mt-3">
    <div class="col">
      <AppTabs />
        <router-view />
      <h1>Vue sample application with PrimeVue</h1>
      <Image width="150" alt="Vue logo" src="../src/assets/logo.png"></Image>
      <SampleComponent />
      <div class="m-3">
        <Button>Button</Button>
      </div>
    </div>
  </div>
</template>

<script>
import SampleComponent from '@/components/SampleComponent.vue';
import AppTabs from '@/components/AppTabs.vue';


export default {
  components: {
    SampleComponent,
    AppTabs,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
