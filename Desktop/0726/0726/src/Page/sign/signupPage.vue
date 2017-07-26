<template>
    <div class="signuppage">
        <div class="all">
            <div class="style-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-md-push-8">
                            <form action="#" class="fh5co-form animate-box" data-animate-effect="fadeInRight">
                                <h2>Sign Up</h2>
                                <div class="form-group">
                                    <div class="alert alert-success" v-if="successful" role="alert">
                                       成功注册，请
                                        <router-link tag="button" :to="'/login'" class="btn-link btn-success btn-lg">登录</router-link>
                                    </div>
                                    <div class="alert alert-danger" v-if="passwordStatus" role="alert">密码不一致</div>
                                    <div class="alert alert-danger" v-if="emailStatus" role="alert">请检查邮箱格式</div>
                                    <div class="alert alert-danger" v-if="signupStatus" role="alert">邮箱已经被注册</div>
                                    <div class="alert alert-danger" v-if="isnull" role="alert">账户、邮箱、密码不能为空</div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="sr-only">Name</label>
                                    <input type="text" v-model="username" class="form-control" id="name" placeholder="Name" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label for="email" class="sr-only">Email</label>
                                    <input type="email" v-model="email" class="form-control" id="email" placeholder="Email" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="sr-only">Password</label>
                                    <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label for="re-password" class="sr-only">Re-type Password</label>
                                    <input type="password" v-model="re_password" class="form-control" id="re-password" placeholder="Re-type Password" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <p>Already registered?<router-link :to="'/login'">Login</router-link></p>
                                </div>
                                <div class="form-group">
                                    <input type="button" value="Sign Up" class="btn btn-primary" @click="signup" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Qs from 'qs'
    export default {
       data() {
           return {
               successful:false,
               passwordStatus:false,
               isnull: false,
               emailStatus:false,
               signupStatus:false,
               username:'',password:'',email:'',re_password:''
           }
       },
        methods:{
            signup() {

                let regex = new RegExp('^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$');
                let _this = this;
               if(this.username===''||this.password===''||this.email==='')
               {
                    this.isnull = true;
               }
               else if(this.password!== this.re_password)
               {
                   this.passwordStatus = true;
                   this.isnull = false;
               }else if(!regex.test(this.email)) {
                    this.passwordStatus = false;
                    this.emailStatus = true;
               }else {
                   this.emailStatus = false;
                   let info = {"username":this.username,"password":this.password,"email":this.email};
                   //info = Qs.stringify(info);
                   this.$axios.post(_this.ServeAPI[0].logon,info).then(function (res) {
                       if(res.status===200){
                           if(res.data.condition ==='EmailFailed'){
                               _this.signupStatus = true;
                           }else if(res.data.condition === 'ok'){
                               _this.signupStatus = false;
                               _this.successful = true;
                           }
                       }

                   },function (err) {
                       console.log(err.message);
                   });
               }
           }
        }
    }
</script>
<style>

</style>