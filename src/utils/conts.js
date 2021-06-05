import { nanoid } from "nanoid";

export const DEFAULT_TASK = {
  id: nanoid(),
  color: "black",
  description: "Введите заголовок задачи",
  dueDate: null,
  isArchived: false,
  isFavorite: false,
  repeatingDays: {
    mo: false,
    tu: false,
    we: false,
    th: false,
    fr: false,
    sa: false,
    su: false,
  },
};
