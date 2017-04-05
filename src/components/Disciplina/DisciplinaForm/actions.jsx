/**
 * disciplina_form_add: Abre el formulario de Disciplina en blanco
 * @returns {{type: string}}
 */
export const disciplina_form_add = () => {
    return {
        type: 'DISCIPLINA_FORM_ADD'
    }
};

/**
 * diciplina_form_update: Abre el formulario de Disciplina con valores
 * @param id
 * @param text
 * @returns {{type: string, payload: {id: *, text: *}}}
 */
export const disciplina_form_update = (id, name) => {
    return {
        type: 'DISCIPLINA_FORM_UPDATE',
        payload: {
            id: id,
            name: name
        }
    }
};