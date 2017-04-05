import React, { Component, PropTypes } from 'react';

/**
 * Item: Vista de los items de Dsicplina
 */
export default class Item extends Component{

    static propTypes = {
        selected: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
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
                className={"list-group-item " + (this.props.selected ? 'list-group-item-success ' : '') }
            >
                { this.props.name }
                <div className="selector-edit">
                    <button onClick={ this.props.handleEdit } alt="Editar" title="Editar">
                        <span className="icon-edit"></span>
                    </button>
                </div>
            </li>
        );
    };
};
