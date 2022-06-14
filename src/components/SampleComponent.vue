<template>
  <h1>A simple example component</h1>
  <h2>Follow the official style guidelines when working with the template</h2>
  <a href="https://v2.vuejs.org/v2/style-guide/">Official style guide </a>
</template>

<script>
export default {
  data() {
    return {
      data: 'value',
    };
  },
  props: {
    //example prop with as much info as possible
    seasons: {
      type: String,
      default: 'winter',
      required: true,
      validator: function (value) {
        return ['winter', 'spring', 'summer', 'autumn'].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped></style>
