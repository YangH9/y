## nvm

<link rel="stylesheet" href="css/base.css">

### [首页](/y/)

### node 多版本管理器

### 卸载node

* 在控制面板中卸载nodejs
* 删除node的安装目录。大多数卸载后自动删除了，某些可能有残留。
* 删除C盘残余文件夹。大多数卸载后自动删除了，某些可能有残留。
* 如果手动配置过环境变量，删除node的环境变量。
* cmd检查node和npm版本。

### 安装

* 去GitHub上下载最新版nvm，[仓库地址](https://github.com/coreybutler/nvm-windows)，[下载地址](https://github.com/coreybutler/nvm-windows/releases)，下载安装包即可。
* 运行安装，路径可自定义，但不要有中文和空格。
* 执行`nvm version`有版本号说明安装成功。
* 如果安装失败，可能是node没有卸载干净。

### 使用nvm安装node

* 使用cmd窗口通过命令安装node

### 常用命令

| | |
| - | - |
| `nvm list` | 查看已安装的node版本 |
| `nvm install <version>` | 安装指定版本的node |
| `nvm use <version>` | 切换使用指定的版本 |
| `nvm current` | 查看当前使用的node版本 |
| `nvm on` | 启用 node.js 版本管理 |
| `nvm off` | 禁用 node.js 版本管理（不卸载任何内容） |
| `nvm uninstall <version>` | 卸载特定版本 |
| `nvm root <path>` | 设置 nvm 应存储不同版本 node.js 的目录 |
| `nvm version` | 显示适用于 Windows 的 NVM 的当前运行版本 |
| `nvm node_mirror <node_mirror_url>` | 设置 node 镜像。 https://npmmirror.com/mirrors/node/ |
| `nvm npm_mirror <npm_mirror_url>` | 设置 npm 镜像。 https://npmmirror.com/mirrors/npm/ |

### 旧版本node下载

在官网找到需要的版本，下载压缩包，解压至 `nvm root` 的目录内，修改文件夹名称，`v`+版本号
[下载链接](https://nodejs.org/en/download/releases/)

### 卸载nvm

* 卸载程序
* 删除环境变量
