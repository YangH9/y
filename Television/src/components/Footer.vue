<template>
  <div class="container-footer">
    <p class="copyright">
      <span class="no-select">© 2016 - {{ year }},</span> tv.hzfe.org
      <span class="links">
        <a href="https://mp.weixin.qq.com/s/fmNA4isEAQUyscWbf3BPJQ">关于我们</a>
        <!-- <a @click="()=>{$refs.contact.open()}">联系我们</a> -->
      </span>
    </p>
    <Modal
      ref="contact"
      class="contact"
      btn-text="再见！"
    >
      <img
        class="contact-code"
        src="@/assets/image/contact.png"
      >
      <p>备注来意</p>
      （比如有没有可能来个带宽资源赞助？电视信号快断粮了，宝～）
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name:'Footer',
  components: {
    Modal,
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
}
</script>

<style lang="less" scoped>
.container-footer {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 30px;
  bottom: calc(constant(safe-area-inset-bottom) + 30px);
  bottom: calc(env(safe-area-inset-bottom) + 30px);
  color: #333;
  z-index: 11;
  .copyright {
    font-weight: lighter;
    font-size: 10px;
  }
  .links {
    margin-left: 1ex;
    user-select: none;
    a {
      text-decoration: none;
      color: #b78775;
      font-weight: normal;
      &:not(:last-child) {
        margin-right: 5px;
        &::after {
          position: absolute;
          content: '·';
          position: relative;
          left: 3px;
        }
      }
    }
  }
}
.contact {
  user-select: none;
  .contact-code {
    margin: 20px;
  }
}

@media (prefers-color-scheme: dark) {
  .copyright {
    color: #fff;
  }
}
</style>
