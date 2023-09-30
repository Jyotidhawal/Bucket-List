import React from "react";
const Home = () => {
  return (
    <>
      <img src="bg.jpg" className="w-full h-[42rem] bg-no-repeat" alt="" />
      <div className="bg-slate-400 w-full absolute  h-[40rem] ">
        <div className="mt-5 flex space-x-12 ml-14 ">
          <div className="w-40 h-40 bg-green-200 px-9 py-16 hover:w-96 delay-500">
            {/* <Link to="/Adventure">Adventure</Link> */}
          </div>
          <div className="w-40 h-40 bg-black text-white px-14 py-16 hover:w-96 ">
            {/* <Link to="/Travel">Travel</Link> */}
          </div>
          <div className="w-40 h-40 bg-black text-white px-11 py-16 hover:w-96 ">
            {/* <Link to="/Imaginory">Imaginory</Link> */}
          </div>
          <div className="w-40 h-40 bg-black text-white px-14 py-16 hover:w-96 ">
            {/* <Link to="/social_Things">Social Things</Link> */}
          </div>
        </div>
        <div className="bg-white h-40 center" style={{ textAlign: "center" }}>
          <b style={{ fontSize: 50 }}>BUCKET LIST IDEAS</b>
          <br />
          We have a basket of unique and awesome BucketList ideas to help you
          choose, create and tick your BucketListbr <br />
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 30,
            }}
          >
            Don't Just tick your BucketList, experience it
          </div>
        </div>
        <div className="flex py-4 px-4">
          <div className=" w-full p-4">
            <div className="h-20 m-2  bg-red-900">h</div>
            <div className="h-10 m-2 bg-green-300">h</div>
            <div className="h-10 m-2 bg-red-900">h</div>
          </div>
          <div className=" w-full p-4">
            <div className="h-10 m-2 bg-red-900">h</div>
            <div className="h-10 m-2 bg-green-300">h</div>
            <div className="h-10 m-2 bg-red-900">h</div>
            <div className="h-10 m-2 bg-green-300">h</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home
