import React, {Component} from 'react';
import {Icon } from 'antd';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="ct">
                <header>
                    <h1>开心每一天</h1>
                    <div>
                        <button>
                            <Icon type="bars" />
                            排序</button>
                        <button>
                            <Icon type="ellipsis" />
                        </button>
                    </div>
                </header>
                <content>
                    <ul>
                        {/*<li>*/}
                            {/*<div>*/}
                                {/*<Icon type="pushpin-o" className="icon"/>*/}
                                {/*<span>*/}
                          {/*Bill is a cat.*/}
                        {/*</span>*/}
                            {/*</div>*/}
                            {/*<Icon type="minus" className="icon"/>*/}
                        {/*</li>*/}
                    </ul>
                </content>
                <footer>
                    <input type="text" placeholder='新增待办' />
                </footer>
            </div>
        )
    }
}