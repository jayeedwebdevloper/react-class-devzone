import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import './teams.css'
import { AiFillInstagram } from "react-icons/ai"

export default function Teams() {

    const teamsData = [
        {
            id: 1,
            img: "https://optechanimation1.netlify.app/assets/images/team/team1.png",
            name: "Marvin McKinney",
            designation: "CEO & Founder",
            linkedin: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 2,
            img: "https://optechanimation1.netlify.app/assets/images/team/team2.png",
            name: "Sophia Rodriguez",
            designation: "CEO & Founder",
            linkedin: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 3,
            img: "https://optechanimation1.netlify.app/assets/images/team/team3.png",
            name: "Marvin McKinney",
            designation: "CEO & Founder",
            linkedin: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 4,
            img: "https://optechanimation1.netlify.app/assets/images/team/team4.png",
            name: "Alexander Cameron",
            designation: "CEO & Founder",
            linkedin: "#",
            twitter: "#",
            instagram: "#"
        },
    ]

    return (
        <div className="bg-blue-950 py-[50px]">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <h1 className="text-4xl md:text-5xl text-center pb-12 w-1/2 mx-auto font-semibold text-white">Our expert team is always ready to help you</h1>

                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        teamsData?.map((team, i) => (
                            <div key={i} className="w-full sm:w-[300px] bg-white rounded-lg overflow-hidden relative team-card">
                                <img className="w-full object-cover h-[300px] hover:scale-110 scale-100 transition-all duration-300" src={team?.img} alt="" />

                                <div className="bg-white w-full py-5 px-3">
                                    <h4 className="text-xl text-blue-800 font-bold tracking-wide">{team?.name}</h4>
                                    <p className="pt-1 text-slate-500">{team?.designation}</p>
                                </div>

                                <div className="flex flex-col gap-3 absolute social-icons transition-all duration-300">
                                    <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to="#">
                                        <FaLinkedinIn className="size-[20px] social-icon text-blue-900" />
                                    </Link>
                                    <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to="#">
                                        <FaTwitter className="size-[20px] social-icon text-blue-900" />
                                    </Link>
                                    <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to="#">
                                        <AiFillInstagram className="size-[20px] social-icon text-blue-900" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
