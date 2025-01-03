import React from "react";
import { useAppContext } from "../contexts/AppContext";
import "./skills.css";

// this is a line

export const Skills = () => {
  const { text } = useAppContext();
  return (
    <section id="skills" className="skills-container py-2 md:py-8">
      <h2 className="heading">{text.skills}</h2>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">{text.mockupWebsiteUrl}</div>
        </div>
        <div className="bg-base-200 flex justify-center px-10 py-16">
          <div className="skills-row flex-col md:flex-row">
            <div className="">
              <h3 className="subheading text-primary">JavaScript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus magnam officiis commodi, ipsa, sequi rem consectetur
                veritatis a expedita autem doloremque? Incidunt delectus quos
                eligendi debitis eaque aut. Ad, repellat.
              </p>
            </div>
            <div className="">
              <h3 className="subheading text-primary">React</h3>
              <p>
                React is a powerful JavaScript library for building user
                interfaces, particularly single-page applications. I love it
                because of its component-based architecture, which makes code
                reusable, modular, and easier to maintain.
              </p>
            </div>
            <div className="">
              <h3 className="subheading text-primary">Node.JS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus magnam officiis commodi, ipsa, sequi rem consectetur
                veritatis a expedita autem doloremque? Incidunt delectus quos
                eligendi debitis eaque aut. Ad, repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
