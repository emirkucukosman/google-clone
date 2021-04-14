import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search?q=${search}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

          <Avatar url="https://avatars.githubusercontent.com/u/26205327?v=4" />
        </div>
      </header>

      <form 
        className="flex flex-col flex-grow items-center mt-8 sm:mt-32 w-4/5"
        onSubmit={searchSubmit}
      >
        <Image 
          src="https://cdn.webrazzi.com/uploads/2015/09/google-logo.png"
          height={150}
          width={300}
        />
        <div className="flex w-full mt-2 rounded-full border border-gray-200 px-5 py-3 items-center max-w-md hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input 
            type="text" 
            className="flex-grow focus:outline-none" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}

export default Home;