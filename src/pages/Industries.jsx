import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Industries.css'

const industries = [
    {
        id: 1,
        title: 'Food & Beverage',
        description: 'Flavor protection and nutritional enhancement',
        details: 'Deliver stable, flavorful beverages and fortified foods with our microencapsulation solutions. Applications include flavor stability in shelf-stable beverages, protection of volatile aromatics in juices and energy drinks, vitamin fortification without oxidation, and enhanced taste masking in functional beverages. Our solutions prevent flavor degradation due to pH, temperature, and light exposure, extending shelf life while maintaining sensory quality. Key benefits: improved product shelf life, consistent flavor profile, enhanced nutritional value retention, and premium consumer experience.'
    },
    {
        id: 2,
        title: 'Nutraceutical',
        description: 'Bioavailability and stability solutions',
        details: 'Maximize nutrient absorption and shelf-life stability for premium supplement formulations. We specialize in encapsulating vitamins, minerals, probiotics, and herbal extracts to improve bioavailability and prevent nutrient degradation. Our controlled-release systems ensure optimal absorption in the gastrointestinal tract. Solutions address moisture sensitivity, oxidation, off-flavors, and bioavailability challenges. Benefits include higher efficacy claims, improved product stability, reduced unpleasant tastes, increased shelf life, and enhanced customer satisfaction and retention.'
    },
    {
        id: 3,
        title: 'Confectionery',
        description: 'Controlled release and texture innovation',
        details: 'Create innovative textures and flavor experiences with controlled-release technologies. From effervescent candies and long-lasting flavor beads to functional chewing gums and textured coatings, we deliver unique sensory experiences. Our solutions provide sustained flavor release, texture complexity, functional ingredient incorporation, and product differentiation. Solutions address flavor loss during manufacturing, ingredient compatibility issues, and texture consistency. Key advantages: premium product positioning, extended sensory appeal, functional ingredient visibility, and competitive market differentiation.'
    },
    {
        id: 4,
        title: 'Cosmetics & Personal Care',
        description: 'Active ingredient delivery systems',
        details: 'Enhance product efficacy with advanced delivery systems for skincare and haircare actives. Our encapsulation technology improves stability of sensitive actives like vitamins C and E, essential oils, herbal extracts, and botanical compounds. Solutions enable time-release of active ingredients for sustained efficacy, protection from degradation, and improved compatibility with base formulations. Applications include anti-aging serums, targeted treatment products, color cosmetics, and hair care formulations. Benefits: enhanced product claims, improved efficacy perception, extended shelf life, and reduced need for chemical preservatives.'
    },
    {
        id: 5,
        title: 'Food Fortification',
        description: 'Nutrient enrichment and bioavailability enhancement',
        details: 'Fortify staple foods with essential nutrients without compromising taste or texture. We provide solutions for fortifying rice, flour, cereals, oils, and condiments with micronutrients while maintaining product sensory and shelf-life stability. Our technology prevents nutrient-flavor interactions, maintains product integrity, and ensures consistent nutrient distribution. Applications include enriched staple grains, fortified cooking oils, nutrient-enhanced condiments, and functional food ingredients. Key benefits: improved public health impact, regulatory compliance, consistent nutrient levels, and zero sensory changes.'
    },
    {
        id: 6,
        title: 'Pharmaceutical & Drug Delivery',
        description: 'Controlled-release therapeutic formulations',
        details: 'Develop precise drug delivery systems for improved patient compliance and therapeutic efficacy. Our controlled-release technologies enable targeted delivery, sustained release over extended periods, and improved bioavailability of challenging APIs. Solutions address issues like poor solubility, GI irritation, taste masking, and variable absorption. Applications include oral tablets, capsules, and innovative delivery forms. Benefits: reduced dosing frequency, improved patient compliance, enhanced therapeutic outcomes, reduced side effects, and potential for patent protection through novel delivery.'
    },
    {
        id: 7,
        title: 'Poultry Industry',
        description: 'Nutritional supplements and feed additives',
        details: 'Enhance animal nutrition and health with bioavailable, stable feed additives. We provide specialized solutions for poultry feed fortification, probiotic delivery, vitamin and mineral supplementation, and functional ingredient incorporation. Our microencapsulation protects sensitive ingredients from stomach acid, improves absorption, and ensures uniform distribution in feed. Solutions address nutrient bioavailability, ingredient stability in feed processing, and performance optimization. Key benefits: improved bird health and productivity, enhanced feed efficiency, better growth rates, improved egg quality, reduced disease susceptibility, and optimized production economics.'
    }
]

export default function Industries() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="industries-page">
            {/* Hero Section */}
            <section className="industries-hero">
                <div className="industries-hero-content">
                    <h1 className="industries-hero-title">Industries We Serve</h1>
                    <p className="industries-hero-subtitle">
                        Delivering specialized solutions across diverse manufacturing sectors
                    </p>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section className="industries-section">
                <div className="industries-container">
                    <div className="industries-grid">
                        {industries.map((industry) => (
                            <div key={industry.id} className="industry-card">
                                <div className="industry-number">{String(industry.id).padStart(2, '0')}</div>
                                <h3 className="industry-card-title">{industry.title}</h3>
                                <p className="industry-card-description">{industry.description}</p>
                                <p className="industry-card-details">{industry.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="industries-cta">
                <div className="industries-cta-container">
                    <h2>Looking for Industry-Specific Solutions?</h2>
                    <p>Our technical team can develop customized ingredients for your industry</p>
                    <Link to="/contact" className="btn btn-cta">
                        Contact Our Specialists
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
