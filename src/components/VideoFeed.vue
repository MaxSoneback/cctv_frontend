<template>
  <div>
     <img 
     :src="frame" />
    </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const app = getCurrentInstance()
    
    const socket = app.appContext.config.globalProperties.$socketio
    var frame = ref('');

    socket.on("connected", payload => {
      socket.emit('start_feed')
    })

    socket.on("live_feed", payload => {
      frame.value = `data:image/jpeg;base64,${payload.base64_frame}`
    })
    return {
      frame
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
