# html标签基础

### [首页](/)

<meta name="referrer" content="never" />
<meta name="keywords" content="html标签基础" />
<meta name="description" content="html标签基础" />
<link rel="stylesheet" href="../css/base.css">

```html
<!DOCTYPE html><!-- 声明文档类型 -->
<html lang="zh-cn">
<!-- 声明文档根标签，并设置语言类型 -->

<head>
  <!-- 开始文档头部区域 -->
  <meta charset="utf-8">
  <!-- 字符编码元信息，utf-8表示国际通用字符编码 -->
  <!--[if IE]><![endif]-->
  <!-- IE条件语句，兼容IE浏览器 -->
  <title>标题文字</title>
  <!-- 文档标题，对于SEO来说很重要-->
  <!--[if IE 9]><meta name=ie content=9><![endif]-->
  <!-- 兼容IE9浏览器 -->
  <!--[if IE 8]><meta name=ie content=8 ><![endif]-->
  <!-- 兼容IE8浏览器 -->
  <meta name="description" content="描述">
  <!-- 文档描述信息，对于SEO来说很重要 -->
  <meta name="keywords" content="关键词">
  <!-- 文档内容的关键词，对于SEO来说很重要 -->
  <meta name="author" content="作者">
  <!-- 文档的作者 -->
  <meta name="copyright" content="版权">
  <!-- 有关版权的信息 -->
  <link rel="shortcut icon" href="favicon.ico">
  <!-- 文件图标，显示在浏览器标题栏前边 -->
  <link rel="apple-touch-icon" href="custom_icon.png">
  <!--  apple设备的网页文件图标-->
  <!-- 定义视口，确保在移动设备中正确浏览 -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="main.css">
  <!-- 导入外部样式表文件 -->
  <!--[if IE]><link rel="stylesheet" type="text/css" href="win-ie-all.css"><![endif]-->
  <!-- 兼容IE样式表文件 -->
  <!--[if IE 7]><link rel="stylesheet" type="text/css" href="win-ie7.css"><![endif]-->
  <!-- 兼容IE7样式表文件 -->
  <!-- 让IE8支持HTML5的JavaScript在线文件 -->
  <!--[if lt IE 8]><script src="http://ie7-js.googlecode.com/svn/version/2.0(beta3)/IE8.js"></script><![endif]-->
  <script src="script.js"></script><!-- 导入外部JavaScript脚本文件 -->
</head>

<body>
  <header>
    <h1>[HTML5文档头部区域]</h1>
  </header>
  <nav>
    <h2>[HTML5文档导航区域]</h2>
  </nav>
  <section>
    <h2>[HTML5文档区块（节段）]</h2>
    <aside>
      <h3>[HTML5文档侧边区域]</h3>
    </aside>
    <article>
      <h3>[HTML5文档内容区域]</h3>
      <section>
        <h1>[嵌套的区块（节段）]</h1>
        <aside>
          <h2>[内层侧边栏]</h2>
        </aside>
        <article>
          <header>
            <h2>[内层标题]</h2>
          </header>
          <p>[内层正文]</p>
        </article>
      </section>
    </article>
  </section>
  <footer>
    <h2>[HTML5页脚区域]</h2>
    <p><a href="test.txt" target="_blank">{查看源代码}</a></p>
  </footer>
</body>

</html>
```