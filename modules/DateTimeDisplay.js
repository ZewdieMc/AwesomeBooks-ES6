import { DateTime } from './luxon.js';

export default () => {
  const timeDisplay = document.querySelector('.date-div');
  const dt = DateTime.local().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  timeDisplay.textContent = dt;
};
