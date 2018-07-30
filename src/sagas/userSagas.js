import {delay} from 'redux-saga';
import { take,call,put } from 'redux-saga/effects';
import {getPasswordValidations} from '../api/commonAPI';
import {GET_PASSWORD_RULES,loadPasswordRules} from '../actions/actions';

export default function* getCategory(){
   yield take(GET_PASSWORD_RULES);
   const response=yield call(getPasswordValidations);
   yield put(loadPasswordRules(response));

}