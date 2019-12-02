import React from 'react';
import Gods from '../img/gods.jpg';
import Nyhed2 from '../img/nyhed2.png';
import Nyhed3 from '../img/nyhed3.png';
import Nyhed4 from '../img/nyhed4.png'


const Nyheder = () => {
return (
<div className="nyhed">
    <div className="nyhedswrap">
        <img className="gods" src={Gods} alt="nyhed" />
        <div className="textwrap">
            <h1 className="overskrift">Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h1>
            <p className="underrubrik">Verdensballetten planlægger at komme igen næste år </p>
            <p className="dato">lørdag d. 11. juli 2020</p>
            <p className="link">Læs mere her</p>
        </div>
      
    </div>
    <div className="nyhedsliste">
        <div className="nydhedsbox">
            <img src={Nyhed2} alt="" />
            <h2>Køb vores hampeprodukter</h2>
            <p>
                På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er
                dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..
            </p>
            <p className="link">Køb online her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Nyhed3} alt="" />
            <h2>Verdensballetten 2019</h2>
            <p>
                Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange
                tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition
                på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods
            </p>
            <p className="link">Se mere her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Nyhed4} alt="" />
            <h2>Historien om Møllerup Gods</h2>
            <p>
                Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup
                var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden
                side af voldgraven. </p>
            <p className="link">Læs historien her</p>
        </div>
    </div>

</div>
);
}

export default Nyheder;