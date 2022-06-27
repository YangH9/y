# JS 语法 ES6、ES7、ES8、ES9、ES10、ES11、ES12新特性

### [首页](/)

<meta name="referrer" content="never" />
<meta name="keywords" content="语法 ES6、ES7、ES8、ES9、ES10、ES11、ES12新特性" />
<meta name="description" content="语法 ES6、ES7、ES8、ES9、ES10、ES11、ES12新特性" />
<link rel="stylesheet" href="../css/base.css">

## 新特性

### ES6（2015）

#### 1. 类（class）

```js
class Man {
  constructor(name) {
    this.name = '小豪';
  }
  console() {
    console.log(this.name);
  }
}
const man = new Man('小豪');
man.console(); // 小豪
```

#### 2. 模块化(ES Module)

```js
// 模块 A 导出一个方法
export const sub = (a, b) => a + b;
// 模块 B 导入使用
import { sub } from './A';
console.log(sub(1, 2)); // 3
```

#### 3. 箭头（Arrow）函数

```js
const func = (a, b) => a + b;
func(1, 2); // 3
```

#### 4. 函数参数默认值

```js
function foo(age = 25,){
  // ...
}
```

#### 5. 模板字符串

```js
const name = '小豪';
const str = `Your name is ${name}`;
```

#### 6. 解构赋值

```js
let a = 1, b= 2;
[a, b] = [b, a]; // a 2  b 1
```

#### 7. 延展操作符

```js
let a = [...'hello world']; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
```

#### 8. 对象属性简写

```js
const name='小豪';
const obj = { name };
```

#### 9. `Promise`

```js
Promise.resolve().then(() => { console.log(2); });
console.log(1);
// 先打印 1 ，再打印 2
```

#### 10. `let` 和 `const`

```js
let name = '小豪';
const arr = [];
```

### ES7（2016）

#### 1. `Array.prototype.includes()`

```js
[1].includes(1); // true
```

#### 2. 指数操作符

```js
2**10; // 1024
```

### ES8（2017）

#### 1. `async` / `await` 异步终极解决方案

```js
async getData(){
  const res = await api.getTableData(); // await 异步任务
  // do something    
}
```

#### 2. `Object.values()`

```js
Object.values({a: 1, b: 2, c: 3}); // [1, 2, 3]
```

#### 3. `Object.entries()`

```js
Object.entries({a: 1, b: 2, c: 3}); // [["a", 1], ["b", 2], ["c", 3]]
```

#### 4. String padding

```js
// padStart
'hello'.padStart(10); // "     hello"
// padEnd
'hello'.padEnd(10) "hello     "
```

#### 5. 函数参数列表结尾允许逗号

#### 6. `Object.getOwnPropertyDescriptors()`
> 获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。

#### 7. `SharedArrayBuffer` 对象

```js
SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，
/**
 * 
 * @param {*} length 所创建的数组缓冲区的大小，以字节(byte)为单位。  
 * @returns {SharedArrayBuffer} 一个大小指定的新 SharedArrayBuffer 对象。其内容被初始化为 0。
 */
new SharedArrayBuffer(10)
```

#### 8. `Atomics` 对象

```js
Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作。
```

### ES9（2018）

#### 1. 异步迭代
> `await` 可以和 `for...of` 循环一起使用，以串行的方式运行异步操作

```js
async function process(array) {
  for await (let i of array) {
    // doSomething(i);
  }
}
```

#### 2. `Promise.finally()`

```js
Promise.resolve().then().catch(e => e).finally();
```

#### 3. Rest/Spread 属性

```js
const values = [1, 2, 3, 5, 6];
console.log( Math.max(...values) ); // 6
```

#### 4. 正则表达式命名捕获组

```js
const reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = reg.exec('2021-02-23');
```

#### 5. 正则表达式反向断言

```js
(?=p)、(?<=p)  p 前面(位置)、p 后面(位置)
(?!p)、(?<!p>) 除了 p 前面(位置)、除了 p 后面(位置)
(?<=w)
(?<!w)
```

#### 6. 正则表达式 `dotAll` 模式
> 正则表达式中点.匹配除回车外的任何单字符，标记s改变这种行为，允许行终止符的出现

```js
/hello.world/.test('hello\nworld'); // false
```

### ES10（2019）

#### 1. `Array.flat()` 和 `Array.flatMap()`

```js
// flat()
[1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
// flatMap()
[1, 2, 3, 4].flatMap(a => [a**2]); // [1, 4, 9, 16]
```

#### 2. `String.trimStart()` 和 `String.trimEnd()`
> 去除字符串首尾空白字符

#### 3. `String.prototype.matchAll`
> `matchAll()` 为所有匹配的匹配对象返回一个迭代器

```js
const raw_arr = 'test1  test2  test3'.matchAll((/t(e)(st(\d?))/g));
const arr = [...raw_arr];
```

#### 4. `Symbol.prototype.description`
> 只读属性，回 `Symbol` 对象的可选描述的字符串。

```js
Symbol('description').description; // 'description'
```

#### 5. `Object.fromEntries()`
> 返回一个给定对象自身可枚举属性的键值对数组

```js
// 通过 Object.fromEntries， 可以将 Map 转化为 Object:
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
console.log(Object.fromEntries(map)); // { foo: "bar", baz: 42 }
```

#### 6. 可选 Catch

### ES11（2020）

#### 1. Nullish coalescing Operator(空值处理)
> 表达式在 `??` 的左侧 运算符求值为 `undefined` 或 `null` ，返回其右侧。

```js
let user = {
    u1: 0,
    u2: false,
    u3: null,
    u4: undefined
    u5: '',
}
let u2 = user.u2 ?? '用户2'  // false
let u3 = user.u3 ?? '用户3'  // 用户3
let u4 = user.u4 ?? '用户4'  // 用户4
let u5 = user.u5 ?? '用户5'  // ''
```

#### 2. Optional chaining（可选链）
> `?.` 用户检测不确定的中间节点

```js
let user = {}
let u1 = user.childer.name // TypeError: Cannot read property 'name' of undefined
let u1 = user.childer?.name // undefined
```

#### 3. Promise.allSettled
> 返回一个在所有给定的 `promise` 已被决议或被拒绝后决议的 `promise` ，并带有一个对象数组，每个对象表示对应的 `promise` 结果

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
const promise4 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
const promiseList = [promise1,promise2,promise3, promise4]
Promise.allSettled(promiseList)
.then(values=>{
  console.log(values)
});
```

#### 4. `import()`
> 按需导入

#### 5. 新基本数据类型 `BigInt`
> 任意精度的整数

#### 6. `globalThis`
> 浏览器：window<br>
> worker：self<br>
> node：global

### ES12（2021）

#### 1. `replaceAll`
> 返回一个全新的字符串，所有符合匹配规则的字符都将被替换掉

```js
const str = 'hello world';
str.replaceAll('l', ''); // "heo word"
```

#### 2. `Promise.any()`
> `Promise.any()` 接收一个 `Promise` 可迭代对象，只要其中的一个 `promise` 成功，就返回那个已经成功的 `promise` 。如果可迭代对象中没有一个 `promise` 成功（即所有的 `promises` 都失败/拒绝），就返回一个失败的 `promise`

```js
const promise1 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
const promise2 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
const promiseList = [promise1, promise2];
Promise.any(promiseList)
.then(values=>{
  console.log(values);
})
.catch(e=>{
  console.log(e);
});
```

#### 3. WeakRefs
> 使用 `WeakRefs` 的 `Class` 类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)

#### 4. 逻辑运算符和赋值表达式
> 逻辑运算符和赋值表达式，新特性结合了逻辑运算符（ `&&` ， `||` ， `??` ）和赋值表达式而JavaScript已存在的 复合赋值运算符有：

```js
// 原有
a = a ?? b;
a = a && b;
a = a || b;

// 新的
a ??= b;
a &&= b;
a ||= b; 
```

#### 5. 数字分隔符
> 数字分隔符，可以在数字之间创建可视化分隔符，通过 `_` 下划线来分割数字，使数字更具可读性

```js
const money = 1_000_000_000;
//等价于
const money = 1000000000;

1_000_000_000 === 1000000000; // true
```

### ES13（2022）
#### 1.Class Fields
> Class Public Instance Fields 公共实例字段

```js
// old
class Counter {
  constructor() {
    this._num = 0
  }
}

// new
class Counter {
  this._num = 0
}
```

> Private Instance Fields 私有实例字段
```js
// old
class Counter {
  _num = 0
}
const counter = new Counter()
console.log(counter._num) // 0

// new
class Counter {
  #num = 0
}
const counter = new Counter()
console.log(counter.#num) // Uncaught SyntaxError: Private field '#num' must be declared in an enclosing class
```

> Private instance methods and accessors 私有实例方法和访问器
```js
class Counter {
  #num
  constructor() {
    console.log(this.#getNum) // undefined
    this.#initNum = 0
    console.log(this.#getNum) // 0
  }
  get #getNum() {
    return this.#num
  }
  set #initNum(num) {
    this.#num = num
  }
}

const counter = new Counter()
console.log(counter.#initNum) // Uncaught SyntaxError: Private field '#initNum' must be declared in an enclosing class
```

> Static class fields and methods 静态公共字段和方法
```js
class Counter {
  #num = 0
  static baseNum = 100
  // 静态方法可以通过 this 访问静态字段
  static getDoubleBaseNum() {
    return this.baseNum * 2
  }
}
// 静态字段和方法通过类本身访问
console.log(Counter.baseNum) // 100
console.log(Counter.getDoubleBaseNum()) // 200

// 实例不能访问静态字段和方法
const counter = new Counter()
console.log(counter.baseNum) // undefined
```

> Private static class fields and methods 静态私有字段和方法
```js
class Counter {
  #num = 0
  static #baseNum = 100
  static getDoubleBaseNum() {
    return this.#baseNum * 2
  }
  getBaseNum() {
    return Counter.#baseNum
  }
}

// 私有静态字段不能被直接访问
console.log(Counter.#baseNum) // Uncaught SyntaxError: Private field '#baseNum' must be declared in an enclosing class
// 同类静态方法可以访问私有静态字段
console.log(Counter.getDoubleBaseNum()) // 200

// 实例可以访问同类下的私有静态字段和方法
const counter = new Counter()
console.log(counter.getBaseNum()) // 100
```

#### 2. RegExp Match Indices 正则表达式匹配索引

```js
const re1 = /e+(l)?/d
const s1 = "hello world"
const m1 = re1.exec(s1)
// 结果中记录匹配结果的起始位置
console.log(m1.indices[0]) // [1, 3]
console.log(s1.slice(...m1.indices[0])) // 'el'
// 可以使用 hasIndices 判断是否使用 d 标识符
console.log(re1.hasIndices) // true
```

#### 3. 顶层 await
> 可以直接使用的await
```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
console.log('请等待...')
// 使用 顶层 await
// 需要 esmodule
await sleep(2000)
console.log('开始执行')
```

#### 4. Ergonomic brand checks for Private Fields 私有字段检查 in关键字
> 主要是检测一个对象或实例是否存在私有字段或方法：
```js
class C {
  #brand
  #method() {}
  get #getter() {}
  static isC(obj) {
    return #brand in obj && #method in obj && #getter in obj
  }
}
const c = new C()
console.log(C.isC(c)) // true
console.log(C.isC({})) // false
```

#### 5. .at() 可索引对象的 at 方法
```js
// Array
const array = ['a', 'b', 1]
console.log(array[array.length - 1]) // 1
console.log(array.at(-1)) // 1 支持负数索引

// String
const string = 'abc'
console.log(string[string.length - 1]) // 'c'
console.log(string.at(-1)) // 'c' 支持负数索引
```

#### 6. Accessible Object.hasOwn
> 获取对象内是否含有某属性、方法（属于自己的，非继承）
```js
function Fun(name){ this.name = name }
Fun.prototype.fun = function(){
  console.log(this.name)
}
const fun = new Fun('name2')
// old
console.log(fun.hasOwnProperty('name')) // true
console.log(fun.hasOwnProperty('fun')) // false
// new
console.log(Object.hasOwn(fun,'name')) // true
console.log(Object.hasOwn(fun,'fun')) // false

const notPrototype = Object.create(null)
console.log(Object.hasOwn(notPrototype, 'name')) // false
console.log(notPrototype.hasOwnProperty('name')) // Uncaught TypeError: notPrototype.hasOwnProperty is not a function
```

#### 7. Class Static Block
```js
let getDemo, setDemo
class A {
  static a1 = 'a1'
  static a2
  #demo = 'demo'
  static {
    // 给静态属性赋值
    A.a2 = 'a2'
    // 访问私有属性（赋值给外部变量）
    getDemo = (obj) => obj.#demo
    // 设置私有属性（赋值给外部变量）
    setDemo = (obj, value) => (obj.#demo = value)
  }
}
console.log(A.a1) // a1
console.log(A.a2) // a2
const a = new A()
console.log(getDemo(a)) // demo
setDemo(a, 'new  demo')
console.log(getDemo(a)) // 'new  demo'
class B extends A {
  static {
    // 访问父类的属性或方法
    console.log(super.a2) // a2
  }
}
```

#### 8. Error Cause
> 新特性是在 Error 构造函数上添加一个附加选项参数 cause，其值将作为属性分配给错误实例。这样我们可以在后续处理中拿到原始的错误信息，而不是只有个 message。
```js
function fetchDemo(url) {
  return Promise.reject(`${url} 错误`).catch((err) => {
    throw new Error(err, {
      cause: err,
    })
  })
}
(async () => {
  try {
    await fetchDemo('http://www.')
  } catch (error) {
    console.log(error)
    // 获取真实的错误信息
    console.log(error.cause)
  }
})()
```
