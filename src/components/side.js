import React from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"
import linked from "../images/linked.svg"
import twitter from "../images/twitter.svg"
import git from "../images/git.svg"

const social = {
  width: 50,
  marginRight: "5px",
}

export default function side() {
  return (
    <div>
      <p>Dummy Heading</p>
      <img src={linked} style={social} />
      <img src={twitter} style={social} />
      <img src={git} style={social} />
      <ul>
        <li>
          <Link to="/">About </Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/resume"> Resume</Link>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  )
}
