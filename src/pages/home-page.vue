<template>
  <div>
    <HeaderSearch/>
    <LoaiNoiBat/>
    <ThongKe/>
    <BangTin/>
    <HeThongbaoCao></HeThongbaoCao>
    <SachDo></SachDo>
    <TrangLienQuan></TrangLienQuan>
  </div>
</template>

<script>

import LoaiNoiBat from '../components/loaiNoiBat.vue'
import ThongKe from '../components/ThongKe.vue'
import BangTin from '../components/BangTin.vue'
import HeThongbaoCao from '../components/HeThongbaoCao.vue'
import TrangLienQuan from '../components/TrangLienQuan.vue'
import SachDo from '../components/SachDo.vue'
import HeaderSearch from '@/components/headerSearch.vue'

export default {
  components: {
    LoaiNoiBat,
    ThongKe,
    BangTin,
    HeThongbaoCao,
    TrangLienQuan,
    SachDo,
    HeaderSearch
}
}
</script>

<style>

</style>

