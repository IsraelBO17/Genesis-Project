import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex flex-col items-center justify-center w-max h-auto">
			<Image src="/logo.svg" alt='logo' width={89} height={55} />
			<span className="uppercase text-[#0C122C] not-italic font-bold leading-none">GENESIS CHMS</span>
		</div>
	)
}

export default Logo