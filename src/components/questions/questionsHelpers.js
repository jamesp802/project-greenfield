export const getDate = (date) => {
  const month = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const newDate = date.split("T").slice(0, 1).join();

  const dateArray = newDate.split("-");

  return (
    month[Number(dateArray[1]) - 1] +
    " " +
    Number(dateArray[2]) +
    ", " +
    dateArray[0]
  );
};

export const compareAnswers = (b, a) => {
  const helpfulnessA = a.helpfulness;
  const helpfulnessB = b.helpfulness;

  let comparison = 0;
  if (helpfulnessA > helpfulnessB) {
    comparison = 1;
  } else if (helpfulnessB > helpfulnessA) {
    comparison = -1;
  }
  return comparison;
};

export const compareQuestions = (b, a) => {
  const helpfulnessA = a.question_helpfulness;
  const helpfulnessB = b.question_helpfulness;

  let comparison = 0;
  if (helpfulnessA > helpfulnessB) {
    comparison = 1;
  } else if (helpfulnessB > helpfulnessA) {
    comparison = -1;
  }
  return comparison;
};

export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
};
