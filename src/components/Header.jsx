import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-section">
                    <Link to="/">
                        <img src="/assets/logo-2.PNG" alt="Kapzo Bioactives" className="logo-image" />
                    </Link>
                </div>

                <nav className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/industries" className="nav-link">Industries</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                <div className="logo-text-section">
                    <Link to="/" className="logo-text">Kapzo Bioactives</Link>
                </div>
            </div>
        </header>
    )
}
