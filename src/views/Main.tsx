import React from 'react';

import Section from '../components/Section';
import Illustration from '../components/Illustration';
import Screenshot from '../components/Screenshot';

import Kassa from '../images/screens/kassa.png';
import KassaIOS from '../images/screens/kassa-ios.png';
import KassaBO from '../images/screens/kassa-bo.png';
import PH from '../images/screens/ph.png';
import Wappuradio from '../images/screens/wappuradio.png';
import Ilmio from '../images/screens/ilmio.png';
import KassaFlyerEtu from '../images/screens/kassa-flyer-etu.png';
import KassaFlyerAuki from '../images/screens/kassa-flyer.png';
import KassaFlyerTaka from '../images/screens/kassa-flyer-taka.png';
import COFFlyer from '../images/screens/cof-flyer.png';
import PHFlyer from '../images/screens/ph-flyer.png';

import IllustrationKassa from '../images/illustrations/kassa.svg';
import IllustrationPaketti from '../images/illustrations/paketti.svg';
import IllustrationAspa from '../images/illustrations/aspa.svg';
import IllustrationStartti from '../images/illustrations/startti.svg';
import IllustrationSuper from '../images/illustrations/super.svg';
import IllustrationLasku from '../images/illustrations/lasku.svg';

const Main: React.FC = () =>
  <main className='main-container'>
    <Section.Container>
      <Section.Text>
        <h1>Moi!</h1>
        <p className='lead'>Olen Noora, <strong>UI/UX-suunnittelija</strong> Tampereelta. Suunnittelen ja toteutan selkeitä, käytännöllisiä ja ilahduttavia käyttöliittymiä.</p>
      </Section.Text>
    </Section.Container>
    <Section.Container>
      <Section.Text>
        <h2>Innostun asiakas&shy;kokemuksen kaikista vaiheista</h2>
        <p>Interaktiosuunnittelu on lähinnä sydäntäni, mutta nautin myös esimerkiksi brändi-identiteettien soveltamisesta osaksi käytettäviä ja saavutettavia verkkosisältöjä.</p>
      </Section.Text>
      <Section.Projects>
        <Screenshot
          type='mobile'
          src={PH}
          alt='Payment Highway -verkkosivusto'
          link={{ pdf: 'payment-highway-web', label: 'Katso PDF' }} />
        <Screenshot
          type='tablet'
          src={Kassa}
          alt='OP Kassa -verkkosivusto'
          link={{ href: 'https://op-kassa.fi', label: 'Online' }} />
        <Screenshot
          type='tablet'
          src={Wappuradio}
          alt='Rakkauden Wappuradio -verkkosivusto'
          link={{ href: 'https://github.com/wappuradio/webbi2019', label: 'Löytyy GitHubista' }} />
      </Section.Projects>
    </Section.Container>
    <Section.Container>
      <Section.Text>
        <h3>Haluan suunnittella ensisijassa käyttäjälle</h3>
        <p>Tahdon valintojeni pohjautuvan mutun sijasta tietoon, ja tutustunkin käyttäjiin mielelläni esimerkiksi laadullisen tutkimuksen keinoin.</p>
        <p>Ymmärrän kuitenkin myös eri sidosryhmien tärkeyden, enkä pelkää selvittää tapoja vastata mahdollisimman kattavasti vaihteleviin tarpeisiin.</p>
      </Section.Text>
      <Section.Projects size='sm'>
        <Screenshot
          type='tablet'
          src={KassaIOS}
          alt='OP Kassan iPad-sovellus'
          link={{ pdf: 'kassa-ios', label: 'Katso PDF' }} />
        <Screenshot
          type='laptop'
          src={KassaBO}
          alt='OP Kassan selainkäyttöliittymä'
          link={{ pdf: 'kassa-bo', label: 'Katso PDF' }} />
      </Section.Projects>
    </Section.Container>
    <Section.Container>
      <Section.Text>
        <h3>Välitän sisällöstä</h3>
        <p>Kauniit käyttöliittymät ja nätit taitot miellyttävät silmää, mutta minulle tärkeintä on se, että ne välittävät viestin oikein. En halua visuaalisuuden menevän käytettävyyden edelle, vaan tukevan sitä. Kuvituskuvat tulevat vastaan silloin, kun sanat eivät riitä.</p>
      </Section.Text>
      <Illustration.Container>
        <Illustration.Group src={[IllustrationPaketti, IllustrationAspa]} size='md' />
        <Illustration.Group src={[IllustrationKassa]} size='lg' />
        <Illustration.Group src={[IllustrationStartti, IllustrationSuper, IllustrationLasku]} size='sm' />
      </Illustration.Container>
      <Section.Projects size='sm'>
        <Screenshot
          type='flyercover'
          src={COFFlyer}
          alt='Checkout-flyer'
          link={{ pdf: 'checkout-flyer', label: 'Katso PDF' }} />
        <Screenshot type='flyercover'
          src={PHFlyer}
          alt='Payment Highway -flyer'
          link={{ pdf: 'payment-highway-flyer', label: 'Katso PDF' }} />
        <Screenshot type='magazine'
          src={Ilmio}
          alt='Suomi-ilmiö-lehti'
          link={{ pdf: 'ilmio', label: 'Katso PDF' }} />
        <Screenshot type='flyercover'
          src={KassaFlyerEtu}
          alt='OP Kassa -flyer, etukansi'
          link={{ pdf: 'kassa-flyer', label: 'Katso PDF' }} />
        <Screenshot type='flyeropen'
          src={KassaFlyerAuki}
          alt='OP Kassa -flyer' />
        <Screenshot type='flyercover'
          src={KassaFlyerTaka}
          alt='OP Kassa -flyer,' />
      </Section.Projects>
    </Section.Container>
  </main>;

export default Main;
