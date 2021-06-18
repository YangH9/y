<template>
  <div class="all">
    <div
      class="old-tv"
      :class="{off:!power,load:loaded,'off-animation':offAnimation}"
    >
      <div
        class="paycode-btn"
        @click="showPaycode"
      >
        <img src="@/assets/image/milktea.svg">
      </div>
      <div class="antenna" />
      <main>
        <div class="error-noise">
          <div class="error-effect">
            <video ref="video" playsinline></video>
            <div class="old-tv-content">
              <div
                v-if="power"
                class="text-layout"
              >
                <span class="corner-text rate" v-if="rate>1">{{rate}}x</span>
                <!-- <span class="corner-text play-index" v-if="playInOrder">{{nowPlaying}}/{{videoSeries.count}}</span> -->
                <p v-if="!loaded">
                  {{ waitingText }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="speaker" />
      <div class="volume">
        <input
          type="range"
          min="0"
          max="100"
          v-model.number="volume"
        >
      </div>
      <nav class="channel">
        <input
          type="range"
          min="1"
          max="2"
          step="0.5"
          v-model.number="rate"
        >
      </nav>
      <nav class="power" @click="handlePowerClick" @touchend="handlePowerOn">
        <button  />
      </nav>
      <nav />
      <footer />
    </div>

    <div class="controller" v-if="playInOrder">
      <div class="prev" @click="handlePlaylist(0)"><i class="iconfont icon-Previoustrack"/></div>
      <span class="play-index">{{nowPlaying}}/{{videoSeries.count}}</span>
      <div class="next" @click="handlePlaylist(1)"><i class="iconfont icon-Previoustrack"/></div>
    </div>

    <div id="table-tv">
      <div class="scene">
        <div class="shape cuboid-1 cub-1">
          <div
            class="face ft"
            style="box-shadow: inset 0 1px rgba(255,255,255,0.2)"
          />
          <div class="face bk" />
          <div class="face rt" />
          <div class="face lt" />
          <div class="face bm" />
          <div
            class="face tp"
            style="box-shadow: inset 0 100px 20px rgba(0,0,0,0.3), inset 0 300px rgba(0,0,0,0.3)"
          />
        </div>
        <div class="shape cuboid-3 cub-3">
          <div
            class="face ft"
            style="box-shadow: inset 0 300px rgba(0,0,0,0.6), 10px 2px 10px rgba(0,0,0,0.8)"
          />
          <div class="face bk" />
          <div class="face rt" />
          <div
            class="face lt"
            style="box-shadow: inset 0 300px rgba(0,0,0,0.8)"
          />
          <div class="face bm" />
          <div class="face tp" />
        </div>
        <div class="shape cuboid-4 cub-4">
          <div
            class="face ft"
            style="box-shadow: inset 0 20px 5px rgba(0,0,0,0.6), 5px 2px 8px rgba(0,0,0,0.4)"
          />
          <div class="face bk" />
          <div class="face rt" />
          <div
            class="face lt"
            style="box-shadow: inset 0 300px rgba(0,0,0,0.3)"
          />
          <div class="face bm" />
          <div class="face tp" />
        </div>
        <div class="shape cuboid-5 cub-5">
          <div
            class="face ft"
            style="box-shadow: inset 0 300px rgba(0,0,0,0.6), -10px 2px 10px rgba(0,0,0,0.8)"
          />
          <div class="face bk" />
          <div
            class="face rt"
            style="box-shadow: inset 0 300px rgba(0,0,0,0.8)"
          />
          <div class="face lt" />
          <div class="face bm" />
          <div class="face tp" />
        </div>
        <div class="shape cuboid-6 cub-6">
          <div
            class="face ft"
            style="box-shadow: inset 0 20px 5px rgba(0,0,0,0.6), -5px 2px 8px rgba(0,0,0,0.4)"
          />
          <div class="face bk" />
          <div
            class="face rt"
            style="box-shadow: inset 0 300px rgba(0,0,0,0.3)"
          />
          <div class="face lt" />
          <div class="face bm" />
          <div class="face tp" />
        </div>
        <div class="shape cuboid-2 cub-2">
          <div
            class="face ft"
            style="box-shadow: inset 0 1px rgba(255,255,255,0.2)"
          />
          <div class="face bk" />
          <div class="face rt" />
          <div class="face lt" />
          <div class="face bm" />
          <div
            class="face tp"
            style="box-shadow: inset 0 50px 20px rgba(0,0,0,0.5), inset 0 150px rgba(0,0,0,0.4)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {sounds,waitingTexts,videoSource} from '@/config'
import {randomInt,randomArray} from '@/utils'


export default {
  data() {
    return {
      videoControl:null,
      volume:100,
      rate:1,
      power: false,
      loaded:false,
      paycode:false,
      waitingText: waitingTexts[0],
      waitingTextTimer:null,
      cdn:'',
      videoSeries:{},
      offAnimation:false
    }
	},
  watch: {
    volume(newValue, oldValue) {
      const vol = newValue/100
      this.videoControl.volume(vol)
      sounds.noise.volume = vol
    },
    rate(newValue, oldValue){
      this.videoControl.playbackRate(newValue)
    }
  },
  created(){
    // this.initcdn()
    this.setWaitingText()
  },
  mounted(){
    this.videoControl = videojs(this.$refs.video,{
      autoplay: true,
			controls: false,
      loop: true,
      width:0,
      height:0,
      children:[]
    });
    this.videoControl.on('canplay',()=>{
      this.handleCanplay()
    })
    this.videoControl.on('error',()=>{
      if(this.videoControl.error().code === 4){
        this.handleMediaError()
      }
    })
  },
  destroyed(){
    clearTimeout(this.waitingTextTimer)
  },
  computed: {
    playInOrder() {
      return !!this.videoSeries.playInOrder
    }
  },
	methods: {
    handlePowerClick(){
      if("ontouchstart" in document){
        return
      }
      this.handlePowerOn()
    },
		async handlePowerOn() {
      sounds.switch.pause()
      sounds.switch.currentTime = 0
      sounds.switch.play()
			this.power=!this.power
			if(this.power) {
        this.offAnimation = false
        this.toWaitState()
        this.videoSeries = randomArray(videoSource)
        const {name,repo,count,playInOrder} =  this.videoSeries
        this.nowPlaying = playInOrder ? 1 : randomInt(count)+1
        const video = `${name}/${this.nowPlaying}`
        const source = `https://cdn.jsdelivr.net/gh/${repo}@master/videos/${video}/playlist.m3u8`
        if(this.videoControl.src()===source){
          this.handleCanplay()
          this.videoControl.play().catch(e=>{
            console.warn(e)
            if(e.code === 9){
              this.toErrorState('信号丢失 请插拔电源重试')
            }
          })
        }else{
          this.videoControl.src({type: 'application/x-mpegURL', src:source})
        }
			}else{
        this.toStopState()
      }
		},
    handleCanplay(){
      this.toPlayState()
    },
    handleMediaError(){
      this.toErrorState('信号丢失 请插拔电源重试')
    },
    toPlayState(){
      sounds.noise.pause()
      this.loaded = true
      clearTimeout(this.waitingTextTimer)
    },
    toWaitState(){
      this.waitingText = waitingTexts[0]
      this.setWaitingText()
      sounds.noise.play()
      this.loaded = false
    },
    toStopState(){
      this.offAnimation = true
      this.videoSeries = {}
      clearTimeout(this.waitingTextTimer)
      this.rate = 1
      sounds.noise.pause()
      this.videoControl.pause()
      this.loaded = false
    },
    toErrorState(errorMsg) {
      clearTimeout(this.waitingTextTimer)
      sounds.noise.play()
      this.loaded = false
      this.waitingText = errorMsg
    },
    showPaycode(){
      this.$emit('pay')
    },
    setWaitingText(){
      this.waitingTextTimer = setTimeout(() => {
        this.waitingText = randomArray(waitingTexts)
        this.setWaitingText()
      }, (randomInt(5)+5)*1000)
    },
    handlePlaylist(ifNext){
      if(!this.loaded){
        return
      }
      if(ifNext){
        if(this.nowPlaying >= this.videoSeries.count){
          return
        }
        this.playSeries(this.nowPlaying+1)
      }else{
        if(this.nowPlaying <= 1){
          return
        }
        this.playSeries(this.nowPlaying-1)
      }
    },
    playSeries(index){
      this.toWaitState()
      const {name,repo,count,playInOrder} =  this.videoSeries
      this.nowPlaying = index
      const video = `${name}/${this.nowPlaying}`
      const source = `https://cdn.jsdelivr.net/gh/${repo}@master/videos/${video}/playlist.m3u8`
      if(this.videoControl.src()===source){
        this.handleCanplay()
        this.videoControl.play().catch(e=>{
          console.warn(e)
          if(e.code === 9){
            this.toErrorState('信号丢失 请插拔电源重试')
          }
        })
      }else{
        this.videoControl.src({type: 'application/x-mpegURL', src:source})
      }
    }
	}
}
</script>

<style lang="less" scoped>
@import './styles/television.less';
</style>
