## vue vite-plugin 常用的插件

<link rel="stylesheet" href="css/base.css">

### vite-plugin-compression 开启gzip压缩

##### 安装

``` sh
npm i vite-plugin-compression -D
```

##### 使用

- vite.config.js 中的配置插件
``` js
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [viteCompression()],
})
```

##### 配置说明

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| verbose | `boolean` | `true` | 是否在控制台输出压缩结果 |
| filter | `RegExp or (file: string) => boolean` | `/\.(js\|mjs\|json\|css\|html)$/i` | 指定哪些资源不压缩 |
| disable | `boolean` | `false` | 是否禁用 |
| threshold | `number` | - | 体积大于 threshold 才会被压缩,单位 b |
| algorithm | `string` | `gzip` | 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw'] |
| ext | `string` | `.gz` | 生成的压缩包后缀 |
| compressionOptions | `object` | - | 对应的压缩算法的参数 |
| deleteOriginFile | `boolean` | - | 压缩后是否删除源文件 |

[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)


### vite-plugin-style-import 按需导入样式

##### 安装

``` sh
npm i vite-plugin-style-import -D
```

##### 使用

- vite.config.js 中的配置插件

```js
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css` // 按需引入样式
          },
        },
      ],
    }),
  ],
})
```

[vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import)

### unplugin-vue-components 按需导入组件

##### 安装

``` sh
npm i unplugin-vue-components -D
```

##### 使用

- vite.config.js 中的配置插件

```js
import Components from "unplugin-vue-components/vite"
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        VantResolver(),
      ],
    })
  ],
})
```

[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
