import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';

const MenuItem = ({text, selected, onSelected, onRemove}) => {
        return  (
            <li className={selected? 'selected' : ''} onClick={onSelected} >
                <div>
                    <Icon type="smile-o" className="icon" />
                    <span className='text'> {text} </span>
                </div>
                <span>
                    <Icon type="inbox" onClick={onRemove}/>
                </span>
            </li>
        )
};
MenuItem.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onSelected: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default MenuItem

