


import React, { useState } from "react";
import Form from "../components/form"; 

const sponsors = [
    { name: "Aase og Ejnar Danielsens Fond", link: "#" },
    { name: "Alaska ApS", link: "#" },
    { name: "Beauty Tan / MEDDO Solcentre", link: "#" },
    { name: "Billigkoste.dk/Kappers Agentur", link: "#" },
    { name: "BXP Advokater", link: "#" },
    { name: "Bygma Fonden", link: "#" },
    { name: "EKJ Rådgivende Ingeniører AS", link: "#" },
    { name: "Falck Formco A/S", link: "#" },
    { name: "FARUSA emballage a/s", link: "#" },
    { name: "Jakodan A/S", link: "#" },
];

const Sponsor = () => {
    const [formData, setFormData] = useState({ name: "", email: "", amount: "" });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit sponsor data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sponsor Data:", formData);
        alert("Tak for din støtte!");
    };

    return (
        <>
        
        <section className="sponsor-container">
            
            <div className="sponsor-info">
                <h2>Om Firmasponsoret</h2>
                <p>
                    Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, 
                    har vi opdelt støttemulighederne i 3 kategorier:
                </p>
            </div>

            
            <div className="sponsor-types">
                <div className="sponsor-category">
                    <h3>Børnesponsorat</h3>
                    <p>
                        Støt et navngivet barn med <strong>kr. 4.000,-</strong> for et ophold inklusive transport, forplejning, forsikring og udflugter.
                    </p>
                </div>
                <div className="sponsor-category">
                    <h3>Lejrsponsorat</h3>
                    <p>
                        Støt lejren med <strong>kr. 2.000,-</strong>, og hjælp med at dække alle driftsomkostninger samt specialpersonale.
                    </p>
                </div>
                <div className="sponsor-category">
                    <h3>Støtte til foreningen</h3>
                    <p>
                        Bliv diplomsponsor med et minimumsbidrag på <strong>kr. 1.000,-</strong> for at modtage et trykt diplom til ophængning.
                    </p>
                </div>
            </div>

            
            <section className="sponsors-container">
                <h2 className="sponsors-heading">Tak til vores sponsorer</h2>
                <div className="sponsors-grid">
                    {sponsors.map((sponsor, index) => (
                        <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-card">
                            {sponsor.name}
                        </a>
                    ))}
                </div>
            </section>

            
            <div className="sponsor-form">
              
                <Form/>
            </div>
        </section>
        
        </>
    );
};

export default Sponsor;

