import Authslider from '@/components/auth/authslider'
import Logo from '@/components/logo'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        
        <div className="flex justify-center items-center w-full min-h-screen overflow-hidden px-20 py-12 bg-[#E6E8ED]">
            <div className="w-full h-[58.375rem] flex justify-center items-start">
                <div className="w-6/12 h-full shrink-0 rounded-l-[0.63rem] shadow-card p-9 flex flex-col justify-between bg-[#EBEDF0]">
                    <Logo />
                    <Authslider />
                    <p className='mb-0 text-center text-lg non-italic font-medium leading-none tracking-wide'>Copyright 2023. All rights reserved.</p>
                </div>
                <div className="w-6/12 h-full shrink-0 rounded-r-[0.63rem] shadow-card bg-white flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    )
}


