<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello Vue</h1>
  <SampleComponent />
  <div class="m-3">
    <Button>Button</Button>
  </div>
</template>

<script>
import SampleComponent from '@/components/SampleComponent.vue';

export default {
  components: {
    SampleComponent,
  },
};
</script>

<style></style>
