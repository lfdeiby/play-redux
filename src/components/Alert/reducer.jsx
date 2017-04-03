// Estado inicial para el componente de Alerta
const inicio = {
    show: false,
    status: 'default'
};

/**
 * alert: Reducer. para manejar los eventos del prompt Alerta
 * @param state
 * @param action
 * @returns {*}
 */
const alert = (state=inicio, action) => {
    switch (action.type){
        // Muestra la Alerta
        case 'ALERT_SHOW':
            let status = (action.status) ? action.status : 'default';
            return {
                show: true,
                status: status
            };
        // Ocular la alerta
        case 'ALERT_HIDE':
            return {
                show: false
            };
        default:
            return state;
    }
};

export default alert;