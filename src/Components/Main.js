import React from "react";
import './nav.css';
import AOS from "aos";
import "aos/dist/aos.css"
import  { useEffect } from 'react';
import NTEvents from "./NTEvents";
import ItemCard from './Itemcard2';
import "./Main.css";
import Ghost from "../imgs/ghost.svg";
import TimeCaps from "../imgs/hourglass.svg";
import Event from "../imgs/disco-ball.svg";
import Chat from "../imgs/chat.svg";

import blind from "../imgs/non-tech-icons/blind.png"
import cric from "../imgs/non-tech-icons/cric.png"
import dedication from "../imgs/non-tech-icons/dedication.png"
import escape from "../imgs/non-tech-icons/escape.png"
import explore from "../imgs/non-tech-icons/explore.png"
import game from "../imgs/non-tech-icons/game.png"
import nostalgic from "../imgs/non-tech-icons/nostalgic.png"
import secret from "../imgs/non-tech-icons/secret.png"

import profile from "../imgs/profile.png"

const Aak=()=>{
    useEffect(() => {
        // fetch('httcps://api.apify.com/v2/datasets/Fm7adDmpOyae3IfpI/items?clean=true&format=json&limit=10000000&view=overview')
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((data) => {
        //     console.log(data);
        //   });
      }, []);
    useEffect(()=>{
        AOS.init({duration:1200});
      });
    
    return(
        <div className=" container main m-auto p-1 sm:p-0">
            
            <div className="WhyAak-box flex flex-col">
                <div className="first-view flex flex-row md:px-10">
                    <section className="flex flex-col mx-7 md:mx-8">
                        <span className="relative my-2 ">
                            <div className="absolute w-full h-full bg-[#ff1e87] rounded-lg blur-lg"></div>
                            <img src={Ghost} className="ghost-img icon-img" alt="Ghost"></img>
                        </span>
                        <div className="mx-auto h-full">
                            <div className="verti-bar-2-start relative w-3px md:w-5px h-full bg-[#ff1e87] rounded-sm "></div>
                        </div>
                    </section>
                    <section data-aos="fade-up">
                        <div className="first-view-titles font-sans" id="abt-aakriti">
                            <h2 className="Festival text-slate-200 text-xl md:text-2xl"><b>Festival Extravaganza</b></h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white py-10">
                                <span className=" unleash text-[#ff1e87] font-san"> Unleash Creativity</span>
                                <br></br>
                                Join us at <span className=  "font-[orbitron] font-extrabold">AAKRITI</span> ,<br></br> where creativity meets innovation and excitement reigns supreme!
                            </h3>
                        </div>
                    </section>
                </div>
                <div className="relative second-view container md:m-0" data-aos="fade-right" >
                    <section className=" relative z-20 WhyAak-matter max-w-screen-md p-5 m-2 max-h-[500px] sm:max-h-full rounded-[20px] border-2 border-[#ff1e87] shadow-sm text-white font-[Poppins] tracking-widest leading-8 bg-[#630d3e37] overflow-auto">
                        Welcome to <span className="text-[#ff4099]">AAKRITI</span> , our colorful and exhilarating fest that brings together a plethora of events and fun games! Aakriti is a celebration of creativity, innovation, and sheer pleasure, where participants can come together to showcase their capabilities and engage in thrilling competitions.
                        Not only will you have the opportunity to showcase your skills and compete with the best, but Aakriti is also a melting pot of unforgettable experiences and lasting memories. Connect with like-minded people, forge new friendships, and immerse yourself in the colorful ecosystem full of laughter, excitement, and boundless pleasure.
                        So mark your calendars and get ready to embark on a journey of creativity, camaraderie, and sheer pleasure at Aakriti. Join us as we celebrate the spirit of art, culture, and natural joy. Aakriti awaits you with open arms for an unforgettable fest experience!
                    </section>
                </div>
                <div className="container px-10 md:px-11">
                        <div className="h-40 w-5px md:px-11">
                            <div className="verti-bar-2-end relative w-5px h-full bg-[#ff1e87] rounded-sm "></div>
                        </div>
                    </div>
            </div>



            <div className="timeline-box flex flex-col">
                <div className="first-view flex flex-row md:px-11">
                    <section className="flex flex-col mx-7 md:mx-8">
                        <span className="relative my-2 ">
                            <div className="absolute w-full h-full bg-[#39FF14] rounded-lg blur-lg"></div>
                            <img src={TimeCaps} className="timecaps-img icon-img" alt="Glass Hour"></img>
                        </span>
                        <div className="mx-auto h-full">
                            <div className="verti-bar-3-start relative w-3px md:w-5px h-full bg-[#39FF14] rounded-sm "></div>
                        </div>
                    </section>
                    <section data-aos="fade-up">
                        <div className="first-view-titles font-sans">
                            <h2 className="Festival text-slate-200 text-xl md:text-2xl"><b>Festival Highlights</b></h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white py-10">
                                <span className=" timeline text-[#39FF14] font-san">Festival Timeline</span>
                                <br></br>
                                Begin Your Time Adventure: Witness the Evolution of <span className=  "font-[orbitron] font-extrabold">AAKRITI</span><br></br>on June 6th to June 7th!
                            </h3>
                        </div>
                    </section>
                </div>
                <div className="relative second-view container md:m-0" data-aos="fade-right">
                    <section className=" relative z-20 timeline-matter max-w-screen-md p-5 m-2 max-h-[500px] sm:max-h-full rounded-[20px] border-2 border-[#39FF14] shadow-sm text-white font-[Poppins] tracking-widest leading-8 bg-[#1b510a19] overflow-auto">
                        Experience the excitement of our fest as we kickstart registrations on April 11th. Don't miss out on the incredible lineup of both technical and non-technical events, reaching a grand celebration on April 17th.   
                    </section>
                </div>
                <div className="container px-10 md:px-11 flex flex-row">
                        <div className="h-auto w-5px md:px-11">
                            <div className="verti-bar-3-end relative w-5px h-full bg-[#39FF14] rounded-sm "></div>
                        </div>
                        <div className="flex md:flex-row flex-col" >
                            <div className="timeline-title ml-0 md:ml-0 md:flex block font-[orbitron] text-[#39FF14]">
                                <h2 className="text-xl text-center m-auto mt-5 md:m-auto mr-1 transform rotate-0 md:rotate-180 decoration-[#39FF14] underline-offset-1">TIMELINE</h2>
                            </div>
                            <div className="timeline-path flex flex-col lg:flex-row ml-5 md:ml-0  mr-9 my-2 md:my-32 p-5 border-white border-t-2 md:border-l-2 md:border-t-0">
                                <div className="timeline-path-details1 flex flex-col md:flex-row justify-center align-middle text-white">
                                    <section className="timeline-date p-2 text-center mx-2 justify-center items-center ">
                                        <h3 className="text-sm">June 6<sup>th</sup> Thursday</h3>
                                        <h4 className="text-lg font-bold">Registration Starts</h4>
                                    </section>
                                    <section className="timeline-node m-auto">
                                        <div className="circle1 rounded-full h-7 w-7 bg-[#2ddfff] "></div>
                                    </section>
                                </div>

                                <div className="timeline-bar flex flex-col align-middle h-full ">
                                    <div className="timeline-bar-1-2 self-end h-56  md:h-1 w-5px lg:w-48 m-auto bg-white "></div>
                                </div>

                                <div className="timeline-path-details2 flex flex-col md:flex-row justify-center align-middle text-white">
                                    <section className="timeline-node m-auto">
                                        <div className="circle2 rounded-full h-7 w-7 bg-[#ff1e87] "></div>
                                    </section>
                                    <section className="timeline-date p-2 text-center mx-2 justify-center items-center ">
                                        <h3 className="text-sm">June 10<sup>th</sup> Wednesday</h3>
                                        <h4 className="text-lg font-bold">Registration Ends</h4>
                                    </section>
                                    <section className="timeline-node m-auto">
                                        <div className="circle2 rounded-full h-7 w-7 bg-[#ff1e87] "></div>
                                    </section>
                                </div>

                                <div className="timeline-bar flex flex-col align-middle h-full">
                                    <div className="timeline-bar-2-3 self-end h-56  md:h-1 w-5px lg:w-48 m-auto bg-white"></div>
                                </div>

                                <div className="timeline-path-details2 flex flex-col md:flex-row justify-center align-middle text-white">
                                    <section className="timeline-node m-auto">
                                        <div className="circle3 rounded-full h-7 w-7 bg-[#39FF14] "></div>
                                    </section>
                                    <section className="timeline-date p-2 text-center mx-2 justify-center items-center ">
                                        <h3 className="text-sm">June 11<sup>th</sup> Thursday</h3>
                                        <h4 className="text-lg font-bold">Fest Starts</h4>
                                    </section>
                                    <section className="timeline-node m-auto">
                                        <div className="circle3 rounded-full h-7 w-7 bg-[#39FF14] "></div>
                                    </section>
                                </div>

                                <div className="timeline-bar flex flex-col align-middle h-full">
                                    <div className="timeline-bar-3-4 self-end h-56 md:h-1 w-5px lg:w-48 m-auto bg-white"></div>
                                </div>

                                <div className="timeline-path-details2 flex flex-col md:flex-row justify-center align-middle text-white">
                                    <section className="timeline-node m-auto">
                                        <div className="circle4 rounded-full h-7 w-7 bg-[#FFFF33] "></div>
                                    </section>
                                    <section className="timeline-date p-2 text-center mx-2 justify-center items-center ">
                                        <h3 className="text-sm">June 12<sup>th</sup> Friday</h3>
                                        <h4 className="text-lg font-bold">Fest ends</h4>
                                    </section>
                                </div>
                                <div className="timeline-path-line mb-24"></div>

                            </div>

                        </div>
                        
                        
                    </div>
            </div>


            <div className="Event-box flex flex-col">
                <div className="first-view flex flex-row md:px-11">
                    <section className="flex flex-col mx-7 md:mx-8">
                        <span className="relative my-2 ">
                            <div className="absolute w-full h-full bg-[#FFFF33] rounded-lg blur-lg"></div>
                            <img src={Event} className="Event-img icon-img" alt="Ghost"></img>
                        </span>
                        <div className="mx-auto h-full">
                            <div className="verti-bar-4-start relative w-3px md:w-5px h-full bg-[#FFFF33] rounded-sm "></div>
                        </div>
                    </section>
                    <section data-aos="fade-up">
                        <div className="first-view-titles font-sans" id="event-matter" >
                            <h2 className="Festival text-slate-200 text-xl md:text-2xl"><b>Innovate X Fusion</b></h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white py-10">
                                <span className=" Creativity text-[#FFFF33] font-san "> Creativity and Innovation</span>
                                <br></br>
                                Unleash your skills in technical and non-technical fields in our extravaganza!
                            </h3>
                        </div>
                    </section>
                </div>
                <div className="relative second-view container md:m-0" data-aos="fade-right">
                    <section className=" relative z-20 events-matter max-w-screen-md p-5 m-2 max-h-[500px] sm:max-h-full rounded-[20px] border-2 border-[#FFFF33] shadow-sm text-white font-[Poppins] tracking-widest leading-8 bg-[#635a0d37] overflow-auto">
                    Welcome to our dynamic event where technology and art come together to spark new ideas and inspire innovation. Dive into the latest advancements in software development, AI, and robotics in our TECH section. Participate in hands-on demos and 
                    thought-provoking discussions led by industry experts. Then, explore our creative ART community with exciting exhibitions, interactive workshops, and performances showcasing diverse artistic talents. Whether you're drawn to the latest tech or 
                    captivating artistic expressions, our program has something for everyone to discover, learn, and get inspired by.
                    </section>
                </div>
                <div className="container px-1 md:px-11 sm:flex">
                        <div className=" hidden sm:block w-5px md:px-11">
                            <div className="verti-bar-4-end relative w-5px h-full bg-[#FFFF33] rounded-sm "></div>
                        </div>
                        <div className="event-types">
                            <section data-aos="fade-up"><NTEvents/></section>
                            
                            <div className='non-tech' data-aos="fade-up">
                                <div className='ml-5 md:ml-0 my-20 text-white'>
                                    <div className='mt-7'>
                                        <div className='my-10'>
                                            <h2 className='text-3xl font-semibold'>NON-TECH</h2>
                                            <div className="non-tech-events w-auto max-w-80 md:max-w-5xl text-white rounded-lg p-1 sm:p-5 my-10 flex  overflow-auto justify-evenly bg-gradient-to-br from-[#B2FEFA] to-[#0ED2F7]">
                                                <ItemCard
                                                    imgSrc={secret}
                                                    title="Secret Alley"
                                                    description={`Escape the bustling tech world and immerse yourself in an enchanting evening at "Secret Alley." Discover mysteries, magic, and create unforgettable memories in this hidden realm of creativity and wonder. Join us for an unforgettable experience`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={escape}
                                                    title="Escape Room"
                                                    description={` Test your problem-solving skills and teamwork in our thrilling Escape Room event! Gather your friends, unravel mysteries, solve puzzles, and escape the room within the given time to win exciting prizes.`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={nostalgic}
                                                    title="Nostalgic Room"
                                                    description={`Step into the enchanting Nostalgic Room and relive cherished memories. Join us for an unforgettable journey down memory lane filled with interactive games, heartwarming stories, and delightful ambiance that will leave you with a sense of joy and wonder.`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={game}
                                                    title="Game Zone"
                                                    description={`Welcome to "Game Zone," a fun non-tech fest hosted by the CSE department! Join us for board games, team challenges, and friendly competitions to test your strategic thinking and teamwork. Bond with fellow participants over classic and modern games!`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={blind}
                                                    title="Blind Fold Obstacles"
                                                    description={`Embark on a thrilling blindfolded adventure as you navigate challenging obstacles with trust in your partner. Test your communication skills and teamwork like never before, creating unforgettable memories for all participants.`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={explore}
                                                    title="Explore, Venture, Finish"
                                                    description={`Join us on a thrilling journey of discovery as we explore wonders, venture into the unknown, and finish with a triumphant celebration. Ignite your passion for exploration and create unforgettable memories with us.`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={dedication}
                                                    title="Dedications"
                                                    description={`Celebrate gratitude and appreciation at our heartwarming event, "Dedications." Honor the people and moments that have touched our lives, sharing heartfelt dedications that will leave a lasting impression on everyone's hearts.`}
                                                    
                                                />
                                                <ItemCard
                                                    imgSrc={cric}
                                                    title="Cric Circle"
                                                    description={`Join us for "Cric Circle," a thrilling cricket extravaganza for all ages! Participate in friendly matches, exciting competitions, and create unforgettable moments on the field.`}
                                                    
                                                />

                                            </div>
                                        </div>
                                    
                                    </div>

                                </div>
                            </div>
                        </div>

                </div>
            </div>
            <div className="container">
                <div className="first-view flex flex-row md:px-10">
                        <section className="flex flex-col mx-7 md:mx-8">
                            <span className="relative my-2 ">
                                <div className="absolute w-full h-full bg-[#FFFF33] rounded-lg blur-lg"></div>
                                <img src={Chat} className="chat-img icon-img" alt="Chat"></img>
                            </span>
                        </section>
                    </div>
            </div>
            <div className="insta text-center mt-20">
                <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#f51371]  via-[#a81df4]  to-[#fc811c] text-2xl text-center">Follow Us on instagram</span>
            </div>
            <div className="insta-card relative m-auto my-10 px-2 py-5 w-72 md:w-auto max-w-96 rounded-md flex flex-col bg-gradient-to-r from-[#f51371]  via-[#a81df4]  to-[#fc811c] background-animate before:">
                <div className="insta-profile flex flex-wrap justify-around items-center">
                    <section className="profile-pic text-center">
                        <img src={profile} className="w-24 h-24 border-white border-2 rounded-full" alt="profile-pic"></img>
                    </section>
                    <section className="profile-details">
                        <p className="profile-id font-semibold mb-2">_aakriti_2k24</p>
                        <section className="profile-follow flex justify-between">
                            <div className="profie-followers text-center ">
                                <p className="follower-count font-semibold mr-2">235</p>
                                <p> Followers</p>
                            </div>
                            <div className="profile-following mx-2 text-center">
                                <p className="following-count font-semibold mr-2">13</p>
                                <p> Following</p>
                            </div>
                        </section>
                        <div className="profile-link text-center my-2 w-full">
                            <button className="mt-3 p-2 w-full rounded-xl bg-[#ffffff4e] transition-all ease-in-out duration-75 hover:bg-[#ffffff92]"><a href="https://www.instagram.com/_aakriti_2k24/" target="_blank" className="font-bold"> Follow Us</a></button>
                        </div>
                    </section>

                </div>
                <div className="insta-bio text-center p-3">
                    <p className="font-medium underline">Bio</p>
                    <p>JNTUHUCEM-CSM</p>
                </div>
            </div>
            
        </div>
    )
};

export default Aak;