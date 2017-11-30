const locale = {
  week: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  ok: 'OK',
  today: 'Today',
  yesterday: 'Yesterday',
  last7Days: 'Last 7 Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds'
};

export default (isoWeek) => {
  if (isoWeek) {
    locale.week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  }
  return locale;
};
