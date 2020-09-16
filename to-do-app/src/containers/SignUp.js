import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {signupUser} from '../actions/index'
const SignUp = (props) => {
  const initialValues = {
    email: '',
    password: '',
    name: '',
    passwordConfirm: '',
  }; 
  const onSubmit =  values => {
    // console.log("Formik data: ", values)
    
  };
  const validationSchema = Yup.object({
      name: Yup.string().required('Required').min(3, 'Name is too short at least 3'),
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().required('Required').min(8, 'Password is too short - should be 8 chars minimum.'),
      passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  const handleSignUp = (userData) => {
    props.signupUser(userData);
  }
  console.log('formik values: ', formik.values);
  const errorStyle = "text-red-700 text-xl tracking-wider font-medium";
  const inputAuthStyle = "transition duration-500 ease-in-out text-3xl bg-transparent border-b-2  outline-none ml-4 tracking-wide transform focus:border-blue-400";
  return ( 
     <div className="flex w-full  justify-center items-center flex-col ">
            <h1 className="text-4xl uppercase text-center mt-16 text-white font-medium pixel-font">Sign up Form</h1>
          <form onSubmit={formik.handleSubmit} className="text-white  h-64 flex flex-col mt-8">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" fill="#fff"/></svg>
                  <input {...formik.getFieldProps('name')} name="name"  placeholder="Write name" type="name" className={` ${inputAuthStyle} ${formik.touched.name && formik.errors.name ? 'border-red-700' : 'border-white'}`}></input>
                </div>
                {formik.touched.name && formik.errors.name ? <p className={errorStyle}>{formik.errors.name}</p> : null}
                <div className="flex items-center mt-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" fill="#fff"/></svg>
                  <input {...formik.getFieldProps('email')} name="email"  placeholder="Write email" type="email" className={` ${inputAuthStyle} ${formik.touched.email && formik.errors.email ? 'border-red-700' : 'border-white'}`}></input>
                </div>
                {formik.touched.email && formik.errors.email ? <p className={errorStyle}>{formik.errors.email}</p> : null}
                <div className="flex items-center mt-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" fill="#fff"/></svg>
                  <input {...formik.getFieldProps('password')} name="password"  placeholder="Password" type="password" className={` ${inputAuthStyle} ${formik.touched.password && formik.errors.password ? 'border-red-700' : 'border-white'}`}></input>
                </div>
                {formik.touched.password && formik.errors.password ? <p className={errorStyle}>{formik.errors.password}</p> : null}
                <div className="flex items-center mt-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M10 17c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm2-7v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8v-4zm11 16h-14v-10h14v10z" fill="#fff"/></svg>
                  <input {...formik.getFieldProps('passwordConfirm')} name="passwordConfirm"  placeholder="Password Confirm" type="password" className={` ${inputAuthStyle} ${formik.touched.passwordConfirm && formik.errors.passwordConfirm ? 'border-red-700' : 'border-white'}`}></input>
                </div>
                {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? <p className={errorStyle}>{formik.errors.passwordConfirm}</p> : null}
              <button onClick={() =>handleSignUp(formik.values)} type="submit" className="self-center transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 hover:scale-110 border-solid border border-gray-100 hover:bg-white hover:text-black outline-none mt-12 hover:border-0 ">Submit</button>
          </form>
     </div>
   );
}
 
export default connect(null, {signupUser})(SignUp);
