import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component{
    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    onSubmit(e) {
         if(e.keyCode === 13){
            const input = this.input;
             let timer = new Date().toLocaleString();
            if(e.target.value.trim() !== '' && input.value !== 'undefined'){
                this.props.onAdd(input.value, timer);
                input.value = '';
            }
            
         }

    }

    refInput(node) {
        this.input = node;
    }

    render() {
        return (
            <footer>
                <input type="text" placeholder='新增待办' ref={this.refInput} onKeyUp={this.onSubmit}/>
            </footer>
        )
    }
}
addTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
      onAdd: (text,timer) => {
          dispatch(addTodo(text, timer));
      }
  }
};
export default connect(null, mapDispatchToProps)(AddTodo);
