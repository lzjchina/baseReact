import React, { Component } from "react";
import { Link} from "react-router-dom"
import { Button } from "antd";

export class Home extends Component {
  render() {
    return (
      <div>
        <Button>123412</Button>
        <Link to="/test">test</Link>
      </div>
    );
  }
}

export default Home;
