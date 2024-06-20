//validates email using regex

const emailRegEx = /[a-zA-Z0-9]@gmail.com/;

export default function (email:string):boolean {
  return emailRegEx.test(email);
}
