import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
    return (
        <div className="about-page">
            {/* About Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">About Kapzo Bioactives</h1>
                    <p className="about-hero-subtitle">
                        Leading innovation in specialty ingredients and advanced encapsulation technologies
                    </p>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="who-we-are">
                <div className="who-we-are-container">
                    <h2 className="who-we-are-title">Who We Are</h2>

                    <div className="who-we-are-grid">
                        <div className="who-we-are-item">
                            <div className="item-number">01</div>
                            <h3>Core Identity</h3>
                            <p>
                                Kapzo Bioactives is a specialty ingredient and technology-driven company focused on developing high-performance functional ingredients and encapsulated systems for modern manufacturers.
                            </p>
                        </div>

                        <div className="who-we-are-item">
                            <div className="item-number">02</div>
                            <h3>Partnership Approach</h3>
                            <p>
                                We work closely with food, nutraceutical, personal care, and industrial brands to enhance product stability, improve performance, and deliver consistent results at scale.
                            </p>
                        </div>

                        <div className="who-we-are-item">
                            <div className="item-number">03</div>
                            <h3>Our Expertise</h3>
                            <p>
                                Our approach combines technical expertise with practical manufacturing insight — ensuring that every solution is commercially viable, scalable, and reliable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="mission-vision-container">
                    <div className="mission-vision-grid">
                        {/* Mission Card */}
                        <div className="mv-card mission-card">
                            <div className="mv-card-header">
                                <span className="mv-label">Our Mission</span>
                            </div>
                            <p className="mv-card-text">
                                To develop smart, performance-driven ingredient solutions that help manufacturers create better, more stable, and more efficient products.
                            </p>
                            <p className="mv-card-text">
                                We aim to simplify complex formulation challenges through thoughtful engineering, consistent quality, and long-term collaboration with our partners.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="mv-card vision-card">
                            <div className="mv-card-header">
                                <span className="mv-label">Our Vision</span>
                            </div>
                            <p className="mv-card-text">
                                To become a trusted global partner in advanced ingredient technologies — known for reliability, innovation, and manufacturing excellence.
                            </p>
                            <p className="mv-card-text">
                                We envision a future where ingredient systems are not just additives, but engineered solutions that improve performance, efficiency, and product value across industries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="about-cta">
                <div className="about-cta-container">
                    <h2>Ready to Transform Your Formulations?</h2>
                    <p>Let's collaborate to create ingredient solutions that drive your success</p>
                    <Link to="/contact" className="btn btn-cta">
                        Contact Our Team
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
