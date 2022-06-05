<template>
  <div>
    <HeaderHome/>
    <router-view />
    <ChanTrang/>
  </div>
</template>

<script>
import HeaderHome from "./components/headerHome.vue";
import ChanTrang from "./components/ChanTrang.vue";
export default {
  components: {
    HeaderHome,
    ChanTrang
}
}

</script>

<style>

</style>
