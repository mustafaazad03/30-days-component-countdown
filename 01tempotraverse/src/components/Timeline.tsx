'use client'
import { useState } from "react";

interface details {
	title: string;
	content: string;
}

interface Timeline {
	content: string;
	title: string;
	endpoint: details[];
	id: number;
}

const Timeline = ({ content, title, endpoint, id }: Timeline) => {
	const [hover, setHover] = useState(false);
	const first = id === 0;
	const last = id === endpoint.length - 1;
	return (
		// Timeline component
		<div className=" sm:mx-auto w-full px-2 bg-black">
			<div className="relative text-white antialiased text-sm font-semibold transition-all duration-200 sm:h-40 h-60">
				{/* Vertical bar running through middle */}
				<div
					className={`sm:block z-0 w-[1px] ${
						hover ? "bg-accent-dark" : "bg-white"
					} absolute h-full sm:left-[35%] left-[5%] ${
						first ? "top-[5rem] h-[30%]" : ""
					} ${last ? "bottom-[10rem] sm:bottom-[50%] h-[25%] sm:h-1/2" : ""} ${
						last && "h-[5rem]"
					}`}
				></div>

				<div
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					className={`h-full z-10 ${
						hover
							? "bg-primary-dark"
							: ""
					} `}
				>
					<div className="flex flex-col pt-6 sm:pt-0 sm:flex-row sm:items-center">
						<div className="flex justify-start sm:w-[60%] w-[80%] mx-auto items-center">
							<div className="w-full h-fit sm:h-[10rem] sm:pr-8 flex items-center">
								<div
									className={`sm:p-4 px-4 sm:block h-fit my-auto lg:text-[24px] text-2xl sm:text-xl pt-4 ${
										hover ? "text-primary-light" : "text-secondary-light"
									} font-semibold sm:max-w-[20rem] max-w-lg sm:leading-9 leading-7 lg:ml-[20%] sm:ml-[10%] rounded`}
								>
									{title}
								</div>
							</div>
						</div>
						<div
							className={`rounded-full z-10 bg-accent-dark border ${
								hover
									? "sm:w-12 sm:h-12 w-8 h-8 border-primary-light"
									: "w-5 h-5 border-white"
							} absolute rotate-90 sm:left-[35%] left-[5%] top-[5rem] sm:top-[4rem] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center`}
						>
							{hover && (
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.0247 15.0581L17.083 9.99974L12.0247 4.94141"
										stroke="#E2E8DD"
										strokeWidth="1.25"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M2.91641 10L16.9414 10"
										stroke="#E2E8DD"
										strokeWidth="1.25"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							)}
						</div>
						<div className="flex justify-end w-full mx-auto items-center">
							<div className="sm:w-full w-[90%] sm:pl-8">
								<div
									className={`p-4 lg:text-lg sm:block ${
										hover ? "text-white" : "text-primary-dark"
									} sm:max-w-[688px] max-w-3xl font-normal rounded`}
								>
									{content}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
