import Image from 'next/image'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useState } from 'react';

const ResultsHeader = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?q=${search}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://cdn.webrazzi.com/uploads/2015/09/google-logo.png"
                    height={60}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form 
                    className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
                    onSubmit={handleSearchSubmit}
                >
                    <input
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <XIcon 
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3" 
                        onClick={() => setSearch("")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-200" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                </form>

                <Avatar 
                    url="https://avatars.githubusercontent.com/u/26205327?v=4" 
                    className="ml-auto" 
                />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default ResultsHeader
