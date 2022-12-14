import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import logo from '../../asset/brand/logo.png'
import { AuthContext } from '../../components/AuthProvider/AuthProvider';


const Registration = () => {

    const [error,setError] = useState('')
    const [viewPass, setViewPass] = useState(false)
    const [viewConfirmPass, setViewConfirmPass] = useState(false)
    const {signUpWithGoogle, createUser, setUserProfile, signUpWithGithub} = useContext(AuthContext)


    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        const confirmPass = form.confirmPassword.value
        const userName = form.userName.value
        const photoUrl = form.photo.value
        // console.log(email,email,pass,userName,photoUrl)
        

        if(pass!==confirmPass){
            setError('Both password should be matched')
            return
        }

        createUser(email,pass)
        .then(result=>{
            console.log(result.user)
            toast.success('Successfully registerd')
            handleUpdateProfile(userName,photoUrl)
            setError('')
            form.reset()
        })
        .catch(err=>{
            setError(err.message)
            console.error(err)
        })



    }
   
// signup with google
    const handleSignUpWithGoogle = ()=>{

        signUpWithGoogle()
        .then(result=>{
            setError('')
            console.log(result.user)
            toast.success('Successfully Registered')
        })
        .catch(err=>{
            console.error(err)
            setError(err.message)
        })
        
    }
  
    // signup with github

    const handleSignUpWithGithub = ()=>{

        signUpWithGithub()
        .then(result=>{
            setError('')
            console.log(result.user)
            toast.success('Successfully Registered')
        })
        .catch(err=>{
            console.error(err)
            setError(err.message)
        })
        
    }

    // update profile

    const handleUpdateProfile = (name,photoUrl)=>{

        const profile = {
            displayName:name,
            photoURL:photoUrl
        }

        setUserProfile(profile)
        .then(()=>{ })
        .catch(err=>console.error(err))
      
    }




    return (
        <div className="h-full w-full py-6 px-4 bg-center bg-no-repeat bg-cover bg-white ">
        <div className="flex flex-col items-center justify-center">
            <Link to='/'><img className='w-1/2 mx-auto' src={logo} alt="" /></Link>
            <div className="bg-white border border-slate-400 shadow-xl rounded md:w-1/2 w-full p-10 mt-6">
                <p    aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                    Sign up to buy your faviourite course
                </p>
                <p className="text-base mt-4 font-medium leading-none text-gray-800">
                    Already have account?{" "}
                    <Link to ='/login'   role="link" aria-label="Sign up here" className="text-base font-medium leading-none underline text-blue-700 cursor-pointer">
                        {" "}
                        Sign in here
                    </Link>
                </p>
                <div className='w-full flex items-center  gap-5 mt-5'>
                <button aria-label="Sign Up with google"
                  
                  onClick={handleSignUpWithGoogle}
                 >
                    <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                        <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                        <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                        <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                    </svg>
                  
                </button>
                <button aria-label="Sign Up with github"  onClick={handleSignUpWithGithub}>
                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                            fill="#333333"
                        />
                    </svg>
             
                </button>
                </div>
               
                
                <div className="w-full flex items-center justify-between py-5">
                    <hr className="w-full border-gray-800" />
                    <p className="text-base font-medium leading-4 px-2.5 text-gray-800">OR</p>
                    <hr className="w-full border-gray-800  " />
                </div>
                <form action="" onSubmit={handleSubmit}>
                <p className="text-base font-medium mb-5 text-red-600">{error}</p>
                    <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
                    
                    <label className="text-base font-medium leading-none text-gray-800">Full Name
                    <input type="text" name='userName' className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </label>
                
                
                    <label className="text-base font-medium leading-none text-gray-800">Email
                    <input type="email" name='email' required className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </label>
                </div>
                    
                
                <div className='mt-6'>
                    <label className="text-base font-medium leading-none text-gray-800">Profile Picture Link
                    <input type="text" name='photo' className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </label>
                </div>
                <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-2'>
                
                    <label className="text-base font-medium leading-none text-gray-800">Password
                    <div className="relative flex items-center justify-center">
                        <input type={viewPass?'text':'password'} name='password' required className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        
                        <div onClick={()=>setViewPass(!viewPass)} className="absolute right-0 mt-2 mr-3 cursor-pointer text-gray-600">

                            {
                                viewPass? <FaRegEyeSlash /> : <FaRegEye />
                            }
                            
                        </div>
                    </div>
                    </label>
                
                    <label className="text-base font-medium leading-none text-gray-800">Confirm Password
                    <div className="relative flex items-center justify-center">
                        <input type={viewConfirmPass?'text':'password'} name='confirmPassword' required className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        <div onClick={()=>setViewConfirmPass(!viewConfirmPass)} className="absolute right-0 mt-2 mr-3 cursor-pointer text-gray-600">
                        {
                                viewConfirmPass? <FaRegEyeSlash /> : <FaRegEye/>
                            }
                        </div>
                    </div>
                </label>
                
                </div>
                
                <div className="mt-8">
                    <button aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-blue-700 border rounded hover:bg-blue-900 py-4 w-full" type='submit'>
                        Create new account
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Registration;