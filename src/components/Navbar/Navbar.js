import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar-dark  navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#">Leave Apply 🍹</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/home'>Home <span className="sr-only">(current)</span></Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/admin'>admin <span className="sr-only">(current)</span></Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>

                    </li>

                </ul>
            </div>
        </nav>
    )
}
export default  Navbar