
import React from "react";


const sponsors = [
    { year: 2025, name: "Aage og Johanne Louis-Hansens Fond", amount: "kr. 20.000" },
    { year: 2024, name: "Civilingeniør H.C. Bechgaard og hustru Ella Mary Bechgaards Fond", amount: "kr. 100.000" },
    { year: 2024, name: "Medarbejdernes Honorarfond i Novo Gruppen", amount: "kr. 25.000" },
    { year: 2024, name: "Otto Bruuns Fond", amount: "kr. 60.000" },
    { year: 2023, name: "Aage og Johanne Louis-Hansens Fond", amount: "kr. 20.000" },
    { year: 2023, name: "Medarbejdernes Honorarfond i Novo Gruppen", amount: "kr. 25.000" },
    { year: 2022, name: "Ingemann Graphics", amount: "kr. 10.000" },
    { year: 2021, name: "Otto Bruuns Fond", amount: "kr. 60.000" },
    { year: 2020, name: "Nykredits Fond", amount: "kr. 50.000 (Handicap facilities)" },
];

const Thanks = () => {
    return (
        <>
            
            
        <section className="thanks-container">
            <h1 className="thanks-heading">Tak til vores sponsorer</h1>
            <p className="thanks-subheading">Børnelejren på Langeland takker alle, der har støttet vores arbejde med at give børn et trygt ophold.</p>

            <div className="sponsors-list">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor-card">
                        <span className="sponsor-year">{sponsor.year}</span>
                        <p className="sponsor-name">{sponsor.name}</p>
                        <p className="sponsor-amount">{sponsor.amount}</p>
                    </div>
                ))}
            </div>
        </section>
            
        </>
    );
};

export default Thanks;
