<template>
    <div class="loginpage">
        <div class="all">
            <div class="style-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-md-push-8">
                            <form action="#" class="fh5co-form animate-box" data-animate-effect="fadeInRight">
                                <h2>Sign In</h2>
                                <div class="form-group">
                                    <div class="alert alert-danger" v-if="emailStatus" role="alert">请检查邮箱格式</div>
                                    <div class="alert alert-danger" v-if="loginStatus" role="alert">请检查账户、密码是否正确</div>
                                </div>
                                <div class="form-group">
                                    <label for="username" class="sr-only">Email</label>
                                    <input type="text" v-model="email" class="form-control" id="username" placeholder="Email" autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="sr-only">Password</label>
                                    <input type="password" v-model="password" class="form-control" id="password" placeholder="Password" autocomplete="off">
                                </div>
                                <!--<div class="form-group">-->
                                    <!--<label for="remember"><input type="checkbox" id="remember"> Remember Me</label>-->
                                <!--</div>-->
                                <div class="form-group">
                                    <p>Not registered? <a href="">Sign Up</a> </p>
                                    <!--| <a href="">Forgot Password?</a>-->
                                </div>
                                <div class="form-group">
                                    <input type="button" value="Sign In" @click="accountverify" class="btn btn-primary">
                                    <!--<router-link tag="button" class="btn btn-primary" :to="dataurl" @click="accountverify">Login</router-link>-->
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
    export default {
        data() {
            return {
                emailStatus:false,
                loginStatus:false,
                email:'',password:'',dataurl:'/login'
            }
        },
        methods:{
            accountverify() {
                let _this = this;
                this.emailStatus=false;
                this.loginStatus =false;
                let regex = new RegExp('^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$');
                if(this.username!==''&&this.password!== ''){
                    if (!regex.test(this.email))
                    {
                        this.emailStatus = true;
                    }
                    else {
                        this.emailStatus = false;
                        let info = {'email':this.email,'password':this.password};
                        this.$axios.post(_this.ServeAPI[0].login,info).then(function (res) {
                            if(res.data.condition==='ok')
                            {
                                _this.$router.push({path:'/homepage_Token/'+res.data.token});
                            }else {
                                _this.loginStatus = true;
                            }
                        },function (err) {
                            console.log(err)
                        })
                    }

                }
            }
        }
    }
</script>
<style>

</style>