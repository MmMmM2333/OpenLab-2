import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Toast from "vue-toastification";
import axios from 'axios'
import Vuex from 'vuex'
import { jwtDecode } from "jwt-decode";

import 'tailwindcss/tailwind.css'
import "vue-toastification/dist/index.css";
import './css/index.css'
import './css/base.css'
import './css/scrollbar.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.request.use(config => {
  //为请求头对象，添加 Token 验证的 token 字段;
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return config;
})


const options = {
  position: "top-center",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
};

Vue.use(Toast, options);

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: '',
    username: '',
    userID: '',
    roleID: 0,
    isLogin: false,
  },

  mutations: {
    saveToken(state, token) {
      state.token = token
      let decoded = jwtDecode(token);
      state.username = decoded.username
      state.userID = decoded.userID
      state.roleID = decoded.roleID
      state.isLogin = true
      localStorage.setItem("token", token);
    },
    removeToken(state) {
      state.token = ''
      state.username = ''
      state.userID = ''
      state.roleID = 0
      state.isLogin = false
      localStorage.removeItem("token");
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
