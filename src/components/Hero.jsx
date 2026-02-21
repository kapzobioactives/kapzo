import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div
                className="hero-background"
                style={{
                    backgroundImage: 'url(/assets/HomeBG.png)'
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Smart Ingredient Solutions for Modern Manufacturing</h1>
                    <p className="hero-subtitle">
                        From encapsulated actives to functional bioactives, we help manufacturers improve product stability, efficiency, and performance at scale.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-secondary">Contact R&D Team</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
