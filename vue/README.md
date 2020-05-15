# VUE文档

## 问题
1. 同一组件中data数据改变之后，点击改变data数据，但v-for没有重新渲染
解决：同一公共组件，在主页和其他页面同事引入，不同组件引入一个公共组件的话，公共组件data是两套独立的参数
2. 不要滥用store中state
3. 点击事件和v-for不能放在一个元素中，否则点击事件无效
4. computed会有缓存，除非依赖的响应属性改变，才会重新计算，可用箭头函数；method不可用箭头函数
5. 在组件中函数用箭头函数，这样可以不用缓存this
6. router中修改state的值，理论上还是不要直接修改state中的值，虽然可以直接修改，但是如果直接修改，在工具中看不到数据的变动，所以建议用mutations中提交进行修改state的值
7. vue构建的之后，因为路由用的是history，后台需要配置一下，怎样配置可以用vue-router中history看到，我这边用的是express
后台服务使用：nodejs
```javascript
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.listen(3000, () => {
  console.log('app listening on port 3000.')
})
module.exports = app;

```
后台服务使用：nginx
```javascript
location / {
  try_files $uri $uri/ /index.html;
}
```
8. 项目部署到生产环境中去
在vue.config.js中设置
```javascript
process.env.NODE_ENV = 'production'
```
执行命令npm run build，生成dist文件夹，将文件夹用crt上传到nginx的html文件夹中</br>
响应的需要修改nginx的配置文件</br>
```javascript
location / {
  root html/dist;
  index views/template.html;
  try_files $uri $uri/ /views/template.html;
}
```
还有生产环境调取后台接口(可以参照后台接口在nginx中怎么配置的)</br>
https://blog.csdn.net/ygm_linux/article/details/82531763（资料）
9. vue不能直接修改data中的数组
```javascript
this.$set(this.data1,i,json)//修改数组中某一条数据
this.data1.splice(数组长度)//修改数组长度
```
10. 想实现一个组件中调用另一个组件的方法
可以使用事件总线</br>
```javascript
this.$bus.$emit(变量)//调用函数
this.$bus.$on(变量,function(){//定义
  函数()
})
```
11. 获取vue中template中元素宽度
```javascript
<div ckass="topo" ref="topo1"></div>//template中元素
var w=this.$refs.topo1.offsetWidth//topo1元素
```
12. 静态文件放置
只是将某一个功能的全部代码移植到这个项目，然后跳转到另一个页面，将代码文件夹放在public中；
如果是之前一个代码文件是js文件，也是将文件放在public中，然后在template.html中引入；

