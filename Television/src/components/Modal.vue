<template>
  <transition name="fadein">
    <div
      v-show="visible"
      class="modal"
    >
      <slot />
      <div
        class="close-btn"
        @click="close"
      >
        {{ btnText }}
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name:'Modal',
    props: {
      btnText: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      open() {
        this.visible = true
      },
      close(){
        this.visible = false
      }
    },
  }
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 25px;
  text-align: center;
  z-index: 1000;
  background: #fafafa;
  box-shadow: 40px 40px 40px rgba(204, 204, 204, 0.8), 0 0 0 #ffffff,
    0 0 0 #cccccc inset, 2px 2px 2px #ffffff inset;
  // border: 3px solid #f1c6c687;
  border-radius: 30px;
  width: 85vw;
  max-width: 500px;
  overflow: hidden;
  .close-btn {
    user-select: none;
    background: url('~@/assets/image/next.svg') no-repeat;
    background-size: 109px;
    background-position: center;
    height: 50px;
    line-height: 48px;
    width: 109px;
    margin: 15px auto 0;
    color: #333;
    font-size: 16px;
    font-weight: normal;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    background: #f0f0f0;
    box-shadow: 10px 10px 10px rgba(204, 204, 204, 0.8), 10px 10px 10px #ffffff,
      0 0 0 #cccccc inset, 0 0 0 #ffffff inset;
    transform: translate3d(0, -38%, 0) scale(0.8);
  }
  60% {
    opacity: 1;
  }
  100% {
    background: #fafafa;
    box-shadow: 40px 40px 40px rgba(204, 204, 204, 0.8), 0 0 0 #ffffff,
      0 0 0 #cccccc inset, 2px 2px 2px #ffffff inset;
    transform: translate3d(0, -50%, 0);
  }
}

@keyframes fadeInUpDark {
  0% {
    opacity: 0;
    background: #eee;
    box-shadow: 10px 10px 10px rgba(6, 6, 6, 0.8),
      10px 10px 10px rgba(6, 6, 6, 0.8), 0 0 0 #cccccc inset,
      0 0 0 #ffffff inset;
    transform: translate3d(0, -38%, 0) scale(0.8);
  }
  60% {
    opacity: 1;
  }
  100% {
    background: #efefef;
    box-shadow: 40px 40px 40px rgba(6, 6, 6, 0.8), 0 0 0 rgba(6, 6, 6, 0.8),
      0 0 0 #cccccc inset, 2px 2px 2px #ffffff inset;
    transform: translate3d(0, -50%, 0);
  }
}
.fadein-enter-active {
  animation: fadeInUp 0.2s;
}
.fadein-leave-active {
  animation: fadeInUp 0.3s reverse;
}
@media (prefers-color-scheme: dark) {
  .modal {
    box-shadow: 40px 40px 40px rgba(6, 6, 6, 0.8), 0 0 0 rgba(6, 6, 6, 0.8),
      0 0 0 #cccccc inset, 2px 2px 2px #ffffff inset;
    background: #efefef;
  }
  .fadein-enter-active {
    animation: fadeInUpDark 0.2s;
  }
  .fadein-leave-active {
    animation: fadeInUpDark 0.3s reverse;
  }
}
</style>
