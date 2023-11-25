function Todo(props) {
  function deleteHandler() {

    

  }

  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button type="" className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
