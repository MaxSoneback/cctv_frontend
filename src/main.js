import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { io } from 'socket.io-client'
//import openSocket from "socket.io-client";
//const socketIO = openSocket(5000);
//import VueSocketIO from 'vue-3-socket.io'

const ioOptions = {path: '/backend/socket.io',
                    secure: false}
const app = createApp(App)
app.config.globalProperties.$socketio =  io("http://localhost:5000", ioOptions);
app.mount('#app')
