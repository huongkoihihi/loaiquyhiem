<template>
    <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;">
        <h3>
            Loai Noi Bat
            <div style="width:104px ;height:0px ;border: 1px solid #000000; "></div>
        </h3>
        <h2 v-if="loading">\
        </h2>
        <div>
            <div style="display: flex; justify-content:space-around; align-items: center;">
                <div v-for="(item,index) in loaiNoBats" :key="index" style="display: flex; justify-content:space-around;" @click="xemChiTiet(item.id)">
                    <div class="loainoibat" >
                        <div>
                            <img :src="urlImage + item.attachments[0].path" style="width: 400px; height: 260px; display:flex; align-items: flex-start;"/>
                            <div style=" height: 130px; background:white  ; color: black; align-items: flex-end; padding: 10px; ">
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
            <div style="display: flex; justify-content: center; padding-top: 30px;">
                Loai noi bat
            </div>
            <div style="display: flex; justify-content: center;">
                <div style="width:94px ;height:0px ;border: 1px solid #000000;"></div>
            </div>
        </div>
       
    </div>

</template>

<script>

export default {
    data: () => ({
        loaiNoBats: [],
        urlImage: 'http://wlp.howizbiz.com',
        url:'/chi-tiet/',
        loading: false,
    }),
    mounted() {
        //Goi khi tai trang
        this.getLoai()
    },
    methods: {
        getLoai() {
            this.loading = true,
            fetch('http://wlp.howizbiz.com/api/loainoibat')
                .then(response => response.json())
                .then(data => {
                    this.loaiNoBats = data
                    this.loading = false
                }
                );
        },
        xemChiTiet(id){
            this.$router.push(this.url+id)
        }
    }
}
</script>

<style>
.loainoibat {
    display: flex;
    width: 400px;
    height: 410px;
    background: white;
    color: black;
    display: flex; 
    align-items: flex-end;
    border: 0.5px solid rgb(173, 172, 172);
}
.loainoibat:hover {
    border: 0.5px solid rgb(70, 70, 70);
}
</style>
