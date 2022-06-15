<template>
  <TabMenu :model="menu" />

</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/',
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info-circle ',
          to: '/About',
        },
        {
          label: 'Contact',
          icon: 'pi pi-fw pi-phone',
          to: '/Contact',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
