import { Component } from 'react';
import { View } from '@tarojs/components';
import './index.css';
import Counter from './counter';

export default class Index extends Component {
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
