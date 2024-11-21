import danny from '../assets/images/danny.jpg';
import jeffery from '../assets/images/jeffery.jpg';
import divine from '../assets/images/divine.jpg';
import jonathan from '../assets/images/jonathan.jpg';
import justin from '../assets/images/justin.jpg';
import olly from '../assets/images/olly.jpg';
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 tracking-wide lg:my-20">
        What are people saying
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 mb-10 border-b border-neutral-800 pb-10">
        {/* <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> */}
        <div className="  rounded-md p-6 text-md border border-neutral-800 font-thin ">
          <p>
            I am extremely satisfied with the services provided. The team was
            responsive, professional, and delivered results beyond my
            expectations.
          </p>
          <div className="flex mt-8 items-start">
            <img
              className="rounded-full w-12 h-12 mr-6 border border-neutral-400 object-cover"
              src={danny}
              alt=""
            />
            <div>
              <h6>Danny Doe</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                Stellar Solutions
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> */}
        <div className="  rounded-md p-6 text-md border border-neutral-800 font-thin ">
          <p>
            I couldn&#39;t be happier with the outcome of our project. The
            team&#39;s creativity and problem-solving skills were instrumental
            in bringing our vision to life
          </p>
          <div className="flex mt-8 items-start">
            <img
              className="rounded-full w-12 h-12 mr-6 border border-neutral-400 object-cover"
              src={jeffery}
              alt=""
            />
            <div>
              <h6>Jeffery Smith</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                Blue Horizon Technologies
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> */}
        <div className="  rounded-md p-6 text-md border border-neutral-800 font-thin ">
          <p>
            Working with this company was a pleasure. Their attention to detail
            and commitment to excellence are commendable. I would highly
            recommend them to anyone looking for top-notch service.
          </p>
          <div className="flex mt-8 items-start">
            <img
              className="rounded-full w-12 h-12 mr-6 border border-neutral-400 object-cover"
              src={olly}
              alt=""
            />
            <div>
              <h6>Olly Davids</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                Quantum Innovations
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> */}
        <div className="  rounded-md p-6 text-md border border-neutral-800 font-thin ">
          <p>
            Working with the team at XYZ Company was a game-changer for our
            project. Their attention to detail and innovative solutions helped
            us achieve our goals faster than we thought possible. We are
            grateful for their expertise and professionalism!
          </p>
          <div className="flex mt-8 items-start">
            <img
              className="rounded-full w-12 h-12 mr-6 border border-neutral-400 object-cover"
              src={jonathan}
              alt=""
            />
            <div>
              <h6>Jonathan Brown</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                Fusion Dynamics
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> */}
        <div className="  rounded-md p-6 text-md border border-neutral-800 font-thin ">
          <p>
            I am amazed by the level of professionalism and dedication shown by
            the team. They were able to exceed our expectations and deliver
            outstanding results.
          </p>
          <div className="flex mt-8 items-start">
            <img
              className="rounded-full w-12 h-12 mr-6 border border-neutral-400 object-cover"
              src={divine}
              alt=""
            />
            <div>
              <h6>Divine Wilson</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                Visionary Creations
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> */}
        <div className="  rounded-md p-6 text-md border border-neutral-800 font-thin ">
          <p>
            The team went above and beyond to ensure our project was a success.
            Their expertise and dedication are unmatched. I look forward to
            working with them again in the future.
          </p>
          <div className="flex mt-8 items-start">
            <img
              className="rounded-full w-12 h-12 mr-6 border border-neutral-400 object-cover"
              src={justin}
              alt=""
            />
            <div>
              <h6>Justin Davis</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                Synergy Systems
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Testimonials;
