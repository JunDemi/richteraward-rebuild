import { motion } from "framer-motion";
import { useState } from "react";

export default function Regulation() {
  const [apply, set_apply] = useState(false);
  const getOverlay = () => set_apply(true);
  const closeOverlay = () => set_apply(false);
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-sm font-thin tracking-widest border-b border-red-800 p-3">Regulation of competition</span>
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-xl text-xs font-thin tracking-tighter">
              All participants must submit their performance with video. <br />
              The judges consist of the Artistic Director of the competition and world-famous professors or pianists <br />
              who already has great reputation and international career.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-10">
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Prizes</h1>
                <p className="lg:text-3xl text-xl font-bold tracking-tighter text-yellow-600">Grand Prize : 3000 € (Euros)</p>
                <p className="lg:text-base text-xs tracking-tighter">The Grand Prize will be awarded to the higest scorer in all categories. 3000 Euros will be given as monetary award.</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Section</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Required Repertoire</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Age Category</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Announcement of the Result</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Awards for each category</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Application</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Teacher's Award</h1>
                <p className="lg:text-base text-xs tracking-tighter">text text text text text</p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Detail</h1>
                <p className="lg:text-base text-xs tracking-tighter">text text text text text</p>
              </div>
              <div className="lg:col-span-2 flex justify-center items-center">
                <button
                  onClick={getOverlay}
                  className="bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-72 w-52 py-5 hover:bg-black transition rounded-xl" >APPLY
                </button>
              </div>
            </div>
            {apply ?
              <>
                <motion.div
                  className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-10 transtion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="fixed lg:top-36 top-28 z-20 lg:w-1/2 w-5/6">
                  <h1 onClick={closeOverlay} className="flex justify-end mb-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </h1>
                  <h2 className="bg-black text-white p-3 text-center tracking-[0.5rem] lg:text-2xl text-base">APPLICATION</h2>
                  <div className="bg-white h-[28rem]">

                  </div>
                </motion.div>
              </>
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
