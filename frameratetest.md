## 帧率测试

### [首页](/)

<link rel="stylesheet" href="css/base.css">

<div style="text-align:center;font-size: 32px;">Your FPS: <span id="p-ft-i">0</span></div>
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
