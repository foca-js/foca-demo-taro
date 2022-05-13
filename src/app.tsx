import './store';
import { Component } from 'react';
import { FocaProvider } from 'foca';
import './app.css';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    /**
     * 注意，设置了持久化时，需要这样写 () => this.props.children
     * @link https://github.com/foca-js/foca-taro-storage#%E8%B7%AF%E7%94%B1
     */
    return <FocaProvider>{() => this.props.children}</FocaProvider>;
  }
}

export default App;
