import readpage from '../Page/ReadPage/readpage.vue'
import readframe from '../Frame/readframe.vue'
import homepage from '../Page/Homepage/Homepage.vue'
import searchPage from '../Page/searchPage/searchPage.vue'
import loginpage from '../Page/sign/loginPage.vue'
import signuppage from '../Page/sign/signupPage.vue'
import homepage_token from '../Page/Homepage_token/homepage_Token.vue'

export default [
    {
      path:'/',component:homepage
    },
    {
        path:'/readpage/:a_id',
        component:readframe,
        children:[ {path:'/',component:readpage}]
    },
    {
        path:'/search/:keywords',component:searchPage
        ,
        children:[
            {path:'/search',component:searchPage}

        ]
    },
    {
        path:'/login',component:loginpage
    },
    {
        path:'/signup',component:signuppage
    },
    {
        path:'/homepage_Token',component:homepage_token,
        children:[
            {
                path:'/homepage_Token/:token',component:homepage_token
            }
        ]
    }
]