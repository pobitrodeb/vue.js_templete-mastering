<template>
  <header-section></header-section>
  <router-view></router-view>
  <footer-section></footer-section>
  <later-section></later-section>
</template>

<script>
import HeaderSecation from '../components/frontend/Header.vue';
import FooterSection from '../components/frontend/Footer.vue';
import LaterSection from '../components/frontend/Newsletter.vue';
export default {
  name: "Master",
  components: {HeaderSecatio,FooterSection,LaterSection}
};
</script>

<style lang="scss" scoped></style>
