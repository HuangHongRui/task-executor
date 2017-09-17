import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import MenuItem from './menuItem'
import {removeItem, selectedItem} from "../actions";
import AddItem from './addItem'


const MenuList  = ({items,onRemoveItem, onSelectedItem}) => {
        return (
            <div className="sidebar">
              <div className="avator">
                <img src="https://avatars3.githubusercontent.com/u/26321899?v=4&s=88" alt="Avator"/>
              </div>
                <AddItem />
              <ul>
                  {
                      items.map((item) => (
                          <MenuItem
                              selected = {item.selected}
                              key = {item.id}
                              text = {item.text}
                              onRemove = {() => {onRemoveItem(item.id)}}
                              onSelected = {() => {onSelectedItem(item.id)}}
                          />
                      ))
                  }
              </ul>
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
        onRemoveItem : (id) => {
            dispatch(removeItem(id));
        },
        onSelectedItem : (id) => {
            console.log(id);
            dispatch(selectedItem(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)


