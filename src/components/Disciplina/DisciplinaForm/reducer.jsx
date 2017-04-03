// Estado inicial del formulario
const inicio = {
    id: 0,
    text: ''
};

/**
 * form: Reducer para manejar el formulario de agregar y modificar las Disciplinas
 * @param state
 * @param action
 * @returns {*}
 */
const form = (state=inicio, action) => {
    switch ( action.type ){
        // Abre el formulario en blanco
        case "DISCIPLINA_FORM_ADD":
            return {
                id: 0,
                text: '',
                selected: false
            };
        // Abre el formulario con un item de Dsciplina
        case "DISCIPLINA_FORM_UPDATE":
            return {
                id: action.payload.id,
                text: action.payload.text,
                selected: true
            };
        default:
            return state;
    };
};

export default form;