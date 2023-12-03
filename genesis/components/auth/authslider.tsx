/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

const Authslider = () => {
  return (
    <div className='py-2.5 inline-flex flex-col justify-center items-center gap-10'>
        <Image src='/images/image-5.png' alt='Attendance Tracking' width={240} height={160} />
        <div className="text-center text-xl leading-10 font-light">
            <h5 className="font-medium text-3xl leading-10">Attendance Tracking</h5>
            <p className="tracking-wider">Keep a pulse on your congregation's engagement and growth. Our attendance tracking feature allows you to effortlessly record and analyze attendance trends, ensuring no one slips through the cracks.</p>
        </div>
    </div>
  )
}

export default Authslider