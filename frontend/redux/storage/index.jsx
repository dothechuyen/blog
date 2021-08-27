import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects';
import Customizer from '../../../../front-end-v2/src/redux/customizer/reducer'
import Storage from "../../../../front-end-v2/src/redux/storage/reducer"
import folderAction from '../../../../front-end-v2/src/saga/folderAction';
export const reducers = combineReducers({
    Customizer,
    Storage
});

export function* rootSaga() {
    yield all([

        folderAction()
    ]);
}
