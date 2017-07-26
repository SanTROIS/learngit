<template>
    <div class="heador" id="menu-1">
        <div class="menu" v-on:click="changeCss()">菜单</div>
        <div class="menu-content" id="menuConten_1">
            <div class="menu-item" v-for="info in Items">
                <div v-if="info ==='用户管理'">
                    <div class="dropdown">
                        <p class="dropdown-toggle" data-toggle="dropdown">{{info}}</p>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                           <li role="presentation">
                               <div class="userWidth">
                                   <p>用户名:名字太长</p>
                                   <button class="btn  btn-info" @click="logout">登出</button>
                               </div>
                           </li>
                        </ul>
                    </div>
                </div>
                <div v-else="info!=='用户管理'"  class="h" @click="alertInfo(info)">
                   {{info}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'heador',
        props:['Items','token'],
        methods:{
            changeCss:function () {
                let menuContent_1 = document.getElementById("menuConten_1");
                if(menuContent_1.className=="menu-content")
                {
                    menuContent_1.className="menu-content-clicked";
                }
                else {
                    menuContent_1.className="menu-content";
                }
            },
            logout() {
                this.$router.replace({path:'/'});
            },
            alertInfo(info) {
                if(info==='联系我们'){
                    window.alert("Welcome to Station  \n 管理员联系电话:123654987 \n QQ:12364987 \n 电子邮箱：10555@hotmail.com");
                    console.log("GOOD");
                }
            }
        }
    };
</script>

<style scoped>
    @import "../../../css/headorCss.css";
</style>