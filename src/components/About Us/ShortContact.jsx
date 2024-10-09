import React from 'react';
import { RiMailFill } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const ShortContact = () => {
    return (
        <div className='bg-stone-100 w-full py-12'>
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="flex gap-4">
                    <div className="w-full lg:w-1/2">
                        <h1 className='text-5xl font-bold text-blue-800'>Let's build an awesome project together</h1>
                        <p className='text-[17px] text-slate-600 pt-8 pb-5 leading-[1.8]'>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

                        <div className="flex">
                            <div className="w-full sm:w-1/2">
                                <div className="bg-blue-900 rounded-md p-3 h-14 w-14 flex items-center justify-center">
                                    <TiLocation className='size-7 text-white' />
                                </div>
                                <h5 className='text-900 font-semibold text-2xl py-3 text-blue-900'>Address</h5>
                                <p className='text-slate-500'>1791 Yorkshire Circle Kitty <br />
                                    Hawk, NC 279499</p>
                            </div>

                            <div className="w-full sm:w-1/2">
                                <div className="bg-blue-900 rounded-md p-3 h-14 w-14 flex items-center justify-center">
                                    <RiMailFill className='size-6 text-white' />
                                </div>
                                <h5 className='text-900 font-semibold text-2xl py-3 text-blue-900'>Contact</h5>
                                <Link to="mailto:info@example.com" className='text-slate-500 block'>info@example.com</Link>
                                <Link to="tel:1234566" className='text-slate-500 block'>+123 3456</Link>
                            </div>
                        </div>

                        <div className="h-px w-full bg-black/20 mt-7"></div>

                        <p className='pt-5 text-slate-500'>Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
                    </div>
                    <div className="w-full lg:w-1/2 px-6">
                        <form className='bg-white p-7 rounded-xl'>
                            <h4 className='text-blue-800 text-3xl font-semibold pb-5'>Fill The Contact Form</h4>
                            <p className='text-slate-600 text-lg'>Feel free to contact with us, we don’t spam your email</p>

                            <div className="flex">
                                <div className="w-full md:w-1/2 py-2 px-3">
                                    <input type="text" className='rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50' placeholder='Your Name' />
                                </div>
                                <div className="w-full md:w-1/2 py-2 px-3">
                                    <input type="number" className='rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50' placeholder='Phone Number' />
                                </div>
                            </div>

                            <div className="py-2 px-3">
                                <input type="email" className='rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50' placeholder='Email' />
                            </div>
                            <div className="py-2 px-3">
                                <textarea className='rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50 h-[150px]' placeholder='Write Your Message' />
                            </div>

                            <div className="py-4">
                                <button className="btn btn-animation py-8 w-full bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]">
                                    <p className="animation-top3 w-full text-center">
                                        Send Message
                                    </p>
                                    <p className="animation-bottom3 w-full text-center">
                                        Send Message
                                    </p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortContact;