import Vue from 'vue'
import router from './../router'
import stores from './../store/index'

router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem('isLogin');
    // if (to.matched.some(m => m.meta.requiresAuth)) { 
        if (!isLogin) {
            if (to.fullPath == '/Login'){
                next()
            }else{
                next('/Login');
            }
        }
        else{
            if (to.fullPath == '/Login'){
                next(false);
            }else{
                if (!stores.getters.userInfo) {
                    stores.dispatch('getUserInfo').then((res) => {
                        next();
                    }).catch((err)=>{
                        Vue.prototype.$alert('会话已经过期，请重新登录', '提示', {
                            confirmButtonText: '确定',
                            type: 'error',
                            showClose:false,
                        }).then(() => {
                            sessionStorage.clear();
                            return next('/Login');
                        })
                    })
                }else{
                    next();
                }
            }
        }
})