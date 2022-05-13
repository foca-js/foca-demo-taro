import { Component } from 'react';
import { persistInterceptor } from 'foca-taro-storage';
import { View } from '@tarojs/components';
import './index.css';
import Counter from './counter';

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Counter />
      </View>
    );
  }
}

/**
 * 设置了持久化时，首页和分享给用户的页面都需要使用persistInterceptor高阶组件
 * @link https://github.com/foca-js/foca-taro-storage#%E8%B7%AF%E7%94%B1
 */
export default persistInterceptor(Index);
