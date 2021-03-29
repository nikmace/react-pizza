import React from 'react';
import classNames from 'classnames';
import PropTypes from 'proptypes';

const Button = ({ onClick, className, outline, children }) => {
    return (
        <button
            className={classNames('button', className, {
                'button--outline': outline,
            })}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button;