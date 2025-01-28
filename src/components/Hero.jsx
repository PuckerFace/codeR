import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
        Number One Coding <br />
        <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-900 text-transparent bg-clip-text ">
          AI Companion
        </span>
      </h1>
      <p className="mt-6 lg:text-xl sm:text-lg text-neutral-500 text-center">
        {' '}
        Unleash your creativity and bring your ideas to life with codeR. Get
        started today and turn your imagination into reality!
      </p>
      <div className="flex justify-evenly my-10 items-center">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800  py-2 px-5 border rounded-md border-transparent mx-3 hover:shadow-lg hover:shadow-neutral-700 "
        >
          Try Now
        </a>
        <a
          href="#"
          className="py-2 px-4 border rounded-md hover:border hover:border-orange-600 hover:text-orange-600"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center ">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700 shadow-orange-500 mx-3 my-5"
        >
          {/* <source src={video1} type="video/mp4" /> */}
          <p>Your browser does not support the videos</p>
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700 shadow-orange-500 mx-3 my-5"
        >
          <source src={video2} type="video/mp4" />
          <p>Your browser does not support the videos</p>
        </video>
      </div>
    </div>
  );
};

export default Hero;
