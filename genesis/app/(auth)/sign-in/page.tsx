/* eslint-disable react/no-unescaped-entities */
import SignInForm from "@/components/forms/sign-in"
import Link from "next/link"

const SignIn = () => {
    return (
      <div className="w-8/12 flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2.5 p-3">
            <h4 className="text-[2rem] not-italic font-medium leading-none tracking-wide">Welcome</h4>
            <p className="mb-0 text-2xl not-italic font-light leading-5">Let's sign you in</p>
        </div>
        <SignInForm />
        <p className="text-center font-light">Don't have an account?<Link href='/' className="font-normal ml-1">Sign in</Link></p>
        <Link href='/' className="text-center">Forgot password ?</Link>
      </div>
    )
  }
  
  export default SignIn