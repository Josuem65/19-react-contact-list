
import React from "react"
import Users from "./Users.json"
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom"
import "./Home.css"
Users
console.log(Users)
function Home() {
  return (
    <div className="listContainer">
      <h1>Contacts</h1>
      {Users.map((user) => (
        <div key={user.id} className="listItem">
        <Link to={"/contact/" + user.id}>
          <img className="contactThumbnail" src={user.picture.thumbnail} />
        </Link>
        <Link to={"/contact/" + user.id}>
          <span>{user.name.first} {user.name.last}</span>
        </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
