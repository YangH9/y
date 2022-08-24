# 正则基础知识

### [首页](/)

[常用的正则表达式](reg1.md)

<meta name="referrer" content="never" />
<meta name="keywords" content="正则基础知识" />
<meta name="description" content="正则基础知识" />
<link rel="stylesheet" href="../css/base.css">

## 基础

### 限定符（Quantifiers）

#### 语法：?

> "?" 表示前面的字符可以匹配 `1次或者0次`。

```js
'HelloWorld!'.match(/l?/g)
// ['o', 'or']
```

#### 语法：+

> "+" 表示前面的字符至少匹配 `1次或者多次`。

```js
'HelloWorld!'.match(/l+/g)
// ['ll', 'l']
```

#### 语法：*

> "+" 表示前面的字符可以匹配 `0次或者多次`。

```js
'HelloWorld!'.match(/l+/g)
// ['ll', 'l']
```

#### 语法：{...}

> "{…}" 可以用来匹配 `固定数量`的字符或 `某个范围`内的字符。

```js
'abc,abbc,abbbc,abbbbc'.match(/ab{2}c/g)
// ['abbc']
// "{2}" 当只有一个参数时，只匹配固定数量。

'abc,abbc,abbbc,abbbbc'.match(/ab{2,3}c/g)
// ['abbc', 'abbbc']
// "{2,3}" 当有两个参数时，匹配范围内的。

'abc,abbc,abbbc,abbbbc'.match(/ab{2,}c/g)
// ['abbc', 'abbbc', 'abbbbc']
// "{2,}" 当后面的参数为空时，匹配 n 个及以上。
```

#### 语法：(…)

> "(…)" 可以用来匹配 `多个字符`

```js
'ababc,abcbc'.match(/(bc)+/g)
// ['bc', 'bcbc']
```

### 或运算符 (OR Operator)

#### 语法：|

> "\|"可以用来匹配 `两个或多个条件`

> "\|"运算符外层必须要"()"包裹

```js
'ababc,abbac'.match(/(ab|ba)+/g)
// ['abab', 'abba']
```

### 字符类(Character class)

#### 语法：[…]

> "[…]" 可以匹配 `拥有任意字符`的字符串，需要匹配的字符只能取自中括号中的内容。
> 也可以匹配指定范围：[0-9]、[a-z]……
> 也可以在前面加"^"用来匹配 `非此范围`的字符串：[^0-9]、[^a-z]……

```js
'123,abc,ABC'.match(/[0-9a-z]/g)
// ['1', '2', '3', 'a', 'b', 'c']

'123,abc,ABC'.match(/[0-9a-z]+/g)
// ['123', 'abc']

'123,abc,ABC'.match(/[^0-9a-z]/g)
// [',', ',', 'A', 'B', 'C']

'123,abc,ABC'.match(/[^0-9a-z]+/g)
// [',', ',ABC']
```

### 元字符 (Meta character)

#### 语法：\d、\w、\s、\D、\W、\S、.、^、\$

> - \d,\w,\s - 匹配数字、字符、空格(分别代表着：digit、word、space)。
> - \D,\W,\S - 匹配非数字、非字符、非空格。
> - . - 除换行符以外的所有字符(句号句子的结束符)。
> - ^ - 字符串开头。
> - \$ - 字符串结尾。

```js

```

## 高级概念

### 懒惰匹配和贪婪匹配 (Lazy and Greed)

#### 语法：?

> 我们可以在正则表达式中加“?”来开启 `懒惰匹配`。开启懒惰匹配后，正则会 `尽可能少的匹配`。

```js
let str = `<div>div</div><span>span</span>`

str.match(/<.+>/g)
// ['<div>div</div><span>span</span>']

str.match(/<.+?>/g)
// ['<div>', '</div>', '<span>', '</span>']
```

### 分组 (Group)

#### 语法：(…)(…)

```js
let str = `<div>div</div><span>span</span>`

str.match(/<(\w+)>\w+?<\/(\w+)>/g)
// ['<div>div</div>', '<span>span</span>']
```

### 非捕获分组 (Non-capture Group)

#### 语法：?:

> (?:表达式)，分组匹配之后，不需要的用 “?: ”语法过滤子表达式内容。也就是代码匹配，但是不保存。

```js
let str = `<div>div1</div>`

/<(\w+)>(\w+?)<\/(\w+)>/g.exec(str)
// ['<div>div1</div>', 'div', 'div1', 'div', ……]

/<(\w+)>(?:\w+?)<\/(\w+)>/g.exec(str)
// ['<div>div1</div>', 'div', 'div', ……]
```

### 回溯 (Flash Back)

#### 语法：\1

> 需校验前后两组内容一致性时可用，`\1`为第一个分组，

```js
let str = `<div>div1</div><div>div2</span><span>span2</span>`

str.match(/<[\w]+>.*?<\/[\w]+>/g)
// ['<div>div1</div>', '<div>div2</span>', '<span>span2</span>']

str.match(/<([\w]+)>.*?<\/\1>/g)
// ['<div>div1</div>', '<span>span2</span>']
```

### 断言 (Assertion)

> `断言`有些地方也叫环视(Lookaround)，它只进行子表达式的匹配，不占有字符，匹配到的内容不保存到最终的匹配结果。

#### 正向先行断言

#### 语法：(?=表达式)

> 指在某个位置往右看，所在的位置右侧必须匹配 `表达式`。

```js
let str = `abcd,abd,bcd,acd`
str.replace(/(bc(?=d))/g, '<$1>')
// a<bc>d,abd,<bc>d,acd
```

#### 反向先行断言

#### 语法：(?!表达式)

> 指在某个位置往右看，不能存在 `表达式`中的内容。

```js
let str = `abcd,abd,abc,acd`
str.replace(/(ab(?!d))/g, '<$1>')
// <ab>cd,abd,<ab>c,acd
```

#### 正向后行断言

#### 语法：(?<=表达式)

> 指在某个位置往左看，存在 `表达式`中的内容。

```js
let str = `abcd,abd,dbcd,abc`
str.replace(/((?<=a)bc)/g, '<$1>')
// a<bc>d,abd,dbcd,a<bc>
```

#### 反向后行断言

#### 语法：(?<!表达式)

> 指在某个位置往左看，不能存在 `表达式`中的内容。

```js
let str = `abcd,bcd,dbcd,acd`
str.replace(/((?<!a)bc)/g, '<$1>')
// abcd,<bc>d,d<bc>d,acd
```

## 方法

> 在 JavaScript 中，`RegExp`对象是一个预定义了属性和方法的正则表达式对象。

### RegExp 提供的方法

#### test()

> 该方法用于检测一个字符串是否匹配某个正则表达式，`匹配`返回 true，`不匹配`返回 false。

```js
/a+/g.test('abc123')
// true
/d+/g.test('abc123')
// false
```

#### exec()

> 该方法用于检测字符串中对正则表达式的匹配。
> 该函数返回一个 `数组`，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

```js
/a+/g.exec('abc123')
// ['a', index: 0, input: 'abc123', groups: undefined]
/d+/g.exec('abc123')
// null
```

### 配合 String 提供的方法

#### match()

> `match` 这个方法主要用来提取数据，它配合分组的（）一起使用，可以很方便的提取数据。

```js
let str = `<div>div</div>`
str.match(/<(\w+)>\w+?<\/(\w+)>/)
// ['<div>div</div>', 'div', 'div', index: 0, input: '<div>div</div>', groups: undefined]
```

#### replace()

> `replace` 这个 api 主要用于替换数据，多用于字符串的处理和转义。

```js
let str = `<div>div</div>`
str.replace(/\w+/g, 'span')
// <span>span</span>

let str = '2022-02-22'
str.replace(/(.{4})-(.{2})-(.{2})/,'$1/$2/$3')
// '2022/02/22'
```

#### split()

> `split` 主要用于来切分字符串为数组，它的第一个参数也可以为正则的形式。

```js
let str = '2022-02/22'
str.split(/[\-\.\/]/)
//  ['2022', '02', '22']
```

## 常用的25种正则

[常用的正则表达式](reg1.md)
