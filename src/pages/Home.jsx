
import React from "react";

const Home = () => {
    return (
        <>
        <section className="hero">
           <div className="hero__imgcontainer">
            <img className="hero__img" src="Billeder/Fotos/57325198_2075682595883031_8842221344629194752_n.jpg" alt="pic" />
            </div >
          {/* <div className="hero__logoheading"><h1 className="hero__logoheading">VELKOMMEN</h1></div>} */}
        </section>

        <section className="welcome-container">
            <h1 className="welcome-heading">VELKOMMEN</h1>
            
            <div className="welcome-text">
<p>Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på det naturskønne Sydlangeland.</p>


<p>Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der er tvangsfjernet fra deres hjem og familie, børn der vokser op i meget fattige familier - vi kender nok alle sammen et barn, der tilhører en af disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>



<p>Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode oplevelse, som gerne skulle give dem det overskud, der skal til, for at komme helskindet gennem deres ofte lidt triste hverdag. Mange af dem knytter bånd og venskaber under lejrene, der gerne skulle give dem et nyt netværk til støtte i fremtiden.</p>

<p>Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård.</p>
</div>
        </section>
        </>
    );
};

export default Home;
