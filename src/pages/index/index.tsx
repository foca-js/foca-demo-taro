import { Component } from 'react';
import { View } from '@tarojs/components';
import './index.css';
import Counter from './counter';

export default class Index extends Component {
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
