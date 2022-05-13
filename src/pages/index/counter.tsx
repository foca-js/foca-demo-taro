import { Button, View, Text } from '@tarojs/components';
import { useComputed, useModel } from 'foca';
import { FC, memo } from 'react';
import { counterModel } from '../../models/counterModel';

const Counter: FC = () => {
  const { count } = useModel(counterModel);
  const double = useComputed(counterModel.double);

  return (
    <View>
      <Text>{count}</Text>
      <View>
        <Button onClick={() => counterModel.plus(1)}>+1</Button>
        <Button onClick={() => counterModel.minus(1)}>-1</Button>
      </View>
      <Text>计算属性：{double}</Text>
    </View>
  );
};

export default memo(Counter);
