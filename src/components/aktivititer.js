import React from 'react';
import Aktiv1 from '../img/aktiv1.jpg';
import Aktiv2 from '../img/aktiv2.jpg';
import Aktiv3 from '../img/aktiv3.jpg';
import Aktiv4 from '../img/aktiv4.jpg';
import Aktiv5 from '../img/aktiv5.jpg';
import Aktiv6 from '../img/aktiv6.jpg';
import Aktiv7 from '../img/aktiv7.png';
import Aktiv8 from '../img/aktiv8.jpg';
import Aktiv9 from '../img/aktiv9.jpg';


const Aktiviteter = () => {
return (

<div className="aktivitet">
    <h3>Møllerup Gods tilbyder en perlerække af muligheder
    </h3>
    <h4>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til
        loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</h4>
    <div className="nyhedsliste">
        <div className="nydhedsbox">
            <img src={Aktiv1} alt="" />
            <h2>Møllerup Hamp</h2>
            <p>
                På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.
                Køb produkter her
            </p>

        </div>
        <div className="nydhedsbox">
            <img src={Aktiv2} alt="" />
            <h2>Møder & events</h2>
            <p>
                Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.
            </p>
            <p className="link">Se mere her</p>
        </div>

        <div className="nydhedsbox">
            <img src={Aktiv3} alt="" />
            <h2>Fest på kroen</h2>
            <p>
                Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.
            </p>
            <p className="link">Se mere her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Aktiv4} alt="" />
            <h2>Rundvisninger</h2>
            <p>
                Der er kød og blod på historien, Læs mere om Marsk Stig & livet på Møllerup.

            </p>
            <p className="link">Køb bogen her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Aktiv5} alt="" />
            <h2>Møllerup jagt</h2>
            <p>
                Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.

            </p>
            <p className="link">Se mere her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Aktiv6} alt="" />
            <h2>Ferie for 40
            </h2>
            <p>
                Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool
            </p>
            <p className="link">Se mere her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Aktiv7} alt="" />
            <h2>Bolig på landet
            </h2>
            <p>
                Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.
            </p>
            <p className="link">Se mere her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Aktiv8} alt="" />
            <h2>Hestepension</h2>
            <p>
                Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.
            </p>
            <p className="link">Se mere her</p>
        </div>
        <div className="nydhedsbox">
            <img src={Aktiv9} alt="" />
            <h2>Verdensballetten</h2>
            <p>
                Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup.
            </p>
            <p className="link">Se mere her</p>
        </div>

    </div>

</div>
);
}

export default Aktiviteter;