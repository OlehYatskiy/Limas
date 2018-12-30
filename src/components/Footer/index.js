import React, { Component } from 'react';
import { string } from "prop-types";
import classNames from "classnames";

import ContactElement from './ContactElement';
import ru from '../../data/ru';

import style from './index.less';
import addressMap from '../../img/background/map.png';

class Footer extends Component {

    render() {
      const { phoneSections, emailSections, time, address, dev } = ru.footer;

      const contactsWrapper = classNames(style.blockContacts, style.blockFloated);
      const phonesSectionWrapper = classNames(style.blockContactsPhone, style.blockFloated);
      const emailSectionWrapper = classNames(style.blockContactsEmail, style.blockFloated);
      const timeSectionWrapper = classNames(style.blockContacts, style.blockFloated);

        return (
            <footer className={style.block}>

              <div className={contactsWrapper}>
                <section className={phonesSectionWrapper}>
                  {
                    phoneSections.map((el, index) => {
                      return <ContactElement
                         outerClass={style.blockContactsMarginedBottom}
                         key={index}
                         index={index}
                         text={el.phone}
                         sub={el.sub}
                         />
                    })
                  }
                </section>
                <section className={emailSectionWrapper}>
                  {
                    emailSections.map((el, index) => {
                      return <ContactElement
                        outerClass={style.blockContactsMarginedBottom}
                        key={index}
                        index={index}
                        text={el.email}
                        sub={el.sub}
                        />
                    })
                  }
                </section>
                <ContactElement outerClass={style.blockContactsAddress} text={address}/>
              </div>

              <section className={timeSectionWrapper}>
                <ContactElement text={time} outerClass={style.blockTime} />
                <img className={style.blockTimeImg} src={addressMap} alt={'map'} />
              </section>

              <section className={style.blockDev}>
                <h3>
                  {dev.info}
                  <span className={style.blockDevStudio}>
                    {dev.studio}
                  </span>
                </h3>
              </section>

            </footer>
    )
  }
}

export default Footer;
