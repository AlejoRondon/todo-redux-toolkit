import React from 'react';
import './TodoCard.scss';

const TodoCard = ({ todo, onCardClick, onDeleteBtnClick, onViewBtnClick }) => {
  return (
    <div className="todo-card" onClick={(e) => onCardClick(e, todo.id)}>
      <div>
        <h3
          className={`${todo.done ? 'strikethrough-text' : ''}`}
        >{`${todo.title}`}</h3>
      </div>
      <div>
        <button
          onClick={(e) => onViewBtnClick(e, todo.id)}
          className="view-btn"
        >
          <i className="fas fa-trash-alt"></i> View
        </button>
        <button
          onClick={(e) => onDeleteBtnClick(e, todo.id)}
          className="delete-btn"
        >
          <i className="fas fa-trash-alt"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
