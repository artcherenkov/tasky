const Header = () => {
  return (
    <>
      <section className="main__control control container">
        <h1 className="control__title">TASKMANAGER</h1>
        <section className="control__btn-wrap">
          <button className="control__label control__label--new-task">
            + ADD NEW TASK
          </button>
        </section>
      </section>
    </>
  );
};

export default Header;
