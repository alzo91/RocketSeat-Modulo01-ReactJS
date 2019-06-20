import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './componentes/button/index';
import NewInput from './componentes/NewInput/index';

class App extends Component {
  state = { counter: 0 };

  handleLogin() {
    alert('Elaborar Login');
  }

  addInCounter = () => {
    let st = this.state;
    this.setState({ counter: st.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <h1>Modulo I - ReactJs</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '30px',
              flexDirection: 'column',
              flexDirection: 'column',
            }}
          >
            <NewInput name="Email" />
            <NewInput name="Password" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexDirection: 'column' }}>
            <Button onClick={this.handleLogin}>Login</Button>
            <Button onClick={this.addInCounter}>Somar Counter!</Button>
          </div>
          <div>
            <a>{this.state.counter}</a>
          </div>
        </div>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
