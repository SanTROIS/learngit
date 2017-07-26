<template>
    <div v-bind:class="classname">
        <div v-if="post" class="container">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <ul class="nav nav-pills">
                        <li class="active">
                            <a href="#">首页</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="input-group col-md-5 col-md-offset-4 col-xs-7 col-xs-offset-2">
                    <div class="center">
                       <input type="text" id="inputSearch" class="form-control" placeholder="请输入关键字" v-model="keywords_s"/>
                        <span class="input-group-btn">
                            <router-link tag="button" :to="'/search/'+keywords_s" class="btn btn-info btn-search">搜索</router-link>
                        </span>
                    </div>
                </div>
            </div>

            <div class="row clearfix" v-for="searchresult in Results">
                <div class="col-md-12 column">
                    <h3>
                        {{searchresult.title}}
                    </h3>
                    <div class="searchsketch" v-html="searchresult.content">
                    </div>
                    <p>
                        <!--<a class="btn" href="#">View details »</a>-->
                        <router-link class="btn" :to="'/readpage/'+searchresult.a_id" target="_blank">View details »</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: true,
                post: true,
                classname:'searchpage',
                Results:[],
                keywords_s:''

            }
        },
        created(){
            this.fethcer()
        },
        watch:{
          '$route':'fethcer'
        },
        methods:{
            fethcer() {
                const _this = this;
                var keywords = this.$route.params.keywords;
                if(keywords === undefined) {
                    console.log("have no words")
                }else {
                    this.$axios.get(_this.ServeAPI[0].newsforkeywords+keywords).then(function (res) {
                        _this.Results = res.data;
                        _this.classname = 'searchpage';
                        _this.post = true;
                    },function (err) {
                        console.log('ERROR = '+err.message);
                    })
                }
            }
        }
    }
</script>
<style>
    @import '../../css/searchpage.css';
</style>