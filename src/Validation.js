export default function Validation(userDetails) {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

  if (userDetails.name === "") {
    errors.name = "Name is Required!";
  }

  if (userDetails.email === "") {
    errors.email = "Email is Required";
  } else if (!email_pattern.test(userDetails.email)) {
    errors.email = "Email did'nt match";
  }

  if (userDetails.password === "") {
    errors.password = "Password is Required";
  } else if (!password_pattern.test(userDetails.password)) {
    errors.password = "Password did'nt match";
  }

  if (userDetails.confirmPassword === "") {
    errors.confirmPassword = "Confirm Password is Required!";
  }

  return errors;
}
