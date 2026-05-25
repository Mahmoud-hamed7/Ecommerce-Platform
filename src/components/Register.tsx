import { useContext, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";
import * as yup from "yup";
import { UserContext } from "../contexts/UserContext";

let validationSchema = yup.object().shape({
 name: yup
  .string()
  .required("Name is required")
  .min(3, "Name must be at least 3 characters")
  .max(10, "Name cannot exceed 10 characters"),

email: yup
  .string()
  .email("Please enter a valid email address")
  .required("Email is required"),

phone: yup
  .string()
  .matches(/^01[0125][0-9]{8}$/, "Please enter a valid Egyptian phone number")
  .required("Phone number is required"),

password: yup
  .string()
  .matches(
    /^[A-Z][a-z 0-9]{5,10}$/,
    "Password must start with an uppercase letter"
  )
  .required("Password is required"),

rePassword: yup
  .string()
  .oneOf([yup.ref("password")], "Passwords must match")
  .required("Please confirm your password")
});

  export default function Register() {
    const {setUserLogin} = useContext(UserContext)
   
    
    const [apiErorr, setApiErorr] = useState("");
    const [isLoading, setisLoading] = useState(false)
    let navigte = useNavigate();

    function handleRegister(formValues: any) {
            setisLoading(true)

    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", formValues)
      
      .then((res) => {
        // console.log(res);
        
      if (res.data.message =="success") {
        localStorage.setItem('userToken',res.data.token)
        setUserLogin(res.data.token)
        setisLoading(false)
        navigte('/login')
      }
      })

      .catch((apiRespone) => {
        setApiErorr(apiRespone?.response?.data?.message);
         setisLoading(false)
      });
  }

  // try {
  //   let { data } = await axios.post(
  //     "https://ecommerce.routemisr.com/api/v1/auth/signup",
  //     formValues,
  //   );
  //   console.log(data);
  //   if (data.message === "success") {
  //     navigte("/");
  //   }
  // } catch (error: any) {
  //   console.log(error.response.data); // ← هنا هتشوف سبب الـ 400
  // }

  // function VaildtaiomFOrm(value: any) {
  //   let errors: Record<string, any> = {};
  //   if (!value.name) {
  //     errors.name = "name is requierd";
  //   } else if (!/^[a-zA-Z\s'-]{2,30}$/.test(value.name)) {
  //     errors.name = "you must start with a upper case ";
  //   }

  //   if (!value.email) {
  //     errors.email = "email is requierd";
  //   } else if (
  //     !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //       value.email,
  //     )
  //   ) {
  //     errors.email = "you must start with a put @ gmail .com  ";
  //   }

  //   if  (!value.phone  ){
  //     errors.phone = " phone is requierd "
  //   } else if ( /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value.phone)){
  //      errors.phone = " you must write an egyption number "
  //   }

  //   return errors;
  // }

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      <div className="max-w-7xl mt-28 mx-auto">
        <h1 className=" font-bold text-4xl text-green-600 mb-8 "> Register </h1>
        <div className=" flex w-full  justify-between ">
          <form className="w-full "  onSubmit={formik.handleSubmit}>
            {apiErorr && (
              <div
                className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
                role="alert"
              >
                {apiErorr}
              </div>
            )}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-green-700 bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
              />

              <label
                htmlFor="name"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:inset-s-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                enter your name :
              </label>
              {formik.errors.name && formik.touched.name && (
                <div
                  className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
                  role="alert"
                >
                  <p>{formik.errors.name}</p>
                </div>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-green-700 bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
              />

              <label
                htmlFor="email"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:inset-s-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                enter your email :
              </label>

              {formik.errors.email && formik.touched.email && (
                <div
                  className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
                  role="alert"
                >
                  <p>{formik.errors.email}</p>
                </div>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-green-700 bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
              />

              <label
                htmlFor="phone"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:inset-s-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                enter your phone :
              </label>

              {formik.touched.phone && formik.errors.phone && (
                <div
                  className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
                  role="alert"
                >
                  {formik.errors.phone}
                </div>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-green-700 bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
              />

              <label
                htmlFor="password"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:inset-s-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                enter your password :
              </label>

              {formik.errors.password && formik.touched.password && (
                <div
                  className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
                  role="alert"
                >
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="rePassword"
                id="rePassword"
                className="block py-2.5 px-0 w-full text-sm text-green-700 bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
              />

              <label
                htmlFor="rePassword"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:inset-s-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                enter your rePassword :
              </label>

              {formik.errors.rePassword && formik.touched.rePassword && (
                <div
                  className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
                  role="alert"
                >
                  {formik.errors.rePassword}
                </div>
              )}
            </div>
          
          {isLoading ? <div role="status" className="flex items-center justify-center">
  <svg
    aria-hidden="true"
    className="w-8 h-8 text-gray-200 animate-spin fill-green-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
  <span className="sr-only">Loading...</span>
</div> :<button
                type="submit"
                className= " mt-8 w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:outline-none focus:border-green-500 shadow-sm font-medium rounded-lg text-sm px-4 py-2.5 transition-colors"
              >
                Submit


               
              </button>}
              
              
            
          </form>
        </div>
      </div>
    </>
  );
}
