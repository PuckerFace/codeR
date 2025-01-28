import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  //
  return (
    <div className="mt-20">
      <h2 className=" text-center my-6 tracking-wide text-3xl sm:text-5xl lg:text-6xl uppercase bg-gradient-to-r from-orange-200 via-orange-500 to-orange-900 text-transparent bg-clip-text ">
        Pricing
        <span className=""></span>
      </h2>
      <div className="grid">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1  mt-10 lg:mt-20 gap-6 p-10">
          {/* <div className="w-full sm:w-1/2 lg:w-1/3 p-2"> */}
          {/* free */}
          <div className="p-11 border border-neutral-700 rounded-xl">
            <h5 className="mt-1 mb-8 text-4xl">Free</h5>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">$0</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private board sharing</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">5 Gb Storage</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Web Analytics</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private Mode</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center w-full tracking-tight h-12 p-5 mt-20 text-xl border border-orange-900 rounded-lg transition duration-200 hover:bg-orange-900"
            >
              Subscribe
            </a>
          </div>
          {/* pro */}
          <div className="p-11 border border-orange-500 hover:shadow-lg hover:shadow-orange-600 rounded-xl">
            <h5 className="mt-1 mb-8 text-4xl">
              Pro
              <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-900 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>
            </h5>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">$10</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private board sharing</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">10 Gb Storage</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Web Analytics(Advance)</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private Mode</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center w-full tracking-tight h-12 p-5 mt-20 text-xl border border-orange-900 rounded-lg transition duration-200 hover:bg-orange-900"
            >
              Subscribe
            </a>
          </div>
          {/* enterprise */}
          <div className="p-11 border border-neutral-700 rounded-xl">
            <h5 className="mt-1 mb-8 text-4xl">Enterprise</h5>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">$200</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>
            <ul>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private board sharing</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Unlimited Storage</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">High Performance Network</span>
              </li>
              <li className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">Private Mode</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center items-center w-full tracking-tight h-12 p-5 mt-20 text-xl border border-orange-900 rounded-lg transition duration-200 hover:bg-orange-900"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
