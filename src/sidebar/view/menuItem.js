import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';

const MenuItem = ({text}) => {
        return  (
            <li>
                <div>
                    <Icon type="smile-o" className="icon" />
                    <span className='text'> {text} </span>
                </div>
                <span></span>
            </li>
        )
};
MenuItem.propTypes = {
    onRemove: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default MenuItem

