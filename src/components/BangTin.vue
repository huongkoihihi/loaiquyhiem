<template>
    <div style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div>
            <div style="font-size: 20px; padding: 20px;">BANG TIN</div>
        </div>
        <div class="bangtin" style="display: flex;">
            <div v-for="(item,index) in Bangtin" :key="index"  >
                <div class="bbt">
                    <div style="padding: 5px;">
                        <img style="width: 219px; height: 127px;" src="../images/bangtin/bay-khinh-khi-cau-ha-tinh-1-1651899755-770x367.jpg">
                    </div>
                    <div style="padding:5px ;">
                        <p>{{item.date}}</p>
                        <div><b>{{item.title.rendered}}</b></div>
                        <p>
                            {{}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div style="font-size: 16px; padding: 20px; display: flex; justify-content: center;">BANG TIN</div>
        </div>
    </div>
    
</template>
<script>
    export default {
        data: () => ({
        Bangtin: [],
        urlImage: 'http://wlp.howizbiz.com'
    }),
    mounted() {
        //Goi khi tai trang
        this.getTin()
    },
    methods: {
        getTin() {
            fetch('http://dstt.howizbiz.com/wp-json/wp/v2/posts?_embed&per_page=3')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.Bangtin = data
                }
                );

        }
    }
    }
</script>
<style>
    .bantin{
        width: 100%;
        height: 320px;
        background-color: white;
        color: black; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bbt{
        width: 507px;
        height: 309px;
        background-color: white;
        border: 2.5px solid beige;
        margin-left: 15px; 
        margin-bottom: 5px; 
        display: flex; 
        padding-left: 10px;
        padding-right: 10px;
        flex-grow: 1;
    }
</style>