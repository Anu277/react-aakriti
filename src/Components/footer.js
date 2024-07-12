import React from "react";
import  './footer.css';

const Footer=()=>{
    return(
      <div className="z-50 font-[poppins]" id="footer-matter">
          <div className="my-5 flex flex-col justify-center items-center border-t-2 ">
            <div className="contact-div text-white md:max-w-4xl ">
                <div className="contact-head text-center">
                    <h1 className="contact-title text-4xl font-black my-5">Contact Us</h1>
                    <p className="text-lg">
                    For any queries or to get more details, 
                    please feel free to reach out to us via Gmail. We value your feedback and are here to assist you.</p>
                </div> 
                <div className="flex items-center justify-center p-12 ">
                  <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formsubmit.co/csm.aakriti.21@gmail.com" method="POST" className=" p-3 m-2 rounded-lg bg-[rgba(43,43,49,0.73)]">
                      <div className="mb-5">
                        <label
                          for="name"
                          className="mb-3 block text-base font-medium "
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#091222] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="email"
                          className="mb-3 block text-base font-medium text-[#fbfbff]"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="example@domain.com"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#091222] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="subject"
                          className="mb-3 block text-base font-medium "
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Enter your subject"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#091222] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="message"
                          className="mb-3 block text-base font-medium "
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          name="message"
                          id="message"
                          placeholder="Type your message"
                          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#091222] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        <div className="z-30 m-auto py-10 h-auto px-4 bg-[#050505] text-white z">
          <div className="z-30 m-auto flex items-center justify-around max-w-80 ">
              <a href="#" className="mx-2 hover:decoration-solid hover:underline  decoration-white   ease-in duration-200">Home</a>
              <a href="#abt-aakriti" className="mx-2 hover:decoration-solid hover:underline  decoration-white   ease-in duration-200">About</a>
              <a href="#event-matter" className="mx-2 hover:decoration-solid hover:underline  decoration-white  ease-in duration-200">Events</a>
              <a href="#footer-matter" className="mx-2 hover:decoration-solid hover:underline  decoration-white  ease-in duration-200">Contact</a>
          </div>
          <p className="text-center my-5">© 2024 Aakriti.</p>
          <div className="z-30 m-auto py-10 flex items-center justify-around max-w-72">
              {/* <a href="" className="mx-2"> <i className="fa-brands fa-facebook fa-lg text-white hover:-translate-y-1 hover:scale-150 ease-in duration-200"></i></a>
              <a href="" className="mx-2"> <i className="fa-brands fa-instagram fa-lg text-white hover:-translate-y-1 hover:scale-150 ease-in duration-200"></i></a>
              <a href="" className="mx-2"> <i className="fa-brands fa-x-twitter fa-lg text-white hover:-translate-y-1 hover:scale-150 ease-in duration-200"></i></a>
              <a href="" className="mx-2"> <i className="fa-brands fa-telegram fa-lg text-white hover:-translate-y-1 hover:scale-150 ease-in duration-200"></i></a> */}
              <p className="text-[12px] text-center text-zinc-500">Made by B.Anurag <br></br> with JavaScript, React.js and Three.js</p>
          </div>
        </div>
      </div>
        
    )
}
export default Footer;