

import React from "react";

const Home = () => {
    return (
        <section className="hero">
            
            <div className="hero__background">
                <img className="hero__img" src="Billeder/Fotos/57325198_2075682595883031_8842221344629194752_n.jpg" alt="pic" />
            </div>

            
            <div className="welcome-card">
                <h1 className="welcome-heading">VELKOMMEN</h1>
                <p>Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på det naturskønne Sydlangeland.</p>

                <p>Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder desværre også i Danmark...</p>

                <p>Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode oplevelser...</p>
                
                <p>Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård.</p>
            </div>
        </section>
    );
};

export default Home;


