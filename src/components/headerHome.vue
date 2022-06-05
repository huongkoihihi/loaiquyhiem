<template>
  <div>
    <div class="header1">
      <div style="padding-right: 40px ;">
        Dang nhap
      </div>
      <div style="padding-right: 40px ;">
        Ngon ngu
      </div>
    </div>
    <div class="header2">
      <div style="display: flex; align-items: center; justify-content: flex-start; ">
        <div style="padding-right: 40px ;" @click="home()">
          <img src="../images/header/logoColor.e5de23ce.png" style="width: 70px; height:85px;margin-left:10px">
        </div>
        <div>
          <b>HE THONG BAO CAO VE HIEN TRANG<br>LOAI NGUY CAP QUY HIEM DUOC UU TIEN</b>
        </div>
      </div>
      <div style="display: flex ; align-items:center; ">
        <div style="padding-right: 20px ;">
          <b>GIOI THIEU</b>
        </div>
        <div style="width: 0px; height: 28px; border: 0.5px solid #FFFFFF;"></div>
        <div style="padding-right: 40px ; padding-left: 20px;">
          <b>TAI LIEU</b>
        </div>
        <div
          style="margin-right: 34px ; height: 111px; width: 104px; display: flex; align-items: center; justify-content: center; background: #FFC476; color: black;">
          <b>LIEN HE</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    home(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
.header1 {
  width: 100%;
  height: 43.39px;
  background: #AD180D;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header2 {
  width: 100%;
  height: 111px;
  background: #DA2A1C;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
