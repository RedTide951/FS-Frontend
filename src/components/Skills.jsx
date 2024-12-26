import React, { Component } from "react";
import "./skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h2 className="heading">Skills</h2>
        <div className="skills-row">
          <div className="card">
            <h3 className="subheading">JavaScript</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam officiis commodi, ipsa, sequi rem consectetur veritatis a
              expedita autem doloremque? Incidunt delectus quos eligendi debitis
              eaque aut. Ad, repellat.
            </p>
          </div>
          <div className="card">
            <h3 className="subheading">React</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam officiis commodi, ipsa, sequi rem consectetur veritatis a
              expedita autem doloremque? Incidunt delectus quos eligendi debitis
              eaque aut. Ad, repellat.
            </p>
          </div>
          <div className="card">
            <h3 className="subheading">Node.js</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam officiis commodi, ipsa, sequi rem consectetur veritatis a
              expedita autem doloremque? Incidunt delectus quos eligendi debitis
              eaque aut. Ad, repellat.
            </p>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Skills;
