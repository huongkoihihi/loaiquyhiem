<template>
  <div style="width: 100%;">
    <div style=" height: 0px; border: 0.5px solid #EA5448;"></div>
    <div class="header3">
      <div class="search">
        <input style="border:none; width: 600px; height: 40px; font-size: 16px; padding-left: 10px; " type="text" v-model="search"  placeholder="Ten - Ten khoa hoc" />
        <div class="dropdown" v-if="!loading">
          <div v-for="(item, index) in loaiNoBats" :key="index">
            <div class="timkiem">
              <div @click="xemChiTiet(item.id)"><b>{{ item.ten }}</b></div>
            </div>
          </div>
        </div>
      </div>
      <div style=" background: grey; color: white; width: 40px; height: 42px; display:flex; align-items:center; justify-content:center;" @click="TimKiem()">
        <img src="../images/header/kinhlup.svg">
      </div>
      <div style="width: 0px; height: 40px ;border: 1px solid #EA5448; margin-left: 20PX; margin-right: 20PX;"> </div>
      <div
        style="display: flex; align-items:center; justify-content:center; width: 120px; height: 40px; border: 2.5px solid #EA5448;">
        <b>Nang cao</b>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    search: null,
    test: '',
    loaiNoBats: [],
    urlImage: 'http://wlp.howizbiz.com',
    url: '/chi-tiet/',
    loading: '',
    timeSearch: null
  }),

  mounted() {
    //Goi khi tai trang
    this.getLoai()
  },
  watch: {
    search: function(){
      this.getLoai()
    }
  },
  methods: {
    getLoai() {
      let now = (new Date()).getTime()
      if( (this.timeSearch==null) || (now-this.timeSearch>200)){
        this.loading = true
        fetch('http://wlp.howizbiz.com/api/species?paginate=true&page=1&perpage=18&search=' + this.search)
          .then(response => response.json())
          .then(data => {
            console.log(data.list)
            this.loaiNoBats = data.list
            this.loading = false;
            this.timeSearch = (new Date()).getTime()
          })
          }
    },
    xemChiTiet(id) {
     // this.$router.push(this.url+id)
     window.location.assign("http://localhost:8080/chi-tiet/"+id)
    },
    TimKiem() {
      this.$router.push('/tim-kiem')
    }
  },
}
</script>

<style>

.header3 {
  width: 100%;
  height: 104px;
  background: #DA2A1C;
  color: rgb(253, 253, 253);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  color: black;
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.dropdown {
  border: 1px solid grey;
  width: 600px;
  max-height: 120px;
  background: white;
  font-size: 16px;
  position: absolute;
  display: none;
  z-index: 1;
  overflow-y: scroll
}

.search:hover .dropdown {
  display: block;
}
.timkiem{
  height: 40px;
  font-size: 14px;
  display: flex;
  padding-left: 20px;
  align-items: center;
}
.timkiem:hover {
  background-color: rgb(177, 173, 173);
}
</style>
