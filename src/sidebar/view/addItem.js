import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addItem} from '../actions';

class AddItem extends Component{
    constructor(props, context) {
        super(props, context);
        this.menuSubmit = this.menuSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    menuSubmit(e) {
         if(e.keyCode === 13){
            const input = this.input;
            if(e.target.value.trim() !== ''){
                this.props.onAdd(input.value);
                input.value = '';
            }else{
                alert("内容不可为空.")
            }
         }
    }

    refInput(node) {
        this.input = node;
    }

    render() {
        return (
            <div className='addItem'>
                <input type="text" placeholder='新建目录 | 回车创建' ref={this.refInput} onKeyUp={this.menuSubmit}/>
            </div>
        )
    }
}
addItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
      onAdd: (text) => {
          dispatch(addItem(text));
      }
  }
};
export default connect(null, mapDispatchToProps)(AddItem)
