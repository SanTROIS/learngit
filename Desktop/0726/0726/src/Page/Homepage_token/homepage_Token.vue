<template>
    <div class="homepage">
        <div v-if="loading" class="loading"></div>
        <div v-if="post" class="getHomepage">
            <heador v-bind:Items="menuItems" :token="token"></heador>
            <contents :firstinfo="firstinfo" :secondinfo="secondinfo"></contents>
            <footor></footor>
        </div>
    </div>
</template>

<script>
    import Header from './component/Header_Token.vue';
    import Content from './component/Content_Token.vue';
    import Footer from './component/Footor_Token.vue';
    export default {
        name: 'app',
        data() {
            return {
                menuItems: ['用户管理', '使用技巧', '工具', '联系我们'],
                firstinfo: [],
                secondinfo: [],
                post : false,loading : false,token:''
            }
        },
        components: {
            heador: Header,
            contents: Content,
            footor: Footer
        },
        created(){
            this.token = this.$route.params.token;
            this.fetched();
        },
        methods:{
            fetched () {
                this.loading = true;
                this.post = false;

                let _this  = this;
                this.$axios.get(_this.ServeAPI[0].newshots).then(function (res) {
                    _this.firstinfo = res.data.slice(0,10);
                    _this.secondinfo = res.data.slice(11,21);
                    _this.loading = false;
                    _this.post = true;
                },function (err) {
                    console.log(err.message);
                })
            }
        }
    }
</script>

<style>
    @import "../../css/homepage.css";

</style>