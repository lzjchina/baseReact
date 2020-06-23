import React, { Component } from "react";
import { connect } from "react-redux";
import {
  add,
  del,
  addTodo,
  delTodo,
  toggleTodo,
  setVisibi
} from "../../store/actions/test";

import "./Test.scss";

@connect(state => ({
  num: state.num,
  todoList: state.todoList,
  setVisibi: state.setVisibi
}))
class TodoList extends Component {
  add() {
    this.props.dispatch(add({ type: "ADD", n: this.input.value })); // this.props = store
  }
  del() {
    this.props.dispatch(del({ type: "DEL", n: this.input.value }));
  }
  add2() {
    //添加任务
    //取id唯 一值  取ID最大值
    //var a = lists.map(item =>item.id);  //[1,7,3]
    var maxID = Math.max(...this.props.todoList.map(item => item.id)) + 1;
    this.props.dispatch(
      addTodo({
        id: maxID,
        name: this.input.value,
        check: false,
        type: "ADD_TODO"
      })
    );
  }
  del2(id) {
    //删除任务
    this.props.dispatch(delTodo({ type: "DEL_TODO", id: id }));
  }
  toggleTodo(id) {
    //切换复选框
    this.props.dispatch(toggleTodo({ type: "TOGGLE_TODO", id: id }));
  }
  handleFilter(type) {
    //切换任务
    this.props.dispatch(setVisibi({ type: "SET_VISIBI", filter: type }));
  }
  render() {
    const { todoList, setVisibi } = this.props;
    var data = todoList;
    if (setVisibi.filter === "NULL") {
      data = todoList.filter(v => !v.check);
    } else if (setVisibi.filter === "COM") {
      data = todoList.filter(v => v.check);
    }
    return (
      <div>
        <div className="todo-tab">
          <div className="todo-tab_item">
            <b
              style={{
                color: setVisibi.filter === "ALL" ? "#f01414" : "#4d555d"
              }}
              onClick={() => this.handleFilter("ALL")}
            >
              全部任务
            </b>
          </div>
          <div className="todo-tab_item">
            <b
              style={{
                color: setVisibi.filter === "NULL" ? "#f01414" : "#4d555d"
              }}
              onClick={() => this.handleFilter("NULL")}
            >
              待办任务
            </b>
          </div>
          <div className="todo-tab_item">
            <b
              style={{
                color: setVisibi.filter === "COM" ? "#f01414" : "#4d555d"
              }}
              onClick={() => this.handleFilter("COM")}
            >
              已完成任务
            </b>
          </div>
        </div>
        <ul className="list-group">
          {data.map((item,index) => {
            return (
              <li
                className="todo-list_li"
                key={item.id}
                style={{
                  textDecoration: item.check ? "line-through" : "none"
                }}
              >
                <input
                  type="checkbox"
                  className="check-box"
                  checked={item.check}
                  onChange={() => this.toggleTodo(item.id)}
                />
                {item.name}
                <button
                  className="todo-list_del"
                  onClick={() => this.del2(item.id)}
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul>
        <h1>{this.props.num}</h1>
        <input
          placeholder="你想做点什么"
          className="todo-input"
          ref={dom => (this.input = dom)}
        />
        <button type="submit" className="todo-btn" onClick={() => this.add2()}>
          添加任务
        </button>
        <button type="submit" className="todo-btn" onClick={() => this.add()}>
          add
        </button>
        <button type="submit" className="todo-btn" onClick={() => this.del()}>
          del
        </button>
      </div>
    );
  }
}
export default TodoList;
