import { Link } from 'react-router-dom'
import './ProductCategories.css'

const products = [
    {
        id: 1,
        icon: '📦',
        title: 'Encapsulated Flavours & Actives',
        description: 'Advanced microencapsulation for flavor protection and controlled release.'
    },
    {
        id: 2,
        icon: '⚙️',
        title: 'Controlled Release Systems',
        description: 'Precision-engineered delivery systems for optimal bioavailability.'
    },
    {
        id: 3,
        icon: '🌿',
        title: 'Plant-Based Bioactives',
        description: 'Natural extracts and phytochemicals for functional applications.'
    },
    {
        id: 4,
        icon: '💧',
        title: 'Functional Lipids & Extracts',
        description: 'Specialized lipid formulations for enhanced performance.'
    },
    {
        id: 5,
        icon: '✨',
        title: 'Cosmetic & Personal Care Actives',
        description: 'Encapsulated ingredients for beauty and personal care products.'
    },
    {
        id: 6,
        icon: '🔬',
        title: 'Custom Formulation Solutions',
        description: 'Tailored ingredient systems designed for your specific needs.'
    }
]

export default function ProductCategories() {
    return (
        <section className="product-categories">
            <div className="product-container">
                <h2 className="product-title">Product Categories</h2>
                <p className="product-subtitle">
                    Comprehensive ingredient solutions engineered for performance and stability.
                </p>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-icon">{product.icon}</div>
                            <h3 className="product-card-title">{product.title}</h3>
                            <p className="product-card-description">{product.description}</p>
                        </div>
                    ))}
                </div>

                <Link to="/products" className="btn btn-explore">
                    Explore All Products
                    <span className="btn-arrow">→</span>
                </Link>
            </div>
        </section>
    )
}
