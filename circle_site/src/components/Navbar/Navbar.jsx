import { NavLink } from "react-router-dom"
import { useState } from "react"

function Navbar({ user }) {
    const [display, setDisplay] = useState(true)

    const toggleNav = () => {
        setDisplay(!display);
    };

    return (
        <div className={`navbar ${display ? "open" : "close"}`}>
            <button className={`close-button ${display ? "open-slide" : "close-slide"}`} onClick={toggleNav}>
                <i style={{ color: "white" }} className={`${display ? "fa-solid fa-chevron-left" : "fa-solid fa-chevron-right"}`}></i>
            </button>
            {display &&
                <div>
                    <div className="user-profile">
                        <img src={user.pfp} alt="userPfp" />
                        <p>Welcome, {user.firstName}</p>
                    </div>
                    <div className="navlinks">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink exact to="/announcements">Announcements</NavLink>
                        <NavLink exact to="/calendar">Calendar</NavLink>
                        <NavLink exact to="/music">Music</NavLink>
                        <NavLink exact to="/media">Media</NavLink>
                        <NavLink exact to="/discussions">Discussions</NavLink>
                        <NavLink exact to="/board">Board</NavLink>
                        <NavLink exact to="/settings">Settings</NavLink>
                        <button>Log Out</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar
