import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#96ceb4",
    success: "#ffeead",
    info: "#ffcc5c",
    error: "#ff6f69"
  }
})
