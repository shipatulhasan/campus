import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../asset/brand/logo.png";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const ResetPass = () => {
  const [error, setError] = useState("");
  const { resetPass } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPass(email)
      .then(() => {
        toast(
          "Please check your email to reset password.\n\nIf you didn't found it on inbox then check spam box. Thank you.",
          {
            duration: 6000,
          }
        );
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  return (
    <div className="h-full w-full py-5 px-4 bg-center bg-no-repeat bg-cover bg-white ">
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <img className="w-1/2 mx-auto" src={logo} alt="" />
        </Link>
        <div className="bg-white border border-slate-400 shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-6">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Reset your password
          </p>

          <form action="" onSubmit={handleReset}>
            <p className="text-base font-medium mt-3 text-red-600">{error}</p>
            <div className="mt-4">
              <label className="text-base font-medium leading-none text-gray-800">
                Email
                <input
                  aria-label="enter email adress"
                  type="email"
                  name="email"
                  className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </label>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button
                aria-label="create my account"
                className="px-6 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-red-600 border rounded hover:bg-red-700 "
              >
                Reset
              </button>
              <Link
                to="/login"
                tabIndex={0}
                role="link"
                className=" text-base font-medium leading-none underline text-blue-700 cursor-pointer"
              >
                <p className="mt-4">Back to login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
