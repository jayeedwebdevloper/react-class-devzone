import React from "react";

const OurSarvice = () => {
  return (
    <div className="bg-[#f5f6f7]">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="pb-5 pt-20">
          <div className="flex flex-col gap-6 lg:flex-row justify-center 2xl:items-center">
            <div className=" xl:w-1/2  ms-12 pt-7 2xl:pt-0 lg:pt-0 text-center lg:text-start">
              <h1 className=" text-4xl lg:text-5xl p-5 font-semibold text-blue-900 leading-2 pb-6">
                Exclusive technology to provide IT solutions
              </h1>
              <p className=" lg:text-lg  lg:pl-30 lg:pr-20 text-blue-900/95 leading-2 pb-6">
                Each demo built with Teba will look different. You can customize
                almost anything in the appearance of your website with only a few
                clicks. Each demo built with Teba will look different.
              </p>{" "}
              <div className="text-xl font-semibold text-blue-900 leading-2 pb-6">
                <div>
                  <div className=" mb-3 ">
                    <div className="flex justify-start gap-3">
                      <img
                        className=" w-15 lg:w-25 bg-white rounded p-5"
                        src="/public/assets/icon100.svg"
                        alt=""
                      />
                      <div>
                        <h3 className="pb-2 text-start">Quality Solution for Business</h3>
                        <p className="text-sm text-current text-start">
                          {" "}
                          Each demo built with Teba will look different. customize
                          almost anything in the appearance of your
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3">
                    <div className="flex justify-start gap-3">
                      <img
                        className=" w-15 lg:w-25 bg-white rounded p-5"
                        src="/public/assets/icon10111.svg"
                        alt=""
                      />
                      <div>
                        <h3 className="pb-2 text-start">Amazing Expert Teams</h3>
                        <p className="text-sm text-start text-current">
                          {" "}
                          Each demo built with Teba will look different. customize
                          almost anything in the appearance of your
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3">
                    <div className="flex justify-start gap-3">
                      <img
                        className=" w-15 lg:w-25 bg-white rounded p-5"
                        src="/public/assets/icon2222222.svg"
                        alt=""
                      />
                      <div>
                        <h3 className="text-start">Urgent Support For Clients</h3>
                        <p className="text-sm text-start text-slate-700">
                          {" "}
                          Each demo built with Teba will look different. customize
                          almost anything in the appearance of your
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <button className="btn btn-animation py-4 w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]">
                  <p className="animation-top2 w-[140px] lg:w-[200px] text-center">
                    More About Us
                  </p>
                  <p className="animation-bottom2 w-[140px] lg:w-[200px] text-center">
                    More About Us
                  </p>
                </button>
              </div>
            </div>
            <div className="w-full  xl:w-1/2">
              <div className="flex justify-start items-start">
                <img
                  className="w-[80%] z-[1]"
                  src="/public/assets/thumb444444.png"
                  alt=""
                />
                <img
                  className="mt-[100px] mx-[50px] overflow-hidden"
                  src="/assets/shape1.svg"
                  alt=""
                />
              </div>
              <div className="ms-auto flex justify-end items-end">
                <img src="/assets/shape2.svg" alt="" />
                <img
                  className="w-1/2 -mt-[280px] z-[2]"
                  src="/public/assets/thumb4555555.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSarvice;
