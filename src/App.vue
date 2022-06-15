<template>
  <div class="landing-class">
    <div class="layout-wrapper" :class="`layout-wrapper-${store.theme}`">
      <div class="grid mt-3">
        <ThemeSwitcher />
        <div class="col">
          <h1>Vue sample application with PrimeVue for ISSA</h1>
          <AppTabs />
          <router-view />
          <Image
            width="150"
            alt="Vue logo"
            src="/src/assets/logo.png"
          ></Image>
          <SampleComponent />
          <div class="m-3">
            <Button>Button</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SampleComponent from '@/components/SampleComponent.vue';
import AppTabs from '@/components/AppTabs.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

export default {
  components: {
    SampleComponent,
    AppTabs,
    ThemeSwitcher,
  },
  inject: ['store'], // adding global store
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

 body {
      margin: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: var(--surface-a);
      font-family: var(--font-family);
      font-weight: 400;
      color: var(--text-color);
   }
</style>
