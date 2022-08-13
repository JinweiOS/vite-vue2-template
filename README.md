# vite-vue2

## Step1

### 创建vue2项目

```shell
vue create [your project name]
```

过程当中自己选择好一下组件&配置好默认配置：

+ vue-router

模式使用hash

+ vuex

+ css

选择sass，其实就是默认项

+ vue version

选择2.x

+ lint on save

按空格见取消

### 更改包管理器为pnpm

点击[这儿](https://www.pnpm.cn/installation)选择对应操作系统的安装脚本，例如：
window系统可以在powershell中执行以下命令（命令以官网为主，防止过期有变动）
```shell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

1. 删除package.lock.json文件&node_modules

2. 运行命令 pnpm install

### 配置vite

1. 更改package.json中的scripts为vite。（默认的是vue-cli-service)

2. 删除vue.config.js文件，新建vite.config.js文件

3. 复制此仓库中的vite.config.js文件中的配置

4. 安装对应的依赖

```shell
pnpm add vite @vitejs/plugin-vue2
```

5. 移动index.html文件，并添加script标签

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```
