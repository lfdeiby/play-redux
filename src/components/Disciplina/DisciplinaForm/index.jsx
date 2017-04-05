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
            name: this.props.name
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
            name: event.target.value
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
        let name= this.state.name;

        // Verifico si el formulario fue abierto para Modificar una Disciplina específica
        // Caso contrario guardo una nueva Disciplina
        if( this.props.id !== 0){
            this.props.dispatch( disciplina_update(this.props.id, name) );
        }else{
            this.props.dispatch( disciplina_add(name) );
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
            <div className="row">
                <div className="x_panel">
                    <div className="x_title">
                        <h2> <span className="icon-download3"></span> Disciplina</h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li>
                                <a onClick={ this.handleClose }> <span className="icon-close"></span> </a>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <p>
                        Ingrese el nombre completo de la Disciplina que desa { btnText }.
                    </p>
                    <form action="." onSubmit={ this.handleGuardar }>
                        <input type="hidden" name="id" value="10" />
                        <div className="form-group">
                            <label htmlFor="name"> Nombre: </label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ingrese un nombre"
                                ref="name"
                                value={ this.state.name}
                                onChange={ this.handleTextOnChange } />
                        </div>
                        <br />
                        <div className="form-group text-right">
                            <button className="btn btn-success btn-lg" type="submit" onClick={ this.handleGuardar }> {btnText} </button>
                            <button className="btn btn-danger btn-lg" onClick={ this.handleClose }> Cancelar </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

// Agrego los estados a la clase DisciplinaForm
const mapStateToProps = (state) => {
    return{
        id: state.disciplina.form.id,
        name: state.disciplina.form.name
    }
};

export default connect(mapStateToProps)(DisciplinaForm);