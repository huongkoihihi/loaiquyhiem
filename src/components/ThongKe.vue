<template>
    <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div class="background" style="margin-top: 30px; " >
            <div style=" width: 820px; height: 180px; font-size: 64px; color: white; padding-bottom: 40px; padding-top: 101px; padding-left:  37px; ">
                Hơn 200000 loài <br> Dang bị đe doạ tuyệt chủng
            </div>
            <div style=" align-items: center; color: white; padding-left: 37px; padding-right:37px ;display: flex; flex-wrap: wrap; flex-shrink: 7;">
                <div v-for="(item,index) in phanloai" :key="index" class="box">
                    <div>
                        <div style="font-size: 16px;">
                            {{item.ten}} 
                        </div>
                        <div style="font-size: 40px">
                            {{item.ty_le}}%
                        </div>
                    </div>
                    <div style="padding-right:10px ;">
                        <img :src="item.anh">
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import hanh from '../images/Thongke/anh/hanh.svg'
import thong from '../images/Thongke/anh/thong.svg'
import bosat from '../images/Thongke/anh/bosat.svg'
import chim from '../images/Thongke/anh/chim.svg'
import ngoclan from '../images/Thongke/anh/ngoclan.svg'
import moclan from '../images/Thongke/anh/moclan.svg'
import thu from '../images/Thongke/anh/thu.svg'
import duongxi from '../images/Thongke/anh/duongxi.svg'

export default {
    data: () => ({
        phanloai: [],
        HinhAnh:[{anh:thong},{anh:hanh},{anh:ngoclan},{anh:chim},{anh:thu},{anh:bosat},{anh:duongxi},{anh:moclan}],
    }),
    mounted() {
        //Goi khi tai trang
        this.getPhanloai()       
    },
    methods: {
        getPhanloai() {
            fetch('http://wlp.howizbiz.com/api/tyleloai')
                .then(response => response.json())
                .then(data => {
                    console.log(data.data)
                    this.phanloai = data.data
                    this.phanloai[0]={...this.phanloai[0],...this.HinhAnh[0]}
                    this.phanloai[1]={...this.phanloai[1],...this.HinhAnh[1]}
                    this.phanloai[2]={...this.phanloai[2],...this.HinhAnh[2]}
                    this.phanloai[3]={...this.phanloai[3],...this.HinhAnh[3]}
                    this.phanloai[4]={...this.phanloai[4],...this.HinhAnh[4]}
                    this.phanloai[5]={...this.phanloai[5],...this.HinhAnh[5]}
                    this.phanloai[6]={...this.phanloai[6],...this.HinhAnh[6]}
                    this.phanloai[7]={...this.phanloai[7],...this.HinhAnh[7]}
                }
                );
        },
    }
}
</script>
<style>
    .background{
        width: 100%; 
        height: 633.77px;
        background-image: url(../images/Thongke/background.svg);
    }
    .box{
        background-color:#AD180D; 
        width: 18%;
        height: 115.89px; 
        margin-right: 5px; 
        margin-bottom: 5px; 
        display: flex; 
        justify-content: space-around; 
        align-items: center; 
        padding-left: 5px;
        flex-grow: 1;
        flex-shrink: 5;
    }
</style>
