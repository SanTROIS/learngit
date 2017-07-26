<template>
    <div class="homepage">
        <div v-if="loading" class="loading"></div>
        <div v-if="post" class="getHomepage">
            <heador v-bind:Items="menuItems"></heador>
            <contents :firstinfo="firstinfo" :secondinfo="secondinfo"  :tuiArticle="tuiArticle"></contents>
            <footor></footor>
        </div>
    </div>
</template>

<script>
    import Header from './component/Header.vue';
    import Content from './component/Content.vue';
    import Footer from './component/Footor.vue';
    export default {
        name: 'app',
        data() {
            return {
                menuItems: ['用户管理', '使用技巧', '工具', '联系我们'],
                firstinfo: [],
                secondinfo: [],
                tuiArticle:[],
                post : false,loading : false
            }
        },
        components: {
            heador: Header,
            contents: Content,
            footor: Footer
        },
        created(){
           this.fetched();
           this.getTuiArticle();
        },
        methods:{
            fetched () {
                this.loading = true;
               this.post = false;

                let _this  = this;
                this.$axios.get(_this.ServeAPI[0].newshots).then(function (res) {
                    _this.firstinfo = res.data.slice(0,10);
                    _this.secondinfo = res.data.slice(11,21);
                    _this.$axios.post('http://192.168.155.1:8000/news/recommend').then(function (resp) {
                        _this.tuiArticle = resp.data.slice(20,35);
                        _this.loading = false;
                        _this.post = true;
                    },function (err) {
                        console.log(err);
                    })
                },function (err) {
                    console.log(err.message);
                })
            },
            getTuiArticle() {
                let _this = this;
            }
        }
    }
</script>

<style>
    @import "../../css/homepage.css";

</style>