
/*import React, { useState } from "react";

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
                        Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et navngivet barns ophold 
                        og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til lejr, men vi har fastsat en 
                        gennemsnitspris på <strong>kr. 4.000,-</strong> pr. barn for et ophold.
                    </p>
                </div>
                <div className="sponsor-category">
                    <h3>Lejrsponsorat</h3>
                    <p>
                        For <strong>kr. 2.000,-</strong> kan virksomheden blive lejrsponsor og være med til at dække alle omkostningerne 
                        ved børnelejren, inklusiv ejendommens drifts- og vedligeholdelsesomkostninger.
                    </p>
                </div>
                <div className="sponsor-category">
                    <h3>Støtte til foreningen</h3>
                    <p>
                        Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge at blive 
                        diplomsponsorer. Minimum <strong>kr. 1.000,-</strong> for at modtage et trykt diplom til virksomheden.
                    </p>
                </div>
            </div>

            
            <div className="sponsor-form">
                <h2>Bliv Sponsor</h2>
                <p>Vil din virksomhed gi' en hånd med? Udfyld formularen for at støtte Børnelejren på Langeland.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Dit navn" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Din email" onChange={handleChange} required />
                    <input type="number" name="amount" placeholder="Donationsbeløb (kr.)" onChange={handleChange} required />
                    <button type="submit">Send Sponsorat</button>
                </form>
            </div>

            
            <div className="sponsor-benefits">
                <h2>Hvad får virksomhederne?</h2>
                <p>
                    Den vigtigste belønning er at give børn en uforglemmelig oplevelse. Virksomheder, der støtter med 
                    <strong>kr. 2.000,- eller derover</strong>, modtager et trykt diplom og et internetdiplom.
                </p>
                <p>
                    Alle virksomheder, der støtter med <strong>kr. 1.000,-</strong>, modtager et trykt diplom til ophængning.
                </p>
                <p>
                    Bestil vores lille folder på <strong>tlf. 38711260</strong> eller via mail på <strong>info@lejren.dk</strong>.
                </p>
            </div>
        </section>
    );
};

export default Sponsor;*/


import React, { useState } from "react";

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
            {/* Section 1: Om Firmasponsoret */}
            <div className="sponsor-info">
                <h2>Om Firmasponsoret</h2>
                <p>
                    Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, 
                    har vi opdelt støttemulighederne i 3 kategorier:
                </p>
            </div>

            {/* Section 2: Sponsor Categories */}
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

            {/* Section 3: Sponsors Section */}
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

            {/* Section 4: Sponsor Form */}
            <div className="sponsor-form">
                <h2>Bliv Sponsor</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Dit navn" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Din email" onChange={handleChange} required />
                    <input type="number" name="amount" placeholder="Donationsbeløb (kr.)" onChange={handleChange} required />
                    <button type="submit">Send Sponsorat</button>
                </form>
            </div>
        </section>
        
        </>
    );
};

export default Sponsor;

