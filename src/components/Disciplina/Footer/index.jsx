import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { disciplina_show_form } from '../actions'
/**
 * Footer
 */
class Footer extends Component{

    constructor(props){
        super(props);

        //Binding: Enlazar las funcciones con el componente
        this.handleForm = this.handleForm.bind(this);
        this.handleDeleteAlert = this.handleDeleteAlert.bind(this);
    };

    /**
     * handleForm: Abrir el formulario para agregar una Disciplina
      * @param event
     */
    handleForm(event){
        this.props.dispatch( {type: 'DISCIPLINA_FORM_ADD'} );
        this.props.dispatch( {type: 'POPUP_SHOW'} );
    };

    /**
     * handleDeleteAlert: Abrir la alerta para eliminar Disciplina
     * @param event
     */
    handleDeleteAlert(event){
        let disicplina = this.props.disciplina;
        let show = false;
        // Verifico que haya Disciplinas seleccionados
        for( let i=0; i<disicplina.length; i++){
            if( disicplina[i].selected ){
                show = true;
                break;
            }
        }
        if( show )
            this.props.dispatch({
                type: 'ALERT_SHOW',
                status: 'warning'
            });
        else
            alert('Seleccione una o varias Disciplinas \nAntes de presionar el botón "Eliminar".');
    };

    /**
     * render
     * @returns {XML}
     */
    render(){
        return(
            <div>
                <div className="text-right">
                    <button className="btn btn-success btn-sm" onClick={ this.handleForm }>
                        Agregar &nbsp; <span className="icon-plus2"></span>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={ this.handleDeleteAlert }>
                        Eliminar &nbsp; <span className="icon-bin"></span>
                    </button>
                </div>
            </div>
        );
    };
}

/**
 * Connect: Conectar la clase Footer con redux
 */
const mapStateToProps = (state) => {
    return{
        disciplina: state.disciplina.lista
    };
};

export default connect(mapStateToProps)(Footer);