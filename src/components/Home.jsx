import React from "react";
const Home = () => {
  return (
    <>
      <img
        src="bg.jpg"
        className="w-full h-[42rem] bg-no-repeat fixed"
        alt=""
      />
      <div className=" w-full absolute  h-screen mt-[40rem]">
        <h1 className="bg-white text-center mr-32 ml-32 mt-32 p-12 font-serif text-xl">
          <b style={{ fontSize: 50 }} className="font-sans ">
            Bucketlist Experiences
          </b>
          <br />
          <br />
          A Goal without a Plan is a Wish. Stop dreaming about your BucketList
          and start living it. <br />
          <br />
          At BucketList we curate memorable and unique experiences for all
          travel and lifestyle needs for Individuals and Corporates. We don’t
          just tick off your BucketList, we help you create one too! So have you
          figured your list yet ? Either way you have landed at the right page!{" "}
          <br />
          <br />
          <h1 className="font-mono">Let‘s get those boxes ticked…</h1>
        </h1>
        <div className="mt-5 grid grid-cols-4 ">
          <div className=" h-96 bg-green-200  hover:h-[30rem] delay-500">
            {/* <Link to="/Adventure">Adventure</Link> */}
          </div>
          <div className=" h-96 bg-black text-white  hover:w-96 ">
            {/* <Link to="/Travel">Travel</Link> */}
          </div>
          <div className="h-96 bg-green-200 text-white  hover:w-96 ">
            {/* <Link to="/Imaginory">Imaginory</Link> */}
          </div>
          <div className=" h-96 bg-black text-white hover:w-96 ">
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
        <div className="flex">
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

export default Home;
