const Sort = () => {
  return (
    <div className="board__filter-list">
      <a href="/#" className="board__filter" data-sort-type="default">
        SORT BY DEFAULT
      </a>
      <a href="/#" className="board__filter" data-sort-type="date-up">
        SORT BY DATE up
      </a>
      <a href="/#" className="board__filter" data-sort-type="date-down">
        SORT BY DATE down
      </a>
    </div>
  );
};

export default Sort;
