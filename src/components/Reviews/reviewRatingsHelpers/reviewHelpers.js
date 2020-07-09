import Alert from 'react-bootstrap/Alert';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const getDate = (date) => {
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

export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert('You have entered an invalid email address!');
  return false;
};

export const alertModal = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      {console.log('im inside alert!')}
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
};
