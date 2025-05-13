
import React from "react";
import ImageSlider from "../components/ImageSlider";

const AboutUs = () => {
    return (
        <>
        < ImageSlider />
        <section className="about-container">
            <h1 className="about-heading">Om Børnelejren på Langeland</h1>
            

            
            <div className="about-section">
                <h2>1. Introduktion</h2>
                <p>Børnelejren på Langeland er en velgørende, non-profit forening, som afholder finansierede lejre for dårligt stillede børn og unge fra hele landet. Lejrene finder sted på Søgård Hovedgård, en smuk bondegård på sydspidsen af Langeland.</p>
                
            </div>

            
            <div className="about-section">
                <h2>2. Uafhængig Forening</h2>
                <p>Børnelejren er ikke tilknyttet nogen politiske eller religiøse organisationer. Foreningen drives primært af frivillige, der arbejder hårdt for at forbedre forholdene på Søgård Hovedgård.</p>
                
            </div>

           
            <div className="about-section">
                <h2>4. Økonomi</h2>
                <p>Foreningens bestyrelse og frivillige arbejder ulønnet. Støtten kommer fra virksomheder, fonde og private donationer. Ingen eksterne call-centre eller fundraising-firmaer arbejder for lejren.</p>
                
            </div>

            
            <div className="about-section">
                <h2>6. Ejendommen Søgård Hovedgård</h2>
                <p>Ejendommen består af flere bygninger, inkl. hovedhuset, handicapafdelingen og multihuset. Den har omkring 30.000 m² jord med have og skov.</p>
               
            </div>

            
            <div className="about-section">
                <h2>9. Anden Støtte End Penge</h2>
                <p>Foreningen modtager gerne naturaliesponsorater, der kan hjælpe med drift og vedligeholdelse. Brugte ting, så længe de fungerer, er velkomne.</p>
                
            </div>

            
            <div className="about-section">
                <h2>15. Bestyrelsens Medlemmer</h2>
                <ul>
                    <li><strong>Formand:</strong> Dina Reece, Ølsted</li>
                    <li><strong>Næstformand:</strong> Kenneth Pedersen, Tune</li>
                    <li><strong>Bestyrelsesmedlem:</strong> Lars Jacobsen, Dronningmølle</li>
                    <li><strong>Bestyrelsesmedlem:</strong> Karsten Sørensen, Kiel</li>
                    <li><strong>Bestyrelsessuppleant:</strong> Annie Gall, Virum</li>
                </ul>
            </div>
        </section>
        </>
    );
};

export default AboutUs;
