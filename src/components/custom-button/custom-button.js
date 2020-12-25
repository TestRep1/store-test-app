import React from 'react'
import './custom-button.scss';

const CustomButton = ({children, classes, ...otherProps}) => {
    return (
        <button className={`${classes} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
