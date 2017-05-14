import React from 'react';
import Sidebar from './sidebar';
import Overview from './overview';

class Main extends React.Component {
  constructor() {
    super();
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      selected: 0
    };
  }

  selectTab(idx) {
    this.setState({ selected: idx });
  }

  render() {
    const { selected } = this.state;

    return (
      <section className="account-main">
        <Sidebar selected={selected} selectTab={this.selectTab} />
        <Overview />
      </section>
    );
  }
}

export default Main;
