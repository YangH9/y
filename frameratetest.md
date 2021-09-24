## 帧率测试

### [首页](/)

<link rel="stylesheet" href="css/base.css">

<body style="height: 100vh; margin: 0px; font-family: Roboto, Noto, sans-serif">
  <div class="p-frame-tester">
    <style scoped>
      .p-frame-tester {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .c {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 32px;
      }
    </style>
    <div class="c">Your FPS: <span id="p-ft-i">0</span></div>
    <script>
      let ftCount = 0;
      let ftOut = false;
      const ftIndicator = document.querySelector('#p-ft-i');
      const doStart = () => {
        requestAnimationFrame(() => {
          ftCount++;
          if(ftOut) {
            ftIndicator.innerText = ftCount;
            ftCount = 0;
            ftOut = false;
          }
          doStart();
        });
      }
      doStart();
      setInterval(() => {
        ftOut = true;
      }, 1000);
    </script>
  </div>
</body>
