<template>
    <div class="contents">
        <div class="title">
            <div class="search">
                <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                <input class="form-control" v-model="keywords" placeholder="请输入关键字" type="text"/>
                        </td>
                        <td>
                            <router-link tag="input" class="btn btn-info btn-search" type="button"  value="搜索" :to="'/search/'+keywords"></router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <ul class="searchHotpoint" >
                               <li>
                                    <a href="#" title="">热点一</a>
                               </li>
                               <li>
                                   <a href="#">热点二</a>
                               </li>
                               <li>
                                   <a href="#">热点三</a>
                               </li>
                           </ul>
                        </td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="content">
            <div class="contentLeft">
                <dl>
                    <dt>热点新态度</dt>
                    <hr />
                        <dd>
                           <ul>
                               <li v-for="info in firstinfo">
                                   <router-link :to="'/readpage/'+info.a_id" class="underlined" target="_blank">{{info.title}}</router-link>
                               </li>
                           </ul>
                        </dd>
                </dl>
                <dl>
                    <dt>热点新高度</dt>
                    <hr/>
                    <dd>
                        <ul>
                            <li v-for="info in secondinfo">
                                <router-link :to="'/readpage/'+info.a_id" class="underlined" target="_blank">{{info.title}}</router-link>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
            <div class="contentright">
                <div class="container-fluid">
                    <div class="row clearfix" v-for="itemT in tuiArticle">
                        <div class="col-md-12 col-sm-12">
                            <h4>{{itemT.title}}</h4>
                            <div class="tuiSketch" >
                                <a class="btn-link" target="_blank" @click="daileinfo(itemT.a_id)" v-html="itemT.content"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                info:'',keywords:'',itemT:''
            };
        },
        props:["firstinfo","secondinfo","tuiArticle"],
        methods:{
            daileinfo(a_id) {
                this.$router.push({path:'/readpage/'+a_id});
            }
        }
    }
</script>
<style scoped>
        @import "../../../css/ContentCss.css";
</style>