import {
    ADD_COSTOMIZER,
    CREATE_FOLDER,
    CREATE_FOLDER_FAIL,
    CREATE_FOLDER_SUCCESS,
    GET_FOLDER,
    GET_FOLDER_FAIL,
    GET_FOLDER_SUCCESS,
    UPLOAD_FILE_SUCCESS,
    CHANGE_PARENT_ID,
    FAVORITE_FOLDER,
    FAVORITE_FOLDER_OK
} from "../actionTypes";
import ConfigDB from '../../data/customizer/config';
import { folderActionTypes, None } from '../../constant'
const initial_state = {
    customizer: ConfigDB.data,
    configData: {},
    layout: 'ltr',
    sidebar_types: {},
    settings: '',
    folder: null,
    color: {},
    mix_background_layout: '',
    animation: '',
    parent_id: '6102d050fbccd2689d48425a',
    temp_id: "",
    method: "",
    status: "ACTIVE",
    monitor: null,
    breadcrumb: [{ id: '61172340f4da4b32b998cd33', name: "Home" }],
    popupMove: false,
    popupDetail: false,
};

export default (state = initial_state, action) => {
    switch (action.type) {

        case ADD_COSTOMIZER:
            return { ...state, loading: false, customizer: ConfigDB.data };
        case GET_FOLDER_SUCCESS:
            return { ...state, folder: action.payload }
        case folderActionTypes.getTrashFolderSuccessful:
            return { ...state, folder: action.payload }
        case folderActionTypes.getFavoriteFolderSuccessful:
            return { ...state, folder: action.payload }
        case CHANGE_PARENT_ID:
            return { ...state, parent_id: action.payload }
        case folderActionTypes.updateTempId:
            return { ...state, temp_id: action.payload }
        case folderActionTypes.updateMethod:
            return { ...state, method: action.payload }
        case folderActionTypes.monitorFolderSuccessful:
            return { ...state, monitor: action.payload }
        case folderActionTypes.updateBreadcrumb:
            return { ...state, breadcrumb: action.payload }
        case folderActionTypes.updatePopupMove:
            return { ...state, popupMove: action.payload }
        case folderActionTypes.updatePopupDetail:
            return { ...state, popupDetail: action.payload }
        default: return { ...state };
    }
}
export const storageActions = {
    updatePopupDetail: (body) => ({ type: folderActionTypes.updatePopupDetail, payload: body }),
    updatePopupMove: (body) => ({ type: folderActionTypes.updatePopupMove, payload: body }),
    updateBreadcrumb: (body) => ({ type: folderActionTypes.updateBreadcrumb, payload: body }),
    getFolder: (params) => ({ type: folderActionTypes.getFolder, payload: params }),
    getFolderSuccessful: (payload) => ({ type: GET_FOLDER_SUCCESS, payload: payload }),
    updateTempId: (body) => ({ type: folderActionTypes.updateTempId, payload: body }),
    updateMethod: (body) => ({ type: folderActionTypes.updateMethod, payload: body }),
    fail: (payload) => ({ type: GET_FOLDER_FAIL }),
    createFolder: ({ name, parent_id, permission }) => ({ type: folderActionTypes.createFolder, payload: { name, parent_id, permission } }),
    createFolderSuccessful: (payload) => ({ type: CREATE_FOLDER_SUCCESS, payload: payload }),
    changeParentId: (body) => ({ type: CHANGE_PARENT_ID, payload: body }),
    favoriteFolder: (body) => ({ type: folderActionTypes.favoriteFolder, payload: body }),
    favoriteFolderSuccessful: (body) => ({ type: FAVORITE_FOLDER_OK, payload: body }),
    movetotrashFolder: (body) => ({ type: folderActionTypes.movetotrashFolder, payload: body }),
    movetotrashFolderSuccessful: (body) => ({ type: folderActionTypes.movetotrashFolderSuccessFul, payload: body }),
    renameFolder: ({ folder_id, name }) => ({ type: folderActionTypes.renameFolder, payload: { folder_id, name } }),
    renameFolderSuccessful: (body) => ({ type: folderActionTypes.renameFolderSuccessful, payload: body }),
    unfavoriteFolder: (body) => ({ type: folderActionTypes.unfavoriteFolder, payload: body }),
    unfavoriteFolderSuccessful: (body) => ({ type: folderActionTypes.unfavoriteFolderSuccessful, payload: body }),
    moveFolder: ({ parent_id, folder_id }) => ({ type: folderActionTypes.moveFolder, payload: { parent_id, folder_id } }),
    moveFolderSuccessful: (body) => ({ type: folderActionTypes.moveFolderSuccessful, payload: body }),
    copyFolder: ({ parent_id, folder_id }) => ({ type: folderActionTypes.copyFolder, payload: { parent_id, folder_id } }),
    copyFolderSuccessful: (body) => ({ type: folderActionTypes.copyFolderSuccessful, payload: body }),
    deleteFolder: (body) => ({ type: folderActionTypes.deleteFolder, payload: body }),
    deleteFolderSuccessful: (body) => ({ type: folderActionTypes.deleteFolderSuccessful, payload: body }),
    recoverFolder: (body) => ({ type: folderActionTypes.recoverFolder, payload: body }),
    recoverFolderSuccessful: (body) => ({ type: folderActionTypes.recoverFolderSuccessful, payload: body }),
    monitorFolder: (body) => ({ type: folderActionTypes.monitorFolder, payload: body }),
    monitorFolderSuccessful: (body) => ({ type: folderActionTypes.monitorFolderSuccessful, payload: body }),
    getFavoriteFolder: (body) => ({ type: folderActionTypes.getFavoriteFolder, payload: body }),
    getFavoriteFolderSuccessful: (body) => ({ type: folderActionTypes.getFavoriteFolderSuccessful, payload: body }),
    getTrashFolder: (body) => ({ type: folderActionTypes.getTrashFolder, payload: body }),
    getTrashFolderSuccessful: (body) => ({ type: folderActionTypes.getTrashFolderSuccessful, payload: body }),
    downloadFolder: (body) => ({ type: folderActionTypes.downloadFolder, payload: body }),
    downloadFolderSuccessful: (body) => ({ type: folderActionTypes.downloafFolderSuccessful, payload: body }),

    downloadFile: (body) => ({ type: folderActionTypes.downloadFile, payload: body }),
    downloadFileSuccessful: (body) => ({ type: folderActionTypes.downloadFileSuccessful, payload: body }),
    renameFile: ({ file_id, name }) => ({ type: folderActionTypes.renameFile, payload: { file_id, name } }),
    renameFileSuccessful: (body) => ({ type: folderActionTypes.renameFileSuccessful, payload: body }),
    favoriteFile: (body) => ({ type: folderActionTypes.favoriteFile, payload: body }),
    favoriteFileSuccessful: (body) => ({ type: folderActionTypes.favoriteFileSuccessful, payload: body }),
    uploadFile: (body) => ({ type: folderActionTypes.uploadFile, payload: body }),
    uploadFileSuccessful: (body) => ({ type: UPLOAD_FILE_SUCCESS, payload: body }),
    moveFile: ({ parent_id, file_id }) => ({ type: folderActionTypes.moveFile, payload: { parent_id, file_id } }),
    moveFileSuccessful: (body) => ({ type: folderActionTypes.moveFileSuccessful, payload: body }),
    copyFile: ({ parent_id, file_id }) => ({ type: folderActionTypes.copyFile, payload: { parent_id, file_id } }),
    copyFileSuccessful: (body) => ({ type: folderActionTypes.copyFileSuccessful, payload: body }),
    movetotrashFile: (body) => ({ type: folderActionTypes.movetotrashFile, payload: body }),
    movetotrashFileSuccessful: (body) => ({ type: folderActionTypes.movetotrashFileSuccessFul, payload: body }),
    unfavoriteFile: (body) => ({ type: folderActionTypes.unfavoriteFile, payload: body }),
    unfavoriteFileSuccessful: (body) => ({ type: folderActionTypes.unfavoriteFileSuccessful, payload: body }),
    deleteFile: (body) => ({ type: folderActionTypes.deleteFile, payload: body }),
    deleteFileSuccessful: (body) => ({ type: folderActionTypes.deleteFileSuccessful, payload: body }),
    recoverFile: (body) => ({ type: folderActionTypes.recoverFile, payload: body }),
    recoverFileSuccessful: (body) => ({ type: folderActionTypes.recoverFileSuccessful, payload: body }),
}

