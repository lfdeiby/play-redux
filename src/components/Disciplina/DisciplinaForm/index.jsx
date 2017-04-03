import React from 'react';
import { connect } from 'react-redux';
import { disciplina_add, disciplina_update } from '../actions'

/**
 * DisciplinaForm: Formulario para agregar o modificar una Disciplina
 */
class DisciplinaForm extends React.Component{

    /**
     * Constructor
     * @param props
     */
    constructor(props){
        super(props);

        // text: Valor que usará el input name
        this.state = {
            text: this.props.text
        };

        // Enlazar los metodos con la propiedad this
        this.handleTextOnChange = this.handleTextOnChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleGuardar = this.handleGuardar.bind(this);
    };

    /**
     * handleTextOnChange: Evento escuchador al cambio del input name del formulario
     * @param event
     */
    handleTextOnChange(event){
        this.setState({
            text: event.target.value
        });
    };

    /**
     * handleClose: Cerrar el POPUP del formulario
     * @param event
     */
    handleClose(event){
        event.preventDefault();
        this.props.dispatch( {type:'POPUP_HIDE'} );
    };

    /**
     * handleGuardar: Guarda la Disciplina ya sea una nueva o modifica una específica
     * @param event
     */
    handleGuardar(event){
        event.preventDefault();
        //Obtengo el valor del input text
        let text= this.state.text;

        // Verifico si el formulario fue abierto para Modificar una Disciplina específica
        // Caso contrario guardo una nueva Disciplina
        if( this.props.id !== 0){
            this.props.dispatch( disciplina_update(this.props.id, text) );
        }else{
            this.props.dispatch( disciplina_add(text) );
        }

        // Una vez guardado cierro el POPUP
        this.props.dispatch( {type:'POPUP_HIDE'} );
    };

    /**
     * render
     * @returns {XML}
     */
    render(){
        // Verifico si el formulario fue abierto como Agregar o Modificar una Dsciplina en esepcífico
        let btnText = (this.props.id == 0) ? "Guardar" : "Modificar";
        return(
            <div>
                <form action="." onSubmit={ this.handleGuardar }>
                    <input type="hidden" name="id" value="10" />
                    <div className="group">
                        <label htmlFor="name"> Nombre: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ingrese un nombre"
                            ref="name"
                            value={this.state.text}
                            onChange={ this.handleTextOnChange }/>
                    </div>
                    <div className="group">
                        <button type="submit" onClick={ this.handleGuardar }> {btnText} </button>
                        <button onClick={ this.handleClose }> Cancelar </button>
                    </div>
                </form>
            </div>
        );
    };
}

// Agrego los estados a la clase DisciplinaForm
const mapStateToProps = (state) => {
    return{
        id: state.disciplina.form.id,
        text: state.disciplina.form.text
    }
};

export default connect(mapStateToProps)(DisciplinaForm);