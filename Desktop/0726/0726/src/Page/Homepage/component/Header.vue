<template>
    <div class="heador" id="menu-1">
        <div class="menu" v-on:click="changeCss()">菜单</div>
        <div class="menu-content" id="menuConten_1">
            <div class="menu-item" v-for="info in Items">
                <div v-if="info ==='用户管理'">
                    <div class="dropdown">
                        <p class="dropdown-toggle" data-toggle="dropdown">{{info}}</p>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">

                            <router-link :to="'/login'" tag="li" role="presentation">用户登录</router-link>
                            <router-link :to="'/signup'" tag="li" role="presentation">用户注册</router-link>
                        </ul>
                    </div>
                </div>
                <div v-else="info!='用户管理'">
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
            }
        }
    };
</script>

<style scoped>
    @import "../../../css/headorCss.css";
</style>