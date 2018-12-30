import React, { Component } from 'react';
import { object, number, func, any, string, array } from "prop-types";

import classNames from 'classnames';

import style from './index.less';

class SectionBigNumbers extends Component {

  static propTypes = {
    outerClass: string,
		index: number,
		headline: array,
		text: string,
	}

    render() {
      const {
        outerClass,
        index,
        headline,
        text, } = this.props;

      // const { head, tail, headlineBody } = headline;
      const wrapperStyle = classNames(style.block, outerClass);
      const textWrapperStyle = classNames(style.blockText, {
          [style.blockText0]: index == '0'
        },
        {
          [style.blockText1]: index == '1'
        },
        {
          [style.blockText2]: index == '2'
        },
      );

        return (
            <section className={wrapperStyle}>
              <h2 className={style.blockHeadline}>
                <span className={style.blockHeadlineHead}>
                  {headline[1]}
                </span>
                {headline[0]}
                <span className={style.blockHeadlineTail}>
                  {headline[2]}
                </span>
              </h2>
              <p className={textWrapperStyle}>{text}</p>
            </section>
    )
  }
}

export default SectionBigNumbers;
