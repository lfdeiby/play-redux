/**
 * disciplina_add: Actions. agregar una Disicplina a la base de datos
 * @param text
 * @returns {{type: string, payload: {text: *}}}
 */
export const disciplina_add = (name) => {
    return {
        type: 'DISCIPLINA_ADD',
        payload: {
            name: name
        }
    };
};

/**
 * disciplina_update: Action. modificar uan Disciplina específica de la base de datos
 * @param id
 * @param text
 * @returns {{type: string, payload: {id: *, text: *}}}
 */
export const disciplina_update = (id, name) => {
    return {
        type: 'DISCIPLINA_UPDATE',
        payload: {
            id: id,
            name: name
        }
    };
};

/**
 * disciplina_select: Action. Cambia el estado de una Disciplina en específico
 * @param id
 * @returns {{type: string, payload: {id: *}}}
 */
export const disciplina_select = (id) => {
    return {
        type:'DISCIPLINA_SELECT',
        payload:{
            id: id
        }
    };
};
