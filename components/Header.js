import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		if (!term) return;

		router.push(`/search?term=${term}`);
	};
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
					height={40}
					width={120}
					onClick={() => router.push("/")}
					className="cursor-pointer"
				/>
				<form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
					<input
						ref={searchInputRef}
						className="flex-grow w-full focus:outline-none"
						type="text"
					/>
					<XIcon
						className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
						onClick={() => (searchInputRef.current.value = "")}
					/>
					<MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
					<SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					className="ml-auto"
					url="https://lh3.googleusercontent.com/R29fnXy2JQ_Mov4Jf4X5tonLal1-Sn-AVXusSwQm5LroE4FOwCgkFAEoWHD6FavzwohqtSIrxp_txAYAVA-T8iYer8gZatlwibGd9OXDu8H2JqYJZW_eCFjP_GQpd1Kpa6KDPDjDPxpBL_MtKkV3eZ3CjErqcRfolhG3YhQEaH9iVNrZXaqAnmnQnn2bCQowTuVm6RRwnwdTUa2wpvQftU0cOvC7P2XzFB4uZEFhoyDgEo5Gd5FG0JI6GDdJMpo0qTZiwZmAH76yI6q2Mbb6kJ86a6OgmQOx8zfMe-xBxUF0PJhlEMll2zHGe4ufbHTec99iMCZ9qRlfZn8tGrbHOENeZmr4wIx5cxYEKrz36_gNU3gvY2eSSRyiewsfm4tdwmgqFhwl59ai2vnypjyyzppkHXkxQOTaZz6ZRrsfXxw4zXEtOVec0VLEwtbbJZDGFFfmvgJZFRiS-zNgPhTKBJR_gkQiMYqgnCczsWwJjMs3VEdhbugiwdkULgXmB5JSxGYY5VfjMm_jnWPNvRlhowJVJxfN_nrqkqXsJUKJh4vuVWC5ouS7pbFhqqP9h1LGHZBsV-RhsJD7p1rAeox4iAAXYjbWKJWshVR0f71ZdfkPwCwIyOPC-Lxf2pPMMC2G6QyeEGJalXvntTvx8b4Ca-xvESnAeU4nDpSvNRg6XxCCMcT57vzG2cW7ogjvvFzqEHPSaNUHy1isVZjb6WI79Ebo=s1080-no?authuser=0"
				/>
			</div>
			{/* Header Options */}
			<HeaderOptions />
		</header>
	);
}

export default Header;
