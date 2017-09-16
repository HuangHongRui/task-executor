import React from 'react';
import PropTypes from 'prop-types';
import {Icon } from 'antd';

const TodoItem = ({onToggle, onRemove, selected, text, timer}) => {
        return  (
            <li>
                <div>
                    <Icon className="icon" type={selected ? 'pushpin' : 'pushpin-o'} onClick={onToggle} />
                    <span style ={{textDecoration: selected ? 'line-through' : 'none'}}> {text} </span>
                    </div>
                <span>{timer}</span>
                <Icon className="icon" type="close-square-o" onClick={onRemove}/>
            </li>
        )
};

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    timer: PropTypes.string.isRequired
};

export default TodoItem
