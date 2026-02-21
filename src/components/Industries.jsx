import { Link } from 'react-router-dom'
import './Industries.css'

const industries = [
    {
        id: 1,
        title: 'Food & Beverage',
        description: 'Flavor protection and nutritional enhancement'
    },
    {
        id: 2,
        title: 'Nutraceutical',
        description: 'Bioavailability and stability solutions'
    },
    {
        id: 3,
        title: 'Confectionery',
        description: 'Controlled release and texture innovation'
    },
    {
        id: 4,
        title: 'Cosmetics & Personal Care',
        description: 'Active ingredient delivery systems'
    },
    {
        id: 5,
        title: 'Food Fortification',
        description: 'Nutrient enrichment and bioavailability enhancement'
    },
    {
        id: 6,
        title: 'Pharmaceutical & Drug Delivery',
        description: 'Controlled-release therapeutic formulations'
    },
    {
        id: 7,
        title: 'Poultry Industry',
        description: 'Nutritional supplements and feed additives'
    }
]

export default function Industries() {
    return (
        <section className="industries">
            <div className="industries-container">
                <h2 className="industries-title">Industries We Serve</h2>
                <p className="industries-subtitle">
                    Delivering specialized solutions across diverse manufacturing sectors.
                </p>

                <div className="industries-grid">
                    {industries.map((industry) => (
                        <div key={industry.id} className="industry-card">
                            <h3 className="industry-card-title">{industry.title}</h3>
                            <p className="industry-card-description">{industry.description}</p>
                        </div>
                    ))}
                </div>

                <Link to="/industries" className="btn btn-industry">
                    View Industry Solutions
                    <span className="btn-arrow">→</span>
                </Link>
            </div>
        </section>
    )
}
