import INITIAL_STATE from '../state/initialState';
import {LOAD_PASSWORD_RULES} from '../actions/actions';

export default function appReducers(state=INITIAL_STATE, action ) {
    switch(action.type){
        case LOAD_PASSWORD_RULES:
                return (Object).assign({},state,{
                    password:{
                        passwordValidations:action.payload
                    }
                });
    };
    return state;
}