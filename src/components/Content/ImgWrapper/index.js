import React, { Component } from 'react';
import { string, number } from "prop-types";
import classNames from "classnames";

import style from './index.less';

class ImgWrapper extends Component {

  static propTypes = {
    outerClass: string,
    index: number,
    src: string,
    alt: string,
	}

    render() {
      const { outerClass, index, src, alt } = this.props;
      const classWrapper = classNames(outerClass, style.block, {
          [style.block0]: index == '0'
        },
        {
          [style.block1]: index == '1'
        },
        {
          [style.block2]: index == '2'
        },
      );
        return (
          <img className={classWrapper} src={src} alt={alt} />
    )
  }
}

export default ImgWrapper;
