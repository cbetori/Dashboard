import React from "react";

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        NAV
        <ul>
          <li>Home</li>
          <li>Forms</li>
          <li>Reports</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
