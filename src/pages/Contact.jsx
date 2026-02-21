import { useEffect } from 'react'
import './Contact.css'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const cofounders = [
        {
            id: 1,
            name: 'Dr. Arun Kasturi',
            title: 'Co-Founder',
            qualification: 'MBBS',
            phone: '6383981422',
            email: 'arun@kapzobioactives.com'
        },
        {
            id: 2,
            name: 'Kishore Kasturi',
            title: 'Co-Founder',
            qualification: 'B.Tech, IIT BHU',
            phone: '7993575899',
            email: 'kishorekasturi28@gmail.com'
        }
    ]

    return (
        <div className="contact-page">
            {/* Cofounders Section */}
            <section className="cofounders-section">
                <div className="cofounders-container">
                    <h2 className="cofounders-title">Meet Our Co-Founders</h2>
                    <p className="cofounders-subtitle">
                        Experienced professionals dedicated to advancing bioactive ingredient solutions
                    </p>

                    <div className="cofounders-grid">
                        {cofounders.map((cofounder) => (
                            <div key={cofounder.id} className="cofounder-card">
                                <div className="cofounder-info">
                                    <h3 className="cofounder-name">{cofounder.name}</h3>
                                    <p className="cofounder-title">{cofounder.title}</p>
                                    <p className="cofounder-qualification">{cofounder.qualification}</p>
                                </div>

                                <div className="cofounder-contact">
                                    <a href={`mailto:${cofounder.email}`} className="contact-link">
                                        <span className="link-icon">✉</span>
                                        {cofounder.email}
                                    </a>
                                    <a href={`tel:${cofounder.phone}`} className="contact-link">
                                        <span className="link-icon">📞</span>
                                        {cofounder.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
