import { combineReducers  } from 'redux';
import disciplina from "./reducer";
import disciplina_form from "./DisciplinaForm/reducer";

const reducer = combineReducers({
        lista: disciplina,
        form: disciplina_form
});

export default reducer;