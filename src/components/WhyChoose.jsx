import { Link } from 'react-router-dom'
import './WhyChoose.css'

const features = [
    {
        id: 1,
        icon: '🔬',
        title: 'Advanced Microencapsulation',
        description: 'Benefit from our proprietary microencapsulation technology, offering precise control over particle size and enhanced stability for your ingredient applications.'
    },
    {
        id: 2,
        icon: '👥',
        title: 'R&D Excellence',
        description: 'Access our dedicated research team committed to continuous innovation and developing tailored solutions specifically designed for your unique manufacturing requirements.'
    },
    {
        id: 3,
        icon: '⚙️',
        title: 'Scalable Manufacturing',
        description: 'Scale confidently from pilot batches to full production volumes while maintaining consistent quality, performance, and regulatory compliance throughout the process.'
    },
    {
        id: 4,
        icon: '🤝',
        title: 'Technical Partnership',
        description: 'Experience true partnership with our collaborative team that works alongside you to overcome complex formulation challenges and achieve your strategic objectives.'
    }
]

export default function WhyChoose() {
    return (
        <>
            <section className="why-choose">
                <div className="why-choose-container">
                    <h2 className="why-choose-title">Why Choose Us</h2>
                    <p className="why-choose-description">
                        Kapzo Bioactives stands out for our comprehensive technical expertise, precise formulation knowledge, and partnership-driven approach. We are committed to ensuring your bioactive ingredient decisions are well-informed, innovative, and successful.
                    </p>

                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div key={feature.id} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                                {index < features.length - 1 && <div className="feature-divider"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">Ready to Innovate Together?</h2>
                    <p className="cta-subtitle">
                        Partner with our R&D team to develop custom solutions for your manufacturing needs.
                    </p>

                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-cta-primary">Schedule Consultation</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
