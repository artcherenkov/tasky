const Board = (props) => {
  return (
    <section className="board container">
      {props.children}
      <button className="load-more" type="button">
        load more
      </button>
    </section>
  );
};

export default Board;
