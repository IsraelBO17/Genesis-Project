/* eslint-disable react/no-unescaped-entities */
import SignUpForm from "@/components/forms/sign-up"
import Link from "next/link"

const SignUp = () => {
    return (
      <div className="w-8/12 flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2.5 p-3">
            <h4 className="text-[2rem] not-italic font-medium leading-none tracking-wide">Hello</h4>
            <p className="mb-0 text-2xl not-italic font-light leading-5">Let's get you started</p>
        </div>
        <SignUpForm />
        <p className="text-center font-light">Already have an account?<Link href='/' className="font-normal ml-1">Sign in</Link></p>
      </div>
    )
  }
  
  export default SignUp