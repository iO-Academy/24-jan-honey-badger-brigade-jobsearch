import { NavLink } from "react-router-dom"
import HomePage from "../HomePage"

function NavMenu() {
    return (
        <>
            <nav className="">
                <a href="#">JobSearch</a>
                <span>
                    <a href="#">All Jobs</a>
                    <a href="#">Full time</a>
                    <a href="#">Part time</a>
                    <a href="#">Contract</a>
                </span>
                <a href="#">Post a Job</a>

            </nav>
        </>
    )

}

export default NavMenu