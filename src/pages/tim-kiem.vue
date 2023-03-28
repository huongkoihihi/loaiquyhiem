<template>
    <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;">
        <div style=" height: 0px; border: 0.5px solid #EA5448;"></div>
        <div class="header3">
            <div class="search">
                <input style="border:none; width: 600px; height: 40px; font-size: 16px; padding-left: 10px; " type="text" v-model="search"  placeholder="Ten - Ten khoa hoc" />
            </div>
            <div style=" background: grey; color: white; width: 40px; height: 42px; display:flex; align-items:center; justify-content:center;" @click="TimKiem()">
                <img src="../images/header/kinhlup.svg">
            </div>
        </div>
        <div v-if="!loading"></div>
        <div>
            <div style="display: flex; align-items: center; justify-content: center;">
            <b><paginate
                :page-count="this.number"
                :click-handler="gotopage"
                :page-range="3"
                :margin-pages="2"
                :prev-text="prev"
                :next-text="next"
                first-last-button
                :first-button-text="'First'"
                :last-button-text="'Last'"
                :container-class="'paginate'"
                :page-class="'page-item'">
            </paginate></b>
            </div>
            <div style="margin-top: 10px;">
                <div style="display: flex; align-items: center; flex-wrap: wrap; flex-shrink: 4; ">
                    <div v-for="(item,index) in loaiNoBats" :key="index" style="display: flex; align-items: center; justify-content: space-between; padding-left: 50px; padding-bottom: 30px;" @click="xemChiTiet(item.id)">
                        <div class="loainoibat" >
                            <div>
                                
                                <!--img :src="urlImage + item.attachments[0].path" style="width: 400px; height: 260px"/-->
                                <div style=" width: 380px; height: 150px; background:white  ; color: black; align-items: flex-end; padding: 10px; ">
                                    <div style=" line-height: 1.5;" >
                                        <div style="font-size: 10px;">
                                            <b>{{item.phylumn.ten}}</b>
                                        </div>
                                        <div style="font-size: 18px;">
                                            <b>{{item.ten}}</b>
                                        </div>                    
                                        <div style="font-size: 18px;">                                       
                                            <i>
                                                {{item.ten_khoa_hoc}}
                                            </i>                           
                                        </div>
                                    </div>
                                    <div style="display: flex ; justify-content: space-between; margin-top: 10px; align-items: center;">
                                        <div>
                                            Chua xac dinh
                                        </div>
                                        <div style="display: flex; color: white; padding-right: 5px;">
                                            <div style=" width: 44px; height:44px ; background: #DA2A1C; border-radius: 25px; display: flex; justify-content: center; align-items: center; margin-right: 2px;">
                                                CR
                                            </div>
                                            <div style=" width: 44px; height:44px ; background: #E91E63;; border-radius: 25px; display: flex; justify-content: center; align-items: center; margin-right: 2px; ">
                                                CR
                                            </div>
                                            <div style=" width: 44px; height:44px ; background: #DA2A1C; border-radius: 25px; display: flex; justify-content: center; align-items: center; margin-right: 2px;">
                                                III
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import Paginate from 'vuejs-paginate-next';
export default {
    components: {
      paginate: Paginate,
    },
    data: () => ({
        Loai:[],
        loaiNoBats:[],
        urlImage: 'http://wlp.howizbiz.com',
        loading: true,
        search:'',
        number: null,
        page:1,
    }),
    mounted() {
        //Goi khi tai trang
        this.getLoai()
        this.in()
    },
    watch: {
        search: function(){
            this.getLoai()
            this.in()
        },
        page: function() {
            this.in()
        }
    },
    methods: {
        getLoai() {
            this.loading = false
            fetch('http://wlp.howizbiz.com/api/species?paginate=true&page=1&perpage=152&search=' + this.search)
            .then(response => response.json())
            .then(data => {
                this.Loai = data.list
                if(this.Loai.length%4==0) {
                    this.number=this.Loai.length/4
                }
                else {
                    this.number=Math.floor(this.Loai.length/4 + 1)
                }
                this.page=1
                this.loading = true;
            })
            },
        in(){ 
            fetch('http://wlp.howizbiz.com/api/species?paginate=true&page='+this.page+'&perpage=4&search=' + this.search)
            .then(response => response.json())
            .then(data => {
                console.log(data.list)
                this.loaiNoBats = data.list
            })
        },
        xemChiTiet(id) {
        // this.$router.push(this.url+id) huongkoihihi
        window.location.assign("http://localhost:8080/chi-tiet/"+id)
        },
        gotopage(pageNum) {
            this.page= pageNum
        },
    }
}

</script>

<style>
.loainoibat {
    display: flex;
    width: 400px;
    height: 434px;
    background: white;
    color: black;
    display: flex; 
    align-items: flex-end;
    border: 0.5px solid rgb(173, 172, 172);
}
.loainoibat:hover {
    border: 0.5px solid rgb(70, 70, 70);
}
.header3 {
  width: 100%;
  background: #DA2A1C;
  color: rgb(253, 253, 253);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.paginate{
    display: flex;
    align-items: center;
    justify-content: center;
}
.page-item{
    display:flex ;
    align-items: center;
    justify-content: center;
    color: rgb(1, 1, 109);
    border: 0.05px solid rgb(163, 163, 163);
    background: rgb(241, 238, 238);
    font-size: 12px;
    height: 30px;
    width: 30px;
    padding: 2px;
    margin: 2px;
}
.page-item:hover {
    background: rgb(255, 255, 255);
}
</style>
