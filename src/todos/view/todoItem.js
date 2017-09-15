import React,{PropTypes} from 'react';

const TodoItem = ({onToggle, onRemove, selected, text}) => {
   const checkedProp = selected ? {checked:true} : {};
   return  (
       <li style = {{
           textDecoration: selected ? 'line-througe' : 'none'
       }}>
           <div>
               <Icon className="icon" type={slected ? 'pushpin' : 'pushpin-o'} onClick={onToggle} />
               <span>
                   {text}
               </span>
           </div>
           <Icon className="icon" type="minus" onClick={onRemove}/>
       </li>
   )
};

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem
