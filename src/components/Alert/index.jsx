import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { store } from '../../index';
import { connect, Provider } from 'react-redux';

/**
 * Alert: Es un prompt para mostrar los mensaje de alerta dentro de la aplicación
 */
class Alert extends Component{
    constructor(props){
        super(props);

        //Enlazar los metodos con la propiedad this
        this.handlerClose = this.handlerClose.bind(this);
    }

    componentDidMount(){
        //Creo un div y lo agrego como hijo del tag body
        this.popupTarget = document.createElement('div');
        this.popupTarget.className = 'popup';
        document.body.appendChild( this.popupTarget );
        this._render();
    }

    componentWillUpdate(){
        this._render();
    }

    componentWillReceiveProps(){
        this._render();
    }

    componentWillUnmount(){
        //Para quitar el promp de alerta espero .2 seg para hacer el efecto de salida
        this.popupTarget.className = "alert";
        setTimeout(()=> {
            ReactDom.unmountComponentAtNode( this.popupTarget );
            document.body.removeChild(this.popupTarget);
        },200);

    }

    handlerClose(){
        this.props.dispatch({type:'ALERT_HIDE'});
    }

    /**
     * _render: Reemplaza al render normal ya que este componente es especial
     * @private
     */
    _render(){
        // Para mostrar la alerta espero .2 seg para hacer el efecto de entrada
        this.popupTarget.className = "alert";
        setTimeout( ()=>{
            this.popupTarget.className = "alert " + (this.props.show ? 'active' : '');
            // Es necesario pasar nuevamente el ReactDom para agregar un div dentro de la etiqueta body
            // y no asi dentro de la etiqueta "app"
            ReactDom.render(
                <Provider store={store}>
                    <div className={ "container " + ((this.props.status) ? this.props.status : '') } >
                        <div className="row">
                            <button onClick={ this.handlerClose }> Close </button>
                            { this.props.children }
                        </div>
                    </div>
                </Provider>,
                this.popupTarget
            );
        }, 200);
    }

    render(){
        return <noscript />
    }
}


// Pasar los estados a la clase Alert
const mapSateToProps = (state) => {
    return {
        show: state.alert.show,
        status: state.alert.status
    };
};

export default connect(mapSateToProps)(Alert);