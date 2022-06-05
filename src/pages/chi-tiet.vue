<template>
    <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;">
        <HeaderSearch></HeaderSearch>
        <div style="margin:20px; font-size: 18px; color: rgb(134, 10, 0);"> Thong tin chi tiet loai nguy cap quy hiem</div>
        <div v-if="!loading">
            <div style="display:flex ; padding-left:30px; padding-bottom: 20px; ">
                <div>
                    <img :src="urlImage+loaiNoBats.attachments[0].path" style="width:435px; height:435px">
                </div>    
                <div style="padding-left: 30px ;">
                    <div style="font-size:64px;">
                        {{loaiNoBats.ten}}
                    </div>
                    <div style="width:400px;height:4px;background: red;">
                    </div>
                    <div style="margin-top:32px; font-size:24px;">
                        <i>{{loaiNoBats.ten_khoa_hoc}}</i>
                    </div>
                    <div style="height: 0px; border:1px solid rgb(206, 205, 205)"></div>
                    <div style="margin: 20px; font-size:18px;line-height: 1.5;">
                        <div>MỨC ĐỘ ĐE DỌA:</div>
                        <ul>
                            <li>{{loaiNoBats.muc_do_de_doa_loai.su_suy_giam_quan_the}}</li>
                            <li>{{loaiNoBats.muc_do_de_doa_loai.tinh_hinh_khai_thac_san_ban}}</li>
                            <li>{{loaiNoBats.muc_do_de_doa_loai.tinh_trang_noi_cu_tru}}</li>
                        </ul>
                    </div>
                </div>    
            </div>
            <div style="height: 0px; border:1px solid rgb(206, 205, 205); margin-left: 20px; margin-right: 20px;"></div>
            <div style="margin:30px">
                <div>
                    <div style="margin-bottom:20px ;">MUC DO PHAN HANG</div>
                    <div style="display:flex ; justify-content:space-around;">
                        <div style="width: 1300px;">
                            <div v-for="(item,index) in loaiNoBats.muc_do_de_doa_loai.muc_do_phan_hang" :key="index">
                                <div class="mucdophanhang" @click="mucdophanhang(item.id)">
                                    <div>{{item.parent.ten}}</div>
                                    <div style="display:flex ;">
                                        <div class="madanhmuc">
                                            {{item.ma_danh_muc}}
                                        </div>
                                    </div>
                                </div>
                                <div v-if="mucdo[item.id]" style="display: flex; align-items:center; padding:10px; line-height: 1.5;">
                                    <div style="padding-left:100px; padding-right: 50px">
                                        <b>
                                            <div style=" font-size: 28px;">
                                                {{item.ma_danh_muc}} - {{item.ten}}  
                                            </div>
                                        </b>
                                        <div>
                                            {{item.mo_ta}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 450px; height:350px; line-height: 2;">
                            <div>CAP NHAT</div>
                            <div style="font-size:18px; color:red ;" >
                                {{day}}
                            </div>
                            <div style="width: 450px; height: 0px; border: 1px solid grey ;"></div>
                        </div>
                    </div>
                </div>
            </div>    
            <div style="width: 100%; height: 540px; background-color: rgba(8,1,0,.75); display: flex ; justify-content: space-between; align-items: center;">
                <div style="width: 450px; height: 540px; color: white;">
                    <div style="height: 180px; width: 450px; background: rgb(218, 42, 28);">
                        <div style="padding: 30px;">
                            <div>XU HUONG LOAI</div>
                            <div style="height: 0px; border: 0.01px solid rgba(255, 255, 255, 0.281) ;"></div>
                            <div style="display: flex; align-items: center; justify-content: center; font-size: 28px">
                                <div></div>
                                <div>
                                    Chua xac dinh
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="height: 180px; width: 450px; background: rgb(64, 79, 90);">
                        <div style="padding: 30px;">
                            <div>DAC DIEM SINH THAI</div>
                            <div style="height: 0px; border: 0.01px solid rgba(255, 255, 255, 0.281) ;"></div>
                                <div style="display: flex; align-items: center; justify-content: center; font-size: 28px">
                                <div></div>
                                <div>
                                    Chua xac dinh
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="height: 180px; width: 450px; background: rgb(89, 102, 111); ">
                        <div style="padding: 30px;">
                            <div>PHAN BO LOAI</div>
                            <div style="height: 0px; border: 0.01px solid rgba(255, 255, 255, 0.281) ;"></div>
                            <div style="display: flex; align-items: center; justify-content: center; font-size: 28px">
                                <div></div>
                                <div>
                                    Chua xac dinh
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="width: 1000px; height:522px; display:flex; align-items: center; justify-content: center;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142459.7033217727!2d103.90944647824837!3d22.41859360023627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cd15b54212a913%3A0xfe709c58b76a9605!2zVHAuIEzDoG8gQ2FpLCBMw6BvIENhaSwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1653645282176!5m2!1svi!2s" width="1000" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div style="width:290px ; height:520px; color:white; padding: 20px; "> 
                    <div style="text-align:center">DIA DIEM</div>
                    <div style="margin: 20px;">
                        <div v-for="(item,index) in loaiNoBats.phan_bo_loai.phan_bo_loai_provinces" :key="index" style="line-height: 2;">
                            <div></div>
                            <div style="font-size:24px; margin: 5px; ">{{item.name}}</div>
                        </div>
                    </div>
                    <div style=" width: 290px ;height:0px; border:0.5px solid rgba(255, 255, 255, 0.281); "></div>
                    <div style="padding: 10px; line-height: 1.5;">
                        <div style="padding-bottom:15px ;">
                            <div style="font-size: 15px ;">VUON QUOC GIA - KHU BAO TON</div>
                            <div style="font-size: 14px;">{{loaiNoBats.phan_bo_loai.vqg_kbt}}</div>
                        </div>
                        <div style="padding-bottom:15px ;">
                            <div style="font-size: 15px ;">KHU VUC KHAC</div>
                            <div style="font-size: 14px ;">{{loaiNoBats.phan_bo_loai.khu_vuc_khac}}</div>
                        </div>
                        <div style="padding-bottom:15px ;">
                            <div style="font-size: 15px ;">THONG TIN KHAC</div>
                            <div style="font-size: 14px ;">-{{loaiNoBats.phan_bo_loai.thong_tin_khac}}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="sticky">
                <a href="#Phanloaihoc" style="text-decoration: none;"><div class="menu">Phan loai hoc</div></a>
                <a href="#Moitruongsong" style="text-decoration: none;"><div class="menu">Moi truong song va he sinh thai</div></a>
                <a href="#Moidedoa" style="text-decoration: none;"><div class="menu">Moi de doa</div></a>
                <a href="#Quanlybaove" style="text-decoration: none;"><div class="menu">Quan ly bao ve</div></a>
                <a href="#Bosuutap" style="text-decoration: none;"><div class="menu">Bo suu tap</div></a>
            </div>    
            <div style=" background-color: rgb(234, 234, 234); display: flex; align-items: center; justify-content: space-between;">
                <div style="width:100% ;padding: 30px; ">
                    <div id="Phanloaihoc" >
                        <div>
                            <div style="font-size: 24px; padding: 5px;"><b>Phan loai hoc</b></div>
                            <div style="height: 0px; border: 0.1px solid #ad180d;"></div>
                        </div>
                        <div style="padding: 10px;">
                            <div style="display: flex; align-items:center; padding: 10px; flex-wrap: wrap;">
                                <div class="phanloaihoc">
                                    <div>
                                        <div>GIOI</div>
                                        <div style="font-size: 36px; color: #ad180d"><b>{{loaiNoBats.kingdom.ten}}</b></div>
                                        <hr style="height: 0px; border: 0.1px solid #ad180d;">
                                    </div>                                 
                                </div>
                                <div class="phanloaihoc">
                                    <div>
                                        <div>NGANH</div>
                                        <div style="font-size: 36px; color: #ad180d"><b>{{loaiNoBats.phylumn.ten}}</b></div>
                                        <hr style="height: 0px; border: 0.1px solid #ad180d;">
                                    </div>
                                </div>
                                <div class="phanloaihoc">
                                    <div>
                                        <div>LOP</div>
                                        <div style="font-size: 36px; color: #ad180d;"><b>{{loaiNoBats.class.ten}}</b></div>
                                        <hr style="height: 0px; border: 0.1px solid #ad180d;">
                                    </div>
                                </div>
                            </div>
                            <div style="height: 0px; border:0.1px solid rgba(0,0,0,.12);"></div>           
                            <div style="display: flex; align-items:center; padding: 10px; flex-wrap: wrap; ">
                                <div class="phanloaihoc">
                                    <div>
                                        <div>BO</div>
                                        <div style="font-size: 36px; color: #ad180d"><b>{{loaiNoBats.order.ten}}</b></div>
                                        <hr style="height: 0px; border: 0.1px solid #ad180d;">
                                    </div>
                                </div>
                                <div class="phanloaihoc">
                                    <div>
                                        <div>HO</div>
                                        <div style="font-size: 36px; color: #ad180d"><b>{{loaiNoBats.family.ten}}</b></div>
                                        <hr style="height: 0px; border: 0.1px solid #ad180d;">
                                    </div>
                                </div>
                                <div class="phanloaihoc">
                                    <div>
                                        <div>CHI</div>
                                        <div style="font-size: 36px; color: #ad180d"><b>{{loaiNoBats.genus.ten_khoa_hoc}}</b></div>
                                        <hr style="height: 0px; border: 0.1px solid #ad180d;">
                                    </div>                                
                                </div>    
                            </div>                        
                        </div>
                    </div>
                    <div id="Moitruongsong" >
                        <div>
                            <div style="font-size: 24px; padding: 5px;"><b>Moi truong song va he sinh thai</b></div>
                            <div style="height: 0px; border: 0.1px solid #ad180d;"></div>
                        </div>
                        <div>
                            <div style="display: flex; align-items:center; padding: 10px; flex-wrap: wrap; ">
                                <div class="phanloaihoc">
                                    hi
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Moidedoa" >
                        <div>
                            <div style="font-size: 24px; padding: 5px;"><b>Moi de doa</b></div>
                            <div style="height: 0px; border: 0.1px solid #ad180d;"></div>
                        </div>
                        <div>
                            <div style="display: flex; align-items:center; padding: 10px; flex-wrap: wrap; ">
                                <div class="phanloaihoc">
                                    hi
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Quanlybaove" >
                        <div>
                            <div style="font-size: 24px; padding: 5px;"><b>Quan ly bao ve</b></div>
                            <div style="height: 0px; border: 0.1px solid #ad180d;"></div>
                        </div>
                        <div>
                            <div style="display: flex; align-items:center; padding: 10px; flex-wrap: wrap; ">
                                <div class="phanloaihoc">
                                    hi
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Bosuutap" >
                        <div>
                            <div style="font-size: 24px; padding: 5px;"><b>Bo suu tap</b></div>
                            <div style="height: 0px; border: 0.1px solid #ad180d;"></div>
                        </div>
                        <div>
                            <div style="display: flex; align-items:center; padding: 10px; flex-wrap: wrap;  ">
                                <div >
                                    <img :src="urlImage+loaiNoBats.attachments[0].path" style="width: 400px;height: 400px;">
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
import HeaderSearch from '@/components/headerSearch.vue';


export default {
    data: () => ({
        loaiNoBats: [],
        urlImage: "http://wlp.howizbiz.com",
        loading: true,
        loaiNoBatsID: "",
        bando: [],
        day: "",
        mucdo: [false, false, false],
    }),
    mounted() {
        //Goi khi tai trang
        this.getLoai();
    },
    methods: {
        getLoai() {
            this.loading = true,
                fetch("http://wlp.howizbiz.com/api/species/" + this.$route.params.id)
                    .then(response => response.json())
                    .then(data => {
                    console.log(data);
                    this.loaiNoBats = data;
                    //this.loaiNoBatsID=this.$route.params.id
                    //console.log(this.loaiNoBats.id)
                    //this.loaiNoBats=this.loaiNoBats.find(loaiNoBats => loaiNoBats.id===this.loaiNoBatsID)
                    this.day = new Date(this.loaiNoBats.attachments[0].created_at);
                });
            fetch("http://wlp.howizbiz.com/api/base-maps")
                .then(response => response.json())
                .then(data => {
                console.log(data);
                this.bando = data;
                this.loading = false;
            });
        },
        mucdophanhang(id) {
            this.mucdo = [false, false, false];
            this.mucdo[id] = !this.mucdo[id];
        },
    },
    components: { HeaderSearch }
}

</script>
<style>
.mucdophanhang{
    display:flex ; 
    align-items:center; 
    justify-content:space-between;
    height: 40px;
    padding: 5px;
    border: 1px solid rgb(192, 191, 190);
    margin:2px ;
    background-color:rgb(226, 223, 223);
    cursor: pointer;
    transition: 0.4s;
}
.mucdophanhang:hover {
  background-color: rgb(131, 131, 131);
}
.madanhmuc{
    width: 33px; 
    height:33px ; 
    background: white; 
    border-radius: 25px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-right: 2px; 
    color: red; 
    font-size: 14px; 
    border: 1px solid red;
}
.phanloaihoc {
    width: 300px ;
    height: 90px;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
}
.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    margin-top: 20px;
    padding: 5px;
    padding-left: 20px;
    background-color: #4c4b4a;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.menu {
    background-color: #565554; 
    color: white; 
    font-size: 20px; 
    padding: 15px; 
    margin-left: 5px;
    transition: 0.4s;
    text-decoration: none;
}
.menu:hover {
    background-color: #313131;
}
#Phanloaihoc {
    width:100% ; 
    background-color:white; 
    padding:10px; 
    margin-bottom: 30px;
}
#Moitruongsong {
    width:100% ; 
    background-color:white; 
    padding:10px; 
    margin-bottom: 30px;
}
#Moidedoa {
    width:100% ; 
    background-color:white; 
    padding:10px; 
    margin-bottom: 30px;
}
#Quanlybaove {
    width:100% ; 
    background-color:white; 
    padding:10px; 
    margin-bottom: 30px;
}
#Bosuutap {
    width:100% ; 
    background-color:white; 
    padding:10px; 
    margin-bottom: 30px;
}
</style>