import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const products = [
    {
        id: 1,
        icon: '📦',
        title: 'Encapsulated Flavours & Actives',
        description: 'Advanced microencapsulation for flavor protection and controlled release.',
        details: 'Our microencapsulation technology utilizes spray-drying and coacervation methods to protect volatile flavorings and sensitive bioactive compounds from oxidation, moisture, and thermal degradation. Encapsulation particle sizes range from 5-100 micrometers, providing optimal sensory release and stability. Applications include flavor protection in beverages (>2 years shelf-life), vitamin stabilization in dry mixes, and protection of essential oils in food products. Delivers 3-5x improvement in flavor retention versus unencapsulated ingredients. Compliant with food regulations (EU/FDA) and suitable for clean-label applications.'
    },
    {
        id: 2,
        icon: '⚙️',
        title: 'Controlled Release Systems',
        description: 'Precision-engineered delivery systems for optimal bioavailability.',
        details: 'Our pH-triggered and enzyme-triggered release systems are engineered to deliver active ingredients at specific locations in the gastrointestinal tract. Stomach-resistant coating protects sensitive probiotics and plant extracts from gastric acid, ensuring delivery to the small intestine where absorption is optimal. Time-release formulations provide sustained delivery over 4-12 hours with bioavailability improvement of 40-70% compared to conventional delivery. Microsphere technology with polymer matrices ensures consistent performance across batch variations. Validated through in-vitro dissolution testing and in-vivo bioavailability studies, suitable for both dietary supplements and pharmaceutical applications.'
    },
    {
        id: 3,
        icon: '🌿',
        title: 'Plant-Based Bioactives',
        description: 'Natural extracts and phytochemicals for functional applications.',
        details: 'Premium plant-based bioactives sourced from sustainable suppliers with full traceability and organic certifications where applicable. Our extract portfolio includes standardized concentrations (minimum 70-95% active compounds) for consistent efficacy. Extracts undergo rigorous quality testing including HPLC verification, microbiological testing (USP standards), and heavy metal screening. Applications include herbal extracts (turmeric 95% curcuminoids, green tea 60% polyphenols), mushroom extracts (standardized beta-glucans), and botanical activators. All products comply with FDA and European regulations. Shelf-life stability verified for 36+ months under accelerated storage conditions.'
    },
    {
        id: 4,
        icon: '💧',
        title: 'Functional Lipids & Extracts',
        description: 'Specialized lipid formulations for enhanced performance.',
        details: 'Formulated using food-grade vegetable oils, MCT oils, and specialized lipid matrices that enhance bioavailability of fat-soluble vitamins (A, D, E, K) and lipophilic actives. Our lipid delivery systems improve absorption by 2-3x for vitamin D and support omega-3 stability against oxidation. Includes emulsifiers and antioxidant systems optimized for beverage and functional food applications. Oxidative stability (TOTOX value) maintained below 10 for 24+ months. Suitable for emulsion-based beverages, dressings, and solid formulations. Expertise in microemulsion technology for enhanced sensory and bioavailability profiles.'
    },
    {
        id: 5,
        icon: '✨',
        title: 'Cosmetic & Personal Care Actives',
        description: 'Encapsulated ingredients for beauty and personal care products.',
        details: 'Specialized beauty actives including encapsulated Vitamin C (6-8% stability improvement), plant-derived peptides, hyaluronic acid derivatives, and botanical extracts optimized for skin penetration. Our formulations are compatible with common cosmetic matrices (emulsions, serums, creams) and maintain efficacy throughout product shelf-life (minimum 24 months). All ingredients are dermatologically tested, hypoallergenic, and comply with ISO 16128 (natural and organic cosmetics) standards. Innovative delivery systems enable deeper skin penetration while maintaining gentleness. Products suitable for sensitive skin applications and include comprehensive technical data sheets for stability and performance.'
    },
    {
        id: 6,
        icon: '🔬',
        title: 'Custom Formulation Solutions',
        description: 'Tailored ingredient systems designed for your specific needs.',
        details: 'Full-service custom formulation development with dedicated technical teams providing expertise in encapsulation technology, delivery system design, and regulatory compliance. Our process includes feasibility assessment, prototype development (typically 2-4 iterations), stability testing (accelerated aging per ICH guidelines), and scale-up support. Average development timeline is 8-12 weeks from concept to commercial-ready formulation. We conduct comprehensive stability studies, compatibility testing with your existing ingredients, and support SOP documentation. Quality assurance includes batch testing, lot-to-lot consistency verification, and documentation for regulatory submissions (FDA, EU, local authorities). Intellectual property protection available through confidentiality agreements.'
    }
]

export default function Products() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="products-hero-content">
                    <h1 className="products-hero-title">Our Product Categories</h1>
                    <p className="products-hero-subtitle">
                        Comprehensive ingredient solutions engineered for performance, stability, and reliability
                    </p>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="products-section">
                <div className="products-container">
                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-card-icon">{product.icon}</div>
                                <h3 className="product-card-title">{product.title}</h3>
                                <p className="product-card-description">{product.description}</p>
                                <p className="product-card-details">{product.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="products-cta">
                <div className="products-cta-container">
                    <h2>Ready to Source Premium Ingredients?</h2>
                    <p>Let's discuss how our products can enhance your formulations</p>
                    <Link to="/contact" className="btn btn-cta">
                        Request Product Information
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
