import React, { Component } from 'react';
import { object, number, func, any, string } from "prop-types";

import classNames from 'classnames';

import style from './index.less';

class SectionWithHeadline extends Component {

  static propTypes = {
    outerClass: string,
    bottomargin: string,
		index: number,
		headline: string,
		text: string,
	}

    render() {
      const { outerClass, bottomargin, index, headline, text } = this.props;
      const wrapperStyle = classNames(style.block, outerClass, bottomargin);
      const iconWrapperStyle = classNames({
          [style.blockIcon0]: index == '0'
        },
        {
          [style.blockIcon1]: index == '1'
        },
        {
          [style.blockIcon2]: index == '2'
        },
        {
          [style.blockIcon3]: index == '3'
        },
        {
          [style.blockIcon4]: index == '4'
        },
      );

        return (
            <section className={wrapperStyle}>
              <div className={iconWrapperStyle}></div>
              <h4 className={style.blockHeadline}>{headline}</h4>
              <p className={style.blockText}>{text}</p>
            </section>
    )
  }
}

export default SectionWithHeadline;
