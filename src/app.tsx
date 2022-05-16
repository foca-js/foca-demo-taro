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
    return <FocaProvider>{this.props.children}</FocaProvider>;
  }
}

export default App;
