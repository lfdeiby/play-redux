import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { store } from '../../index';
import { connect, Provider } from 'react-redux';

/**
 * Popup: Es un prompt para mostrar contenido dentro de un popup
 */
class Popup extends Component{
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
        this.popupTarget.className = "popup";
        setTimeout(()=> {
            ReactDom.unmountComponentAtNode( this.popupTarget );
            document.body.removeChild(this.popupTarget);
        },200);

    }

    handlerClose(){
        this.props.dispatch({type:'POPUP_HIDE'});
    }

    /**
     * _render: Reemplaza al render normal ya que este componente es especial
     * @private
     */
    _render(){
        // Para mostrar la alerta espero .2 seg para hacer el efecto de entrada
        this.popupTarget.className = "popup";
        setTimeout( ()=>{
            this.popupTarget.className = "popup " + (this.props.show ? 'active' : '');
            // Es necesario pasar nuevamente el ReactDom para agregar un div dentro de la etiqueta body
            // y no asi dentro de la etiqueta "app"
            ReactDom.render(
                <Provider store={store}>
                    <div className="principal">
                        {/*<button onClick={ this.handlerClose }> Close </button>*/}
                        { this.props.children }
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

// Pasar los estados a la clase Popup
const mapSateToProps = (state) => {
    return {
        show: state.popup.show
    };
};

export default connect(mapSateToProps)(Popup);