import { Link } from "react-router-dom";
import './ShortProjects.css';
import { MdOutlineArrowOutward } from "react-icons/md";

const ShortProjects = () => {
    return (
        <div className="bg-stone-200 py-[50px]">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <h1 className="text-4xl md:text-5xl text-center pb-12 w-1/2 mx-auto font-semibold text-blue-900">Explore our recent projects</h1>

                <div className="flex flex-wrap gap-3 justify-center">

                    <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p1.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
                            <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
                            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
                        </div>
                        <div className="w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center project-card-details transition-all duration-500">
                            <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center"><MdOutlineArrowOutward className="size-7 text-blue-700" /></button>
                        </div>
                    </Link>

                    <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p2.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
                            <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
                            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
                        </div>
                        <div className="w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center project-card-details transition-all duration-500">
                            <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center"><MdOutlineArrowOutward className="size-7 text-blue-700" /></button>
                        </div>
                    </Link>

                    <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p3.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
                            <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
                            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
                        </div>
                        <div className="w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center project-card-details transition-all duration-500">
                            <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center"><MdOutlineArrowOutward className="size-7 text-blue-700" /></button>
                        </div>
                    </Link>

                    <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p4.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
                            <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
                            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
                        </div>
                        <div className="w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center project-card-details transition-all duration-500">
                            <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center"><MdOutlineArrowOutward className="size-7 text-blue-700" /></button>
                        </div>
                    </Link>

                    <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p5.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[812px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
                            <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
                            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
                        </div>
                        <div className="w-full h-full bg-gradient-to-t from-blue-700 to-transparent absolute left-0 right-0 flex items-center justify-center project-card-details transition-all duration-500">
                            <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center"><MdOutlineArrowOutward className="size-7 text-blue-700" /></button>
                        </div>
                    </Link>

                </div>

                <div className="text-center">
                    <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)] my-5'>
                        <p className='animation-top w-[140px] lg:w-[200px] text-center'>View All Works</p>
                        <p className='animation-bottom w-[140px] lg:w-[200px] text-center'>View All Works</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShortProjects;