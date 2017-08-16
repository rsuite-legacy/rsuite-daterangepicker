import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import _ from 'lodash';
import decorate from './utils/decorate';
import { FormattedMessage } from './intl';

const propTypes = {
};

const defaultProps = {
};


class Header extends Component {

  render() {
    const {
      ranges,
      onShortcut,
      disabledOkButton,
      className,
      pageDate,
      ...props

    } = this.props;

    const classes = classNames(this.prefix('header'), className);


    return (
      <div
        {...elementProps}
        className={classes}
      >

      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default decorate()(Header);

