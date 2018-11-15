import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    CardHeader as BsCardHeader
} from 'reactstrap';

import './../../styles/elements/card-header.scss';

const CardHeader = (props) => {
    const { type, color, className, children, ...otherProps } = props;
    const cardHeaderClass = classNames(className,
        'custom-card-header',
        type && `custom-card-header--${ type }`,
        color && `custom-card-header--color-${ color }`
    );
    return (
        <BsCardHeader className={ cardHeaderClass } { ...otherProps }>
            { children }
        </BsCardHeader>
    );
};
CardHeader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    ...BsCardHeader.propTypes
};

export { CardHeader };
