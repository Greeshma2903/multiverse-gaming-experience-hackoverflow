import './Explore.css'
import data from "./data.json";
import VerticalCarousel from './Carousel';

const Explore = () => {

    return(
        <section id="explore" className='min-h-screen h-full bg-black flex flex-col py-8 items-center'>
            <h1 className='text-2xl md:text-5xl font-head text-gray-400 mt-8 mb-14'>Select your Universe!</h1>
            <div className="glow-on-hover h-[40rem] w-[20rem] md:h-[40rem] md:w-[40rem]">
            <VerticalCarousel data={data.slides} />
            </div>

        </section >
    )
}
export default Explore;