import React from 'react';
import AppStore from '../stores/AppStore';

function getAppState() {
  return {};
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
            <div className="row column">
              <br />
              // ADD NOTE FORM
            </div>
          </div>
          <div className="off-canvas-content" data-off-canvas-content>
            // NOTELIST
          </div>
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState());
  };
}

export default App;