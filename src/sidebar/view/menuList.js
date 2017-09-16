import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import MenuItem from './menuItem'
import {removeTodo} from "../../todos/actions";
import AddItem from './addItem'


const MenuList  = ({items,onRemoveTodo}) => {
        return (
            <div className="sidebar">
              <div className="avator">
                <img src="https://avatars3.githubusercontent.com/u/26321899?v=4&s=88" alt="Avator"/>
              </div>
              <ul>
                  {
                      items.map((item) => (
                          <MenuItem
                              key = {item.id}
                              text = {item.text}
                              onRemove = {() => {onRemoveTodo(item.id)}}
                          />
                      ))
                  }
              </ul>
                <AddItem />
            </div>
        )
};
MenuList.propTypes = {
    items : PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return { items: state.items}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveTodo : (id) => {
            dispatch(removeTodo(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)


