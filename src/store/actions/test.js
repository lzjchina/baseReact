import { createAction } from "redux-actions";

export const test = createAction("TEST");
export const add = createAction("ADD");
export const del = createAction("DEL");
export const addTodo = createAction("ADD_TODO"); //添加任务
export const delTodo = createAction("DEL_TODO"); //删除任务
export const toggleTodo = createAction("TOGGLE_TODO"); //删除任务

export const setVisibi = createAction("SET_VISIBI"); //切换任务
