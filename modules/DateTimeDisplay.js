export default () => {
  // eslint-disable-next-line no-undef
  const { DateTime } = luxon;
  const timeDisplay = document.querySelector('.date-div');
  const dt = DateTime.local().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  timeDisplay.textContent = dt;
};
