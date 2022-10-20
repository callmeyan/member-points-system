# 一、创建项目
```shell
npm init -y
```
# 二、初始化git仓库
```shell
git init
```
# 三、初始化vue项目 -- 创建项目会自动写好
### 1、package.json的依赖
```json
"scripts": { // 脚本 启用命令
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
},
"dependencies": { // 依赖
    "vue": "^3.2.26"
},
"devDependencies": {
    "@vitejs/plugin-vue": "^3.1.0",
    "vite": "^3.1.0",
    "less": "^4.1.3",
    "typescript": "^4.6.4",    
    "vue-tsc": "^1.0.8"
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
    <script type="module" src="/src/main.ts"></script>
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


# 其他
## VUE的组件
### 属性
```shell
// 不适用setup的属性
export default {
    props:['title','content','...'] // 直接在数组中定义所需要的属性,缺点：没有办法限制值
    props:{
        title:String, // 定义类型
        content:{
            type: String, // 类型
            required: true, // 是否必须 
            default:''  // 默认值
        }
    }
}
// 使用setup的属性
defineProps(['title','content','...'])// 不指定类型
defineProps({
    title:String, // 定义类型
    content:{
        type: String, // 类型
        required: true, // 是否必须 
        default:''  // 默认值
    }
})
// 使用
<组件名称 title="xxx" content="" />
```
# TS的基本语法
// 定义类型
class A{} // 定义类
interface B { // 定义接口
    name: string;
}
type C = {
    age: number;
    b: B;
}
// 使用类型
const a: A = {}
const b: A | B | C | null | undefined = null
const c: {id:number;name:string} = {id:0,name:''}
// 在方法上使用类型 - 泛型方法
方法名<类型1,类型2>();













git add . / git add xxx
git commit -m "xxx"
git push 分支
