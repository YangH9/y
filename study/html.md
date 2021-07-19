# html标签基础、css基础内容

### [首页](/)

<meta name="referrer" content="never" />
<meta name="keywords" content="html标签基础,css基础内容" />
<meta name="description" content="html标签基础,css基础内容" />
<link rel="stylesheet" href="../css/base.css">

### 目录
* [html标签基础](#html标签基础)
* [css基础内容](#css基础内容)

## html标签基础

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

## css基础内容
```css
/* 选择器 */
html {
  /* 声明 */
  font-size: 18px;
  /* 属性: 值 */
  color: #FFF;
}
```

### 元素选择器

|  |  |
| - | - |
| class选择器 | `.class` |
| id选择器 | `#id` |
| 标签选择器 | `div` |
| 通用选择器 | `*` |

### 关系选择器

| | | |
| - | - | - |
| 后代选择器 | `div a` | `选择器1 选择器2`(选择器1内所有的后代选择器2元素) |
| 子代选择器 | `div > a` | `选择器1 > 选择器2`(选择器1内直接的子代选择器2元素) |
| 相邻选择器 | `div + a` | `选择器1 + 选择器2`(选择器1后相邻的一个兄弟选择器2元素) |
| 兄弟选择器 | `div ~ a` | `选择器1 ~ 选择器2`(选择器1后所有的兄弟选择器2元素) |

### 属性选择器

| | | |
| - | - | - |
| [属性名] | [class],[id] | 匹配属性名的元素 |
| [属性名="属性值"] | [class="class1"] | 匹配属性名和属性值的元素 |
| [属性名~="属性值"] | [class~="class1"] | 匹配属性名和含有属性值的元素 |
| [属性名^="属性值"] | [class^="cl"] | 匹配属性名和属性值以字符开头的元素 |
| [属性名$="属性值"] | [class$="s1"] | 匹配属性名和属性值以字符结尾的元素 |
| [属性名*="属性值"] | [class*="ss"] | 匹配属性名和属性值含有字符的元素 |
| [属性名\|="属性值"] | [class\|="a"] | 属性名中含有某个属性值的元素 |

### 伪类选择器

#### 结构性伪类

| | | |
| - | - | - |
| 元素:nth-child(n) | `div:nth-child` | 匹配元素内第n个子元素 |
| 元素:nth-child(2n) | `div:nth-child(2n)` | 匹配元素内第2n个子元素 |
| 元素:nth-child(odd) | `div:nth-child(odd)` | 匹配元素内的奇数子元素 |
| 元素:nth-child(even) | `div:nth-child(even)` | 匹配元素内的偶数子元素 |
| 元素:nth-child(n + x) | `div:nth-child(n + x)` | 匹配元素内大于等于x的子元素 |
| 元素:nth-child(- n + x) | `div:nth-child(- n + x)` | 匹配元素内小于等于x的子元素 |
| 元素:nth-child(3n + 1) | `div:nth-child(3n + 1)` | 匹配元素内几组子元素，隔行取一 |
| 元素:first-child | `div:first-child` | 匹配元素内第一个子元素 |
| 元素:last-child | `div:last-child` | 匹配元素内最后一个子元素 |
| 元素:only-child | `div:only-child` | 匹配只含有一个子元素的元素 |
| 元素:nth-last-child(n) | `div:nth-last-child(n)` | 匹配父元素的倒数第几个元素 |
| 元素:first-of-type | `div:first-of-type` | 匹配第一个这类元素 |
| 元素:last-of-type | `div:last-of-type` | 匹配最后一个这类元素 |
| 元素:nth-of-type(n) | `div:nth-of-type(n)` | 匹配第几个这类元素 |
| 元素:nth-last-of-type(n) | `div:nth-last-of-type(n)` | 匹配倒数第几个这类元素 |
| 元素:empty | `div:empty` | 匹配没有子节点的元素 |
| 元素:not(选择器) | `div:not()` | 匹配满足选择器条件的其他元素 |

#### 伪类选择器

| | | |
| - | - | - |
| :focus | `input:focus` | 匹配被获取到焦点的元素 |
| :active | `div:active` | 匹配被点击时的元素 |
| :checked | `input:checked` | 匹配被选中的单选框复选框的元素 |
| :disabled | `input:disabled` | 匹配被禁用的元素 |
| :enabled | `input:enabled` | 匹配可以使用的元素 |
| :link | `a:link` | 匹配未被访问的链接元素 |
| :visited | `a:visited` | 匹配已被访问的链接元素 |
| :hover | `a:hover` | 匹配鼠标指针浮动在其上的元素 |

#### 伪元素选择器

| | | |
| - | - | - |
| ::before | `div::before` | 在元素内容之前插入新内容 |
| ::after | `div::after` | 在元素内容之后插入新内容 |
