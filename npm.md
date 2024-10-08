## npm

<link rel="stylesheet" href="css/base.css">

### [首页](/y/)

### 高级权限执行

``` sh
sudo ……
# 例：sudo npm i
```

### 忽略版本冲突安装依赖

``` sh
npm install --legacy-peer-deps
npm install [包名] --legacy-peer-deps
```

### 查看源

``` sh
npm config get registry
或
npm config list
```

> 国外镜像：https://registry.npmjs.org/
> 国内淘宝镜像：https://registry.npm.taobao.org

#### 临时使用某镜像

> 命令行中添加`--registry`关键字

``` sh
npm info
npm --registry <url> info [包名]
# 例：npm --registry https://registry.npm.taobao.org info express

npm install
npm install [包名] --registry=<url>
# 例：npm install --registry=https://registry.npm.taobao.org
```

#### 永久修改镜像地址

> 修改`config`中的配置项

``` sh
npm config set registry <url>
# 例：npm config set registry https://registry.npm.taobao.org
```

#### 更新npm包

> 安装插件

``` sh
npm install -g npm-check
```

> 检查package.json中所有可更新的包

``` sh
npm-check
```

> 更新所有依赖到新版本

``` sh
npm-check -u // 注意，更新的只是package.json下依赖的版本号
```

> 重新npm

``` sh
npm install   // 要是不放心，可以先把所有包删除，再重新npm install
```
