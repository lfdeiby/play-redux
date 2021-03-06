import React, { Component } from 'react';
import { connect } from 'react-redux';
import { disciplina_select } from './actions';
import { disciplina_form_update } from './DisciplinaForm/actions'

import Item from './Item';
import Footer from './Footer';
import Popup from '../Popup';
import Alert from '../Alert';

import DisciplinaForm from './DisciplinaForm';
import DisciplinaDelete from './DisciplinaDelete';

/**
 * Disciplina
 */
class Disciplina extends Component{

    constructor(props){
        super(props);

        // Enlazar los eventos con la propiedad this
        this.handlerOnClick = this.handlerOnClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    /**
     * handlerOnClick: Hace un toggle del atributo selected a un item Disciplina específico
     * @param id
     */
    handlerOnClick(id){
        this.props.dispatch( disciplina_select(id) );
    }

    /**
     * handleEdit: Abre el formulario de modificar con los datos de una Disciplina específica
     * @param id
     */
    handleEdit(id){
        this.props.items.forEach((item) => {
            if(item.id == id){
                this.props.dispatch( disciplina_form_update(item.id, item.name) );
            }
        });
        this.props.dispatch( {type: 'POPUP_SHOW'} );
    };

    /**
     * render
     * @returns {XML}
     */
    render(){
        return(
            <div className="x_panel">
                <div className="x_title">
                    <h2>Disciplinas</h2>
                    <div className="clearfix"></div>
                </div>
                <div className="panel-body">
                    <p>
                        Lista de todas las diciplinas.
                    </p>
                </div>
                <section className="selector">
                    <ul className="list-group">
                        {this.props.items.map(item =>
                            <Item
                                key={item.id}
                                selected={item.selected}
                                name={item.name}
                                onClick={() => this.handlerOnClick(item.id)}
                                handleEdit={() => this.handleEdit(item.id)}
                            />
                        )}
                    </ul>
                </section>
                <Footer />
                { this.props.popup.show &&
                    <Popup>
                        <DisciplinaForm />
                    </Popup>
                }
                { this.props.alert.show &&
                    <Alert>
                        <DisciplinaDelete />
                    </Alert>
                }
            </div>
        )
    }
}


//Agrego los estados a la clase Discplina
const mapStateToProps = (state) => {
    return {
        items: state.disciplina.lista,
        popup: state.popup,
        alert: state.alert,
    };
};

export default connect(mapStateToProps)(Disciplina)