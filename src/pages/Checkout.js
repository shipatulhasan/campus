import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  const { img,name, price, lesson, duration, instructor } = course;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    if(form === ''){
        toast.error('please fillup the required info')
        return
    }
    toast.success("Your order has been successfully placed");
    form.reset()
  };
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 ">
      <div class="px-4 py-4 mr-3 bg-slate-50 border border-slate-300 shadow-xl rounded">
        <img className="rounded w-full" src={img} alt="" />
        <div className="p-4">
        <h4 class="mt-5 text-4xl font-semibold text-gray-800 dark:text-gray-100">
          ${price}
        </h4>

        <h4 class="mt-2 text-base md:text-xl font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h4>
        

        <p class="mt-4 text-gray-800 dark:text-gray-300">
          <span className="font-bold">Insturctor: </span>
          {instructor}
        </p>
        <p class="mt-4 text-gray-800 dark:text-gray-300">
          <span className="font-bold">Lesson: </span>
          {lesson}
        </p>
        <p class="mt-4 text-gray-800 dark:text-gray-300">
          <span className="font-bold">Duration: </span>
          {duration}
        </p>
        </div>
   
      </div>
      <form action="" onSubmit={handleSubmit} className="p-10 bg-slate-50 border border-slate-300 shadow-xl rounded">
      <p  className="text-xl mb-4 font-bold leading-6 text-gray-800">
                   Please fill up the form to place an order
                </p>
        
          <label className="text-base font-medium leading-none text-gray-800">
            Full Name
            <input
              type="text"
              name="userName"
              className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </label>
    <div className="mt-4">
    <label className="pt-5 text-base font-medium leading-none text-gray-800 ">
            Email
            <input
              type="email"
              name="email"
              required
              className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </label>
    </div>
          
      

        <div className="mt-6">
            <p className="text-base mb-4 font-semibold">Payment Method</p>
        <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:none " aria-labelledby="country-option-1" aria-describedby="country-option-1" />
            <label htmlFor="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Paypal
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="payment" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:none " />
            <label htmlFor="payment" class="text-sm font-medium text-gray-900 ml-2 block">
            Bkash
            </label>

        </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        
        </div>

        <div className="mt-2">
          <button
            aria-label="create my account"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-blue-700 border rounded hover:bg-blue-900 py-4 w-full"
            type="submit"
          >
            Place an order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
