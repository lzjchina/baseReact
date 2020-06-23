import { handleActions } from "redux-actions";

export const num = handleActions(
  {
    ADD: (state, action) => state + parseInt(action.payload.n), //action.payload  获取action对象 {type:'ADD',n:this.input.value}
    DEL: (state, action) => state - parseInt(action.payload.n)
  },
  0
);

//任务处理
var lists = [
  { id: 1, name: "手机", check: false },
  { id: 7, name: "包包", check: true },
  { id: 3, name: "化妆品", check: false }
];
export const todoList = handleActions(
  {
    ADD_TODO: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          check: action.payload.check
        }
      ];
    },
    DEL_TODO: (state, action) =>
      state.filter(item => item.id !== action.payload.id),
    TOGGLE_TODO: (state, action) => {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      });
    }
  },
  lists
);

const data = {
  filter: "ALL"
};
export const setVisibi = handleActions(
  {
    SET_VISIBI: (state, action) => action.payload //action.payload  获取action对象 {type:'ADD',n:this.input.value}
  },
  data
);
