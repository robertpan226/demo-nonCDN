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
        <img src="https://d1vopzf7po8fvg.cloudfront.net/nyancat.gif" alt="loading..." />
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
