// Estado inicial para el componente de Popup
const inicio = {
    show:false
};

/**
 * popup: Reducer. para manejar los evntos del prompt Popup
 * @param state
 * @param action
 * @returns {{show: boolean}}
 */
const popup = (state=inicio, action) => {
    switch (action.type){
        // Abre el Popup
        case 'POPUP_SHOW':
            return {
                show: true
            };
        // Oculata el popup
        case 'POPUP_HIDE':
            return {
                show: false
            };
        default:
            return state;
    };
};

export default popup;