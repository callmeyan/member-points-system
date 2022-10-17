# 一、初始化项目
```shell
npm init -y
```
# 二、初始化git仓库
```shell
git init
```
# 三、初始化vue项目
### 1、package.json的依赖
```json
"scripts": { // 脚本 启用命令
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
},
"dependencies": { // 依赖
    "less": "^4.1.3",
    "vue": "^3.2.26"
},
"devDependencies": {
    "@vue/cli-plugin-babel": "^4.4.0",
    "@vue/cli-service": "^4.4.0",
    "babel-eslint": "^10.1.0",
    "vue-template-compiler": "^2.6.11"
},
```
### 2、模板文件 public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```
### 3、应用启动(入口)脚本 src/main.js - vue
```javascript
import {createApp} from 'vue' // 导入vue创建应用的函数
import App from './App' // 主页

# 创建应用并挂载到模板
createApp(App).mount('#app')
```


# 四、启动项目
```shell
npm i # 安装依赖
npm run dev # 运行
```













git add . / git add xxx
git commit -m "xxx"
git push 分支
