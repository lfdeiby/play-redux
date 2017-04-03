import React from 'react';
import { connect } from 'react-redux';

class DisciplinaDelete extends React.Component{

    constructor(props){
        super(props);

        this.handleEliminar = this.handleEliminar.bind(this);
        this.handleCancelar = this.handleCancelar.bind(this);
    }

    handleEliminar(event){
        event.preventDefault();
        this.props.dispatch( {type:'DISCIPLINA_DELETE'} );
        this.props.dispatch( {type:'ALERT_HIDE'} );
    }

    handleCancelar(event){
        event.preventDefault();
        this.props.dispatch( {type:'ALERT_HIDE'} );
    }

    render(){
        return(
            <div>
                <p>
                    Esta seguro que desea <b> Eliminar </b> las siguientes disciplinas:
                </p>
                <ul>
                    { this.props.disciplina.map( (item) =>{
                        if( item.selected ){
                            return (<li key={item.id}> { item.text } </li>)
                        }
                    })}
                </ul>
                <div>
                    <button onClick={ this.handleEliminar }>Eliminar</button>
                    <button onClick={ this.handleCancelar }> Cancelar </button>
                </div>
            </div>

        );
    };

};

const mapStateToProps = (state) => {
    return{
        disciplina: state.disciplina.lista
    };
};

export default connect(mapStateToProps)(DisciplinaDelete);