# 注意点

## 热更新

需要在 `store.ts` 文件中插入相关代码，否则在修改模型的时候，会造成 app.tsx 也跟着热更从而影响整体体验

```typescript
if (module.hot) {
  module.hot.accept();
}
```
