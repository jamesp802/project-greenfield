const getDate = (date) => {
  const month = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const newDate = date.split('T').slice(0, 1).join();

  const dateArray = newDate.split('-');

  return (
    month[Number(dateArray[1]) - 1] +
    ' ' +
    Number(dateArray[2]) +
    ', ' +
    dateArray[0]
  );
};

export default getDate;
