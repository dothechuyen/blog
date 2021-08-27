import { takeEvery, put, call } from 'redux-saga/effects';
import { folderActionTypes } from '../constant';
// import { getCategories, getListRecomendCategories } from '../crud/category.crud';
import { storageActions } from '../redux/storage/reducer'
import { getFolders, createFolders, uploadFile, favoriteFolder, deleteFolder, renameFile, renameFolder, favoriteFile, unfavoriteFolder, moveFolder, copyFolder, moveFile, copyFile, movetotrashFolder, movetotrashFile, unfavoriteFile, recoverFolder, recoverFile, deleteFile, monitorFolder, getFavoriteFolder, gettrashFolder, getTrashFolder, downloadFolder, downloadFile } from '../services/storage';

function* getRecomnendFolder({ payload }) {
    const { params } = payload
    // console.log(payload);
    try {
        const response = yield call(getFolders, payload)
        console.log(response);
        yield put(storageActions.getFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* createRecomnendFolder({ payload }) {
    const { name, parent_id, permission } = payload
    console.log(" 1234", payload);
    try {
        const response = yield call(createFolders, { name, parent_id, permission })
        // console.log(response);
        yield put(storageActions.createFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        // yield put(storageActions.getFolderSuccessful(response.data.data.folder))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* uploadRecomnendFile({ payload }) {
    const { body } = payload
    try {
        const response = yield call(uploadFile, payload)
        console.log(response);
        yield put(storageActions.uploadFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* favoriteRecomnendFolder({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(favoriteFolder, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.favoriteFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* movetotrashRecomnendFolder({ payload }) {
    const { body } = payload
    try {
        const response = yield call(movetotrashFolder, payload)
        yield put(storageActions.movetotrashFolderSuccessful(response.data.data.folder))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* renameRecomnendFile({ payload }) {
    const { file_id, name } = payload
    // console.log(payload);
    try {
        const response = yield call(renameFile, { file_id, name })
        console.log(response);
        yield put(storageActions.renameFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        // yield put(storageActions.getFolderSuccessful(response.data.data.folder))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* renameRecomnendFolder({ payload }) {
    const { folder_id, name } = payload
    console.log(payload);
    try {
        const response = yield call(renameFolder, { folder_id, name })
        // console.log("asdasdasd", response);
        yield put(storageActions.renameFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        // yield put(storageActions.getFolderSuccessful(response.data.data.folder))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* favoriteRecomnendFile({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(favoriteFile, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.favoriteFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* unfavoriteRecomnendFolder({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(unfavoriteFolder, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.unfavoriteFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* moveRecomnendFolder({ payload }) {
    const { parent_id, folder_id } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(moveFolder, { parent_id, folder_id })
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.moveFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* copyRecomnendFolder({ payload }) {
    const { parent_id, folder_id } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(copyFolder, { parent_id, folder_id })
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.copyFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* moveRecomnendFile({ payload }) {
    const { parent_id, file_id } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(moveFile, { parent_id, file_id })
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.moveFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* copyRecomnendFile({ payload }) {
    const { parent_id, file_id } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(copyFile, { parent_id, file_id })
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.copyFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* movetotrashRecomnendFile({ payload }) {
    const { body } = payload
    try {
        const response = yield call(movetotrashFile, payload)
        yield put(storageActions.movetotrashFileSuccessful(response.data.data.folder))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* unfavoriteRecomnendFile({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(unfavoriteFile, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.unfavoriteFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* deleteRecomnendFolder({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(deleteFolder, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.deleteFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        console.log("delete", payload);
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* recoverRecomnendFolder({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(recoverFolder, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.recoverFolderSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        console.log("delete", payload);
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* recoverRecomnendFile({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(recoverFile, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.recoverFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        // console.log("delete", payload);
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* deleteRecomnendFile({ payload }) {
    const { body } = payload
    // console.log("::dfgvdf");
    try {
        const response = yield call(deleteFile, payload)
        // console.log("fav", "asdasdasd", response);
        yield put(storageActions.deleteFileSuccessful(response.data.data.folder))
        // return response.data.data.folder;
        // console.log("delete", payload);
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* monitorRecomnendFolder({ payload }) {
    const { body } = payload
    try {
        const response = yield call(monitorFolder, payload)
        yield put(storageActions.monitorFolderSuccessful(response.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* getRecomnendFavoriteFolder({ payload }) {
    const { body } = payload
    try {
        const response = yield call(getFavoriteFolder, payload)
        yield put(storageActions.getFavoriteFolderSuccessful(response.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* getRecomnendTrashFolder({ payload }) {
    const { body } = payload
    try {
        const response = yield call(getTrashFolder, payload)
        yield put(storageActions.getTrashFolderSuccessful(response.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* downloadRecomnendFolder({ payload }) {
    const { body } = payload
    try {
        const response = yield call(downloadFolder, payload)
        yield put(storageActions.downloadFolderSuccessful(response.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* downloadRecomnendFile({ payload }) {
    const { body } = payload
    try {
        const response = yield call(downloadFile, payload)
        yield put(storageActions.downloadFileSuccessful(response.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(storageActions.fail(error));
    }
}
function* folderAction() {
    yield takeEvery(folderActionTypes.getFolder, getRecomnendFolder)
    yield takeEvery(folderActionTypes.createFolder, createRecomnendFolder)
    yield takeEvery(folderActionTypes.uploadFile, uploadRecomnendFile)
    yield takeEvery(folderActionTypes.favoriteFolder, favoriteRecomnendFolder)
    yield takeEvery(folderActionTypes.movetotrashFolder, movetotrashRecomnendFolder)
    yield takeEvery(folderActionTypes.renameFile, renameRecomnendFile)
    yield takeEvery(folderActionTypes.renameFolder, renameRecomnendFolder)
    yield takeEvery(folderActionTypes.favoriteFile, favoriteRecomnendFile)
    yield takeEvery(folderActionTypes.unfavoriteFolder, unfavoriteRecomnendFolder)
    yield takeEvery(folderActionTypes.moveFolder, moveRecomnendFolder)
    yield takeEvery(folderActionTypes.copyFolder, copyRecomnendFolder)
    yield takeEvery(folderActionTypes.moveFile, moveRecomnendFile)
    yield takeEvery(folderActionTypes.copyFile, copyRecomnendFile)
    yield takeEvery(folderActionTypes.movetotrashFile, movetotrashRecomnendFile)
    yield takeEvery(folderActionTypes.unfavoriteFile, unfavoriteRecomnendFile)
    yield takeEvery(folderActionTypes.deleteFolder, deleteRecomnendFolder)
    yield takeEvery(folderActionTypes.recoverFolder, recoverRecomnendFolder)
    yield takeEvery(folderActionTypes.deleteFile, deleteRecomnendFile)
    yield takeEvery(folderActionTypes.recoverFile, recoverRecomnendFile)
    yield takeEvery(folderActionTypes.monitorFolder, monitorRecomnendFolder)
    yield takeEvery(folderActionTypes.getFavoriteFolder, getRecomnendFavoriteFolder)
    yield takeEvery(folderActionTypes.getTrashFolder, getRecomnendTrashFolder)
    yield takeEvery(folderActionTypes.downloadFile, downloadRecomnendFile)
    yield takeEvery(folderActionTypes.downloadFolder, downloadRecomnendFolder)

}
export default folderAction