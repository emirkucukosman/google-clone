import HeaderOption from './HeaderOption'
import {
    SearchIcon,
    PhotographIcon,
    PlayIcon,
    NewspaperIcon,
    MapIcon,
    DotsVerticalIcon,    
} from '@heroicons/react/outline'

const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly border-b lg:justify-start lg:space-x-36 lg:pl-52">
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>

        </div>
    )
}

export default HeaderOptions
