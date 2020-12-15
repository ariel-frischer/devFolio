import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
// const tsIcon = require("../../assets/images/tsIcon.png.png");

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills) => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          {/* <li className="software-skill-inline" name={"Typescript"}>
            <i className={"fab"}>
              <img src={skillsSection.tsIcon} style={{ width: 50, height: 50 }} alt="tsIcon" />
            </i>
            <p>{"Typescript"}</p>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
