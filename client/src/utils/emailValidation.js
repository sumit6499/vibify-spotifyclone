const emailRegEx = /[a-zA-Z0-9]@gmail.com/;

export default function (email) {
  return emailRegEx.test(email);
}
