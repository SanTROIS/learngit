<template>
<div class="readpageroot">
    <div v-if="loading" class="loading">
    </div>
    <div v-if="post" class="readpage">
        <div class="title"></div>
        <div class="content">
            <div class="contentBody" v-for="oneArticle in articles">
                <div class="contentTitle">
                    <h2>{{oneArticle.title}}</h2>
                </div>
                <div class="contentArticl">
                    <p v-html="oneArticle.content"></p>
                    <p style="font-family: 'Adobe 黑体 Std R';font-weight: bolder;font-size: 15px;text-align: right">{{oneArticle.author}} &nbsp;&nbsp;{{oneArticle.comefrom}}</p>
                   <p  style="text-align: right"> <a target="_blank" v-bind:href="oneArticle.link">{{oneArticle.link}}</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return {
                articles:[],loading:false,post:null
            }
        },
        props:['items'],
        created(){
            this.fetched();
        },
        methods:{
            fetched(){
                this.post = false;
                this.loading = true;

                let _this = this;
                this.$axios.get(_this.ServeAPI[0].newsforone+_this.$route.params.a_id).then(function (res) {
                _this.articles = res.data;
                _this.loading = false;
                _this.post = true;
                }).catch(function (res) {
                    console.log ("ERROR+  "+ res);
                });
            }
        }
    }


</script>
<style>
    @import '../../css/readpage.css';
</style>