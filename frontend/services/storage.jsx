import axios from 'axios';
import initApi from "../apiConfig";
// import constant from '../../config/constant'
import constant from '../config/constant';
import { stringify } from 'query-string';
import { property } from 'lodash';

const access_token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InF1YW5kaW5oIiwiZW1haWwiOiJoYWlxdWFuNTM5NkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImFjdGl2ZSI6dHJ1ZSwiYmFsYW5jZSI6MCwicmVmZXJyYWxfY29kZSI6bnVsbCwicGxhbiI6eyJwbGFuX3R5cGUiOiJwcm8iLCJkdWVfZGF0ZSI6MH0sIm5hbWUiOiJxdWFuZGluaCIsInBob25lIjoiMDEyMzQ1Njc4OSIsImJpcnRoZGF5IjoiMDEvMDEvMTk3MCIsInVzZXJfaWQiOiI1ZjJiNmU1NzE5ZWRhNDBmZWY0YjcwMzciLCJleHAiOjE2NTI1Mzk1NTN9.TtzqMXSTr4yTmT0W9tY-iZsVHAoXthw-RaNdvnS-tdI';

export async function getFolders(params) {
    const temp = params.folder_id;
    delete params.folder_id;
    const filter = stringify(params)
    const respons = await initApi(true).get(`/folders/${temp}?${filter}`);
    console.log(respons);
    return respons
}
export async function createFolders(params) {
    const respons = await initApi(true).post(`/folders`, params);
    // console.log(respons);
    return respons
}
export async function uploadFile(params) {
    const respons = await initApi(true).post(`/files`, params);
    // console.log(respons);
    return respons
}
export async function favoriteFolder(params) {
    const respons = await initApi(true).put(`/folders/${params}/favorite`);
    // console.log(123654, respons);
    return respons
}
export async function movetotrashFolder(params) {
    const respons = await initApi(true).put(`/folders/${params}/trash`);
    // console.log(respons);
    return respons
}
export async function renameFile(params) {
    const respons = await initApi(true).put(`/files/${params.file_id}/rename`, params);
    // console.log(respons);
    return respons
}
export async function getFavoriteFolder(params) {
    const respons = await initApi(true).get(`/folder/${params}/favorite`);
    return respons
}
export async function getTrashFolder(params) {
    const respons = await initApi(true).get(`/folder/${params}/trash`);
    console.log(respons);
    return respons
}
export async function downloadFile(params) {
    const respons = await initApi(true).get(`/files/${params}/download`);
    // console.log(respons);
    return respons
}
export async function downloadFolder(params) {
    const respons = await initApi(true).get(`/folders/${params}/download`);
    // console.log(respons);
    return respons
}
export async function renameFolder(params) {
    const respons = await initApi(true).put(`/folders/${params.folder_id}/rename`, params);
    // console.log(respons);
    return respons
}
export async function favoriteFile(params) {
    const respons = await initApi(true).put(`/files/${params}/favorite`);
    // console.log(respons);
    return respons
}
export async function unfavoriteFolder(params) {
    const respons = await initApi(true).delete(`/folders/${params}/favorite`);
    // console.log(respons);
    return respons
}
export async function unfavoriteFile(params) {
    const respons = await initApi(true).delete(`/files/${params}/favorite`);
    // console.log(respons);
    return respons
}
export async function deleteFolder(params) {
    // console.log(params);
    const respons = await initApi(true).delete(`/folders/${params}/delete`);
    // console.log("123456", respons);
    return respons
}
export async function deleteFile(params) {
    // console.log(params);
    const respons = await initApi(true).delete(`/files/${params}/delete`);
    // console.log("123456", respons);
    return respons
}
export async function moveFolder(params) {
    const respons = await initApi(true).put(`/folders/${params.folder_id}/move`, params);
    // console.log(respons);
    return respons
}
export async function recoverFolder(params) {
    const respons = await initApi(true).put(`/folders/${params}/recover`);
    // console.log(respons);
    return respons
}
export async function recoverFile(params) {
    const respons = await initApi(true).put(`/files/${params}/recover`);
    // console.log(respons);
    return respons
}
export async function copyFolder(params) {
    const respons = await initApi(true).put(`/folders/${params.folder_id}/copy`, params);
    // console.log(respons);
    return respons
}
export async function moveFile(params) {
    const respons = await initApi(true).put(`/files/${params.file_id}/move`, params);
    // console.log(respons);
    return respons
}
export async function copyFile(params) {
    const respons = await initApi(true).put(`/files/${params.file_id}/copy`, params);
    // console.log(respons);
    return respons
}
export async function movetotrashFile(params) {
    const respons = await initApi(true).put(`/files/${params}/trash`, params);
    // console.log(respons);
    return respons
}
export async function monitorFolder(params) {
    const respons = await initApi(true).get(`/folders/${params}/monitor`);
    // console.log(respons);
    return respons
}