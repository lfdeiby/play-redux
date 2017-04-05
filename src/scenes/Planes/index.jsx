import React from 'react';
import Disciplina from '../../components/Disciplina';

class Planes extends React.Component{

    render(){
        return(
            <div>
                <div className="page-title">
                    <div className="title_left">
                        <h3 id="h3">ARMAR PLANES DE VENTAS</h3>
                    </div>
                </div>
                <div className="clearfix"></div>
                <p>
                    Para armar tus planes es necesario que registres las disciplinas y periodos de tiempo.
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <Disciplina />
                    </div>
                    <div className="col-md-6">
                        <Disciplina />
                    </div>
                    <div className="col-md-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Disciplinas</h2>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Planes;