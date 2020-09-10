// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styles from './style.css'
import Navbar from 'react-bootstrap/Navbar'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Robert Pan</Navbar.Brand>
        </Navbar>
        <div className={styles.test}>
          <h1 >Hello!</h1>
        </div>
        <img src="https://media1.tenor.com/images/89626c3be83744605c413c47161ffa72/tenor.gif?itemid=4569620" alt="loading..." />
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
