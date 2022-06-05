<template>
    <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;">
        <div style="margin:20px; font-size: 18px; color: rgb(134, 10, 0);"> Thong tin chi tiet loai nguy cap quy hiem</div>
        <div v-if="!loading" style="display:flex ; padding:10px; ">
            <div>
                <img :src="urlImage+lankimtuyen.attachments[0].path">
            </div>    
            <div>
                <div>
                    {{lankimtuyen.ten}}
                </div>
                <div>
                    {{lankimtuyen.ten_khoa_hoc}}
                </div>
                <div>
                    {{lankimtuyen.muc_do_de_doa_loai.su_suy_giam_quan_the}}
                    {{lankimtuyen.muc_do_de_doa_loai.tinh_hinh_khai_thac_san_ban}}
                    {{lankimtuyen.muc_do_de_doa_loai.tinh_trang_noi_cu_tru}}
                </div>
            </div>    
        </div>

    </div>
</template>
<script>
export default {
    data: () => ({
        lankimtuyen:[],
        urlImage: 'http://wlp.howizbiz.com',
        loading: true
    }),
    mounted() {
        //Goi khi tai trang
        this.getLoai()
    },
    methods: {
        getLoai() {
            this.loading = true,
            fetch('http://wlp.howizbiz.com/api/species/4')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.lankimtuyen = data
                    this.loading = false
                }
                );

        }
    }
}
</script>
<style>

</style>