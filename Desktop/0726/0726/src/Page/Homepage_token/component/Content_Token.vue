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
                    <div class="row clearfix">
                        <div class="col-md-12">
                            <h3>Hello This is a piec of info</h3>
                            <p class="btn-link">Time can never stop the pece of dreams,he a stubborn persistence,learn to make dreams grows a little bit every day</p>
                        </div>
                    </div>

                    <div class="row clearfix">
                        <div class="col-md-12">
                            <h3>Hello This is a piec of info</h3>
                            <p>There is something information for you,because i have some words to you,In a word. I believe that if you hard to working ,you will sucessful,I hope you remember a words,No paid,No gain</p>
                        </div>
                    </div>


                    <div class="row clearfix">
                        <div class="col-md-12">
                            <h3>Hello This is a piec of info</h3>
                            <p>My fellow Americans, ask not what your country can do for you, ask what you can do for your country. My fellow citizens of the world: ask not what American will do for you, but what together we can do for the freedom of man.  </p>
                        </div>
                    </div>

                    <div class="row clearfix">
                        <div class="col-md-12">
                            <h3>Hello This is a piec of info</h3>
                            <p>Time can never stop the pece of dreams,he a stubborn persistence,learn to make dreams grows a little bit every day</p>
                        </div>
                    </div>


                    <div class="row clearfix">
                        <div class="col-md-12">
                            <h3>Hello This is a piec of info</h3>
                            <p>There is no royal road to science,and only those who do not dread the fatiguing climb  of its steep paths have a chance of gaining its luminous summits.Karl Marx, German revolutionary </p>
                        </div>
                    </div>


                    <div class="row clearfix">
                        <div class="col-md-12">
                            <h3>Hello This is a piec of info</h3>
                            <p>To be able to be caught up into the world of thought that is being educated.</p>
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
                info:'',keywords:''
            };
        },
        props:["firstinfo","secondinfo"]
    }
</script>
<style scoped>
        @import "../../../css/ContentCss.css";
</style>