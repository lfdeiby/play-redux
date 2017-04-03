import React, { Component, PropTypes } from 'react';

/**
 * Item: Vista de los items de Dsicplina
 */
export default class Item extends Component{

    static propTypes = {
        selected: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        handleEdit: PropTypes.func.isRequired
    };

    /**
     * render
     * @returns {XML}
     */
    render(){
        return(
            <li
                onClick={ this.props.onClick }
                className={" " + (this.props.selected ? 'active' : '') }
            >
                { this.props.text }
                <div>
                    <button onClick={ this.props.handleEdit } > Edit </button>
                </div>
            </li>
        );
    };
};
