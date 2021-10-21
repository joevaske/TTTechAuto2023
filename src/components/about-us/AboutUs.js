import React from 'react';
import './AboutUs.scss';

const AboutUs = ({ aboutUsLinkData }) => {
  return (
    <div className='about-us'>
      <div className='about-us__heading'>
        <h2 className='about-us__heading__title'>
          Zapošljavamo 200 inženjera svih senioriteta
        </h2>
        <span className='page-title-decoration'></span>
      </div>
      <div className='about-us__content'>
        <p>
          Naš domen su embedded sistemi, a znanje i 30 godina iskustva nas je
          kvalifikovalo za razvoj onih najkompleksnijih, ugrađenih u automobile.
        </p>
        <h3>Softver u takvim sistemima</h3>
        <p>
          – sigurnosno kritičan, vremenski trigerovan, operativan u slučaju
          otkaza – <br />
          je naš posao, ekspertiza i strast.
        </p>
        <a
          className='button-blue'
          href={aboutUsLinkData.url}
          target='_blank'
          rel='noreferrer'
        >
          Pridruži nam se
        </a>
        <p>
          <strong>Autonomna vožnja je sledeća tehnološka revolucija</strong>,
          ponajviše zbog svog uticaja na bezbednost i kvalitet života. Pri tome
          je tehnološki toliko zahtevna da će postati osnova na kojoj će se
          graditi druge tehnologije, servisi i aplikacije. Zamislite svet u kome
          svako putovanje predstavlja dobitak vremena!
        </p>
        <p>
          Svi naši kijenti rade na problemima autonomne vožnje i računaju na
          našu pomoć pri rešavanju njenih najkompleksnijih elemenata - od urbane
          vožnje za BMW, preko potpune autonomije na autoputevima za AUDI, ili
          aplikacije za parkiranje za Hyundai i KIA - mi zajedno sa našim
          klijentima radimo na razvoju automobila koji će nas voziti u bliskoj
          budućnosti.
        </p>
        <p>
          <strong>
            Ovo je prilika da budete deo pionirskog razvoja koji će obeležiti i
            blisku i daleku budućnost.
          </strong>
        </p>
        {/*  <p>
          RT-RK je sistem koji već 30 godina radi na najizazovnijim temama iz
          oblasti razvoja kompleksnog sofvera koji radi u realnom vremenu, a
          trenutno na četiri lokacije u regionu – Novom Sadu, Beogradu, Banja
          Luci i Osijeku. Oblasti su razne a danas smo se uhvatili u koštac sa
          autonomnom vožnjom. U našem timu se već nalaze neki od najvećih
          sofverskih eksperata koje imamo u zemlji, ali mi volimo i sveže ideje
          i nove perspektive. Kod nas se mnogo uči ali se i mnogo napreduje. Ne
          volimo kad nas inženjeri napuštaju, ali svako ko je otišao iz RT-RK,
          otišao je kao bolji inženjer. Puno ulažemo u kontinuirani razvoj naših
          inženjera, kroz mentorski rad, obuke i kroz podršku akademskoj
          karijeri, ako za to postoji želja i volja.
        </p>
        <p>
          Sve što drugi nude, nudimo i mi. Naveli smo one stvari gde znamo da
          smo najbolji. To je ono što drugi nemaju.
        </p> */}
      </div>
    </div>
  );
};

export default AboutUs;
