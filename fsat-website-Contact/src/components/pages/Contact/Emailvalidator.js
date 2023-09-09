import validator from 'validator';

export default function validateemail(email) {
  return validator.isEmail(email);
}
