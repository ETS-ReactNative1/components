function validateEmail(email) {
  const expression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return expression.test(String(email).toLowerCase());
}

function isEmailExist(email, emailsArray = []) {
  return !!emailsArray.find((existingEmail) => existingEmail.toLowerCase() === email.toLowerCase());
}

export { validateEmail, isEmailExist };
