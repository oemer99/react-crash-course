import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav>
        {/* Link ist dazu da um zu einer anderen Seite zu verlinken OHNE neu laden zu müssen, nicht wie bei a href="" */}
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users/ronald">Ronaldo</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/omsen">Ömsen</Link>

        </nav>
    )
}

export default Nav;