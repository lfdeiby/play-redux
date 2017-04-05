//Estado inicial de la lista de Diciplinas
const inicio = [ {id: 1, name:"Obama", selected:false},
    {id: 2, name:"Mandela", selected:false},
    {id: 3, name:"Clinton", selected:true} ];

/**
 * disciplina: Reducer que gestiona todo con respecto al modelo de Disciplina
 * @param state
 * @param action
 * @returns {*}
 */
const disciplina = (state=inicio, action) => {
    switch ( action.type ) {
        //Agregar una nueva Disciplina
        case 'DISCIPLINA_ADD':
            return [
                ...state,
                {id: Date.now(), name: action.payload.name, selected: false}
            ];
        //Modificar una Disciplina específica
        case 'DISCIPLINA_UPDATE':
            let update_state = [];
            state.forEach((item) =>{
                if(item.id == action.payload.id){
                    let update = Object.assign({}, item, {
                        name: action.payload.name,
                        selected: true
                    });
                    update_state.push(update);
                }else {
                    update_state.push(item);
                }
            });
            return update_state;
        //Cambiar de estado una Disciplina en específico
        case 'DISCIPLINA_SELECT':
            return state.map(t => {
                if (t.id !== action.payload.id)
                    return t;
                else
                    return Object.assign({}, t,{
                        selected: !t.selected
                    });
            });
        //Elimina las Disciplinas con estado seleccionado en true
        case 'DISCIPLINA_DELETE':
            let new_state = [];
            state.forEach((item) =>{
                if(!item.selected){
                    new_state.push(item);
                }
            });
            return new_state;

        default:
            return state;
    }
};

export default disciplina;