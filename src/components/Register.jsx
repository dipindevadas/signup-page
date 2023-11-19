import React from "react";
import { useState } from "react";
import Validation from "../Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookIcon from "../icons/Facebook";
import GoogleIcon from "../icons/GoogleIcon";
import Twitter from "../icons/Twitter";

function Register() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });

    //its clear the error when validation passes
    const fieldErrors = Validation({ [name]: value });
    setErrors((prev) => {
      return { ...prev, [name]: fieldErrors[name] || "" };
    });
  };

  const handleTermsChange = () => {
    setTermsAccepted((prev) => !prev);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const validationErrors = Validation(userDetails);
    setErrors(validationErrors);

    if (userDetails.password !== userDetails.confirmPassword) {
      toast.warning("Password and Confirm Password must match.");
      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      toast(" Registration Successfull");
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  };

  const gradientStyle = {
    backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
  };

  const backgroundStyle = {
    backgroundImage:
      "url('https://w0.peakpx.com/wallpaper/692/679/HD-wallpaper-purple-nature-nature-orange-thumbnail.jpg')",
  };
  return (
    <div className="min-h-screen py-20" style={gradientStyle}>
      <ToastContainer />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto overflow-hidden login_container">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center login-bg"
            style={backgroundStyle}
          >
            <h1 className="text-white text-4xl font-bold mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                You've been added to our mailing list and will now be among thye
                first to hear about new arrivals, big events ans specxial offers{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-8 px-12">
            <h2 className="text-3xl font-semibold mb-4">SignUp</h2>
            <p className="mb-6">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={submitForm}>
              <div className="mt-6 input-wrapper">
                {/* <label className='text-label' htmlFor='Password'>Password</label> */}
                <input
                  type="text"
                  placeholder="Fullname"
                  name="name"
                  className="border border-gray-400 py-1.5 px-2 w-full rounded-sm focus: outline-none input-style"
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-start  text-red-600 error-msg">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="mt-6 input-wrapper">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="border border-gray-400 py-1.5 px-2 w-full rounded-sm  focus: outline-none input-style "
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-start text-red-600 error-msg">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="mt-6 input-wrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1.5 px-2 w-full rounded-sm  focus: outline-none input-style"
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-start text-red-600 error-msg">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="mt-6 input-wrapper">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1.5 px-2 w-full rounded-sm focus: outline-none input-style"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="text-start text-red-600 error-msg">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="mt-6 xs:text-center md:text-left">
                <input
                  type="checkbox"
                  className="border border-gray-400 mr-2"
                  onChange={handleTermsChange}
                />
                <span className="text-xs">
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  className={`w-full bg-purple-500 py-2 text-center text-white rounded-md hover:bg-purple-600  ${
                    !termsAccepted ? "opacity-50 cursor-not-allowed " : ""
                  }`}
                  disabled={!termsAccepted}
                >
                  Register
                </button>
              </div>
            </form>

            <div className="mt-6 mb-4 flex justify-center text-center">
              <div className="hr-line">
                <span className="continue-label">Or continue with</span>
              </div>
            </div>

            <div className="flex justify-center items-center social-icons gap-4">
              <a href="#">
                <GoogleIcon />
              </a>

              <a href="#">
                <FacebookIcon />
              </a>

              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
