import React from 'react';
import PartnerLogo from '../img/LogoAutoriseretPartner1_srcset-large.png';
import Inst from '../img/instergram.JPG'



const Outro = () => {
return (
<div style={{display:"flex"}} className="outrowrap">
    <div className="outro">
        <img className="plogo" src={PartnerLogo} alt="ok" />
        <h2 style={{width:"46%", fontSize:"14px", color:"grey",margin:"1% 0 0 3%"}}>Møllerup Gods er autoriseret partner
            hos Danske Konferencecentre</h2>
        <img className="inst" src={Inst} alt="" />

    </div>

    <form action="#">

        <p>
            Tilmeld nyhedsbrev
        </p>

        <div className="span1">
            <span className="span">*</span> skal udfyldes
        </div>


        <div className="label">
            <label>
                Email Address 
            </label>
            <span className="span">*</span>
            <input type="email" name="EMAIL" className="input" />
        </div>
        <div className="label">
            <label>
                First Name
            </label>
            <input type="text" name="FNAME" className="input" />
        </div>

        <div className="label">

            <label>
                Efternavn
            </label>
            <input type="text" name="LNAME" className="input" />
        </div>
        <div>
            <strong>Vælg nyhedsbrev</strong>
            <ul>
                <li>
                    <input type="checkbox" className="input2" />
                    <label>
                        Møllerup - alle
                    </label>
                </li>
                <li>
                    <input type="checkbox" className="input2" />
                    <label>
                        Verdensballetten
                    </label>
                </li>
                <li>
                    <input type="checkbox" className="input2" />
                    <label>
                        Møllerup Hamp
                    </label>
                </li>
            </ul>
            <div>
                <input type="submit" value="Tilmeld" name="subscribe" />
            </div>
        </div>
    </form>
</div>
);
}

export default Outro;