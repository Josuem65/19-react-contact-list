import React from "react"
import Users from "./Users.json"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
console.log(Users)
function Home() {
  return (
    <div className="listContainer">
      {Users.map((user) => (
        // query id
        <Link to={"/contact/" + user.id}> 
        <div key={user.id} className="listItem">
          <img className="thumbnail" src={user.picture.thumbnail} />
          {user.name.first} {user.name.last}
        </div>
        </Link>
      ))}
    </div>
  )
}
export default Home

