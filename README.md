# 注意点

## 热更新

需要在 `store.ts` 文件中插入相关代码，否则在修改模型的时候，会造成 app.tsx 也跟着热更从而影响整体体验

```typescript
if (module.hot) {
  module.hot.accept(() => {
    console.log('Hot updated: store');
  });
}
```

## 持久化

由于 taro 的规则限制（ https://github.com/NervJS/taro/issues/6548 ），支持持久化比较麻烦，需要处理两个点

1. 入口的 children 使用匿名函数

```diff
import { FocaProvider } from 'foca';

class App extends Component {
  render() {
-   return this.props.children;
+   return <FocaProvider>{() => this.props.children}</FocaProvider>
  }
}
```

2. 路由`首页`和`分享页`增加高阶组件拦截

```diff
import { persistInterceptor } from 'foca-taro-storage';

- export default Index;
+ export default persistInterceptor(Index);
```
