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