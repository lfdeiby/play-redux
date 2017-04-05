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
            <div className="col-sm-8 col-sm-offset-2 ">
                <div>
                    <h2> <span className="icon-exclamation-triangle"></span> Precaución </h2>
                </div>
                <p>
                    Esta seguro que desea <b> Eliminar </b> las siguientes Disciplinas:
                </p>
                <ul className="list-group">
                    { this.props.disciplina.map( (item) =>{
                        if( item.selected ){
                            return (<li className="list-group-item" key={item.id}> { item.name } </li>)
                        }
                    })}
                </ul>
                <div className="text-right">
                    <button className="btn btn-success btn-lg" onClick={ this.handleEliminar }>Eliminar</button>
                    <button className="btn btn-danger btn-lg" onClick={ this.handleCancelar }> Cancelar </button>
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