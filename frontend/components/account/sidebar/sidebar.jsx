import React from 'react';

const TABS = [
  { name: "Account overview", iconClass: "home" },
  { name: "Premium for Family", iconClass: "trophy" },
  { name: "Edit profile", iconClass: "pencil" },
  { name: "Change password", iconClass: "lock" },
  { name: "Notification settings", iconClass: "bell" },
  { name: "Offline devices", iconClass: "wifi" },
  { name: "Recover playlists", iconClass: "repeat" },
  { name: "Subscription", iconClass: "credit-card" },
  { name: "Receipts", iconClass: "clock-o" },
  { name: "Apps", iconClass: "puzzle-piece" },
  { name: "Redeem", iconClass: "trophy" }
];

class Sidebar extends React.Component {
  constructor() {
    super();
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      selected: 0
    }
  }

  selectTab(idx) {
    this.setState({ selected: idx });
  }

  render() {
    const { selected } = this.state;
    const sidebarTabs = TABS.map((t, i) => (
      <li
        key={i}
        className={`account-sidebar-li ${i == selected ? "selected-li" : ""}`}
        onClick={e => this.selectTab(i)}>
        <div className="highlighter"></div>
        <i className={`fa fa-lg fa-${t.iconClass}`}></i> {t.name}
      </li>
    ));

    return (
      <section className="account-sidebar">
        <div className="account-sidebar-img">
          <i className="fa fa-4x fa-user-circle-o"></i>
        </div>
        <ul className="account-sidebar-list">{sidebarTabs}</ul>
      </section>
    )
  }
}

export default Sidebar;
