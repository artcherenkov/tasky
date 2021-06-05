import classnames from "classnames";
import moment from "moment";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getEditingTaskId, getTaskById } from "../../store/app-store/selectors";
import IconWave from "../IconWave/IconWave";
import { loadTask, setTaskToEdit } from "../../store/app-store/actions";

const EditTask = () => {
  const dispatch = useDispatch();
  const editingTaskId = useSelector(getEditingTaskId, shallowEqual);
  const task = useSelector(getTaskById(editingTaskId), shallowEqual);

  const { description, color, dueDate, repeatingDays } = task;
  const isRepeating = Object.values(repeatingDays).some((d) => d);
  const isExpired = moment(dueDate).isBefore(moment());

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loadTask(task));
    dispatch(setTaskToEdit(-1));
  };

  return (
    <article
      className={classnames("card", `card--${color}`, "card--edit", {
        "card--repeat": isRepeating,
        "card--deadline": isExpired,
      })}
    >
      <form className="card__form" method="get" onSubmit={onSubmit}>
        <div className="card__inner">
          <div className="card__color-bar">
            <IconWave color={color} />
          </div>

          <div className="card__textarea-wrap">
            <label>
              <textarea
                className="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >
                {description}
              </textarea>
            </label>
          </div>

          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <button className="card__date-deadline-toggle" type="button">
                  date: <span className="card__date-status">no</span>
                </button>

                <fieldset className="card__date-deadline" disabled>
                  <label className="card__input-deadline-wrap">
                    <input
                      className="card__date"
                      type="text"
                      placeholder="23 September"
                      name="date"
                    />
                  </label>
                </fieldset>

                <button className="card__repeat-toggle" type="button">
                  repeat:<span className="card__repeat-status">no</span>
                </button>

                <fieldset className="card__repeat-days" disabled>
                  <div className="card__repeat-days-inner">
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-mo-1"
                      name="repeat"
                      value="mo"
                    />
                    <label className="card__repeat-day" htmlFor="repeat-mo-1">
                      mo
                    </label>
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-tu-1"
                      name="repeat"
                      value="tu"
                      checked
                    />
                    <label className="card__repeat-day" htmlFor="repeat-tu-1">
                      tu
                    </label>
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-we-1"
                      name="repeat"
                      value="we"
                    />
                    <label className="card__repeat-day" htmlFor="repeat-we-1">
                      we
                    </label>
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-th-1"
                      name="repeat"
                      value="th"
                    />
                    <label className="card__repeat-day" htmlFor="repeat-th-1">
                      th
                    </label>
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-fr-1"
                      name="repeat"
                      value="fr"
                      checked
                    />
                    <label className="card__repeat-day" htmlFor="repeat-fr-1">
                      fr
                    </label>
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      name="repeat"
                      value="sa"
                      id="repeat-sa-1"
                    />
                    <label className="card__repeat-day" htmlFor="repeat-sa-1">
                      sa
                    </label>
                    <input
                      className="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-su-1"
                      name="repeat"
                      value="su"
                      checked
                    />
                    <label className="card__repeat-day" htmlFor="repeat-su-1">
                      su
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="card__colors-inner">
              <h3 className="card__colors-title">Color</h3>
              <div className="card__colors-wrap">
                <input
                  type="radio"
                  id="color-black-1"
                  className="
                          card__color-input card__color-input--black
                          visually-hidden
                        "
                  name="color"
                  value="black"
                  checked
                />
                <label
                  htmlFor="color-black-1"
                  className="card__color card__color--black"
                >
                  black
                </label>
                <input
                  type="radio"
                  id="color-yellow-1"
                  className="
                          card__color-input card__color-input--yellow
                          visually-hidden
                        "
                  name="color"
                  value="yellow"
                />
                <label
                  htmlFor="color-yellow-1"
                  className="card__color card__color--yellow"
                >
                  yellow
                </label>
                <input
                  type="radio"
                  id="color-blue-1"
                  className="
                          card__color-input card__color-input--blue
                          visually-hidden
                        "
                  name="color"
                  value="blue"
                />
                <label
                  htmlFor="color-blue-1"
                  className="card__color card__color--blue"
                >
                  blue
                </label>
                <input
                  type="radio"
                  id="color-green-1"
                  className="
                          card__color-input card__color-input--green
                          visually-hidden
                        "
                  name="color"
                  value="green"
                />
                <label
                  htmlFor="color-green-1"
                  className="card__color card__color--green"
                >
                  green
                </label>
                <input
                  type="radio"
                  id="color-pink-1"
                  className="
                          card__color-input card__color-input--pink
                          visually-hidden
                        "
                  name="color"
                  value="pink"
                />
                <label
                  htmlFor="color-pink-1"
                  className="card__color card__color--pink"
                >
                  pink
                </label>
              </div>
            </div>
          </div>

          <div className="card__status-btns">
            <button className="card__save" type="submit">
              save
            </button>
            <button className="card__delete" type="button">
              delete
            </button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default EditTask;
