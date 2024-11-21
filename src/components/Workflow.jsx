//import code from '../assets/images/code.png';
import { CheckCircle2 } from 'lucide-react';
import tech from '../assets/images/tech.jpg';

const Workflow = () => {
  return (
    <div className="flex flex-col items-center mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Workflow{' '}
        <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-900 text-transparent bg-clip-text ">
          Acceleration
        </span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-12">
        <div className="p-2 w-full lg:w-1/2 ">
          <img src={tech} alt="code" className=" object-contain size-3/4" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          <div className="flex mb-12">
            <div className="mx-6 bg-neutral-900 h-10 w-10 p-2 rounded-full justify-center items-center">
              <CheckCircle2 className="text-orange-600" />
            </div>
            <div>
              {' '}
              <h4 className="mt-1 mb-2 text-xl">Code merge made easy</h4>
              <p className="text-lg text-neutral-500 ">
                Track the performance of your apps and gain insights into user
                behavior.
              </p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="mx-6 bg-neutral-900 h-10 w-10 p-2 rounded-full justify-center items-center">
              <CheckCircle2 className="text-orange-600" />
            </div>
            <div>
              {' '}
              <h4 className="mt-1 mb-2 text-xl">Review code without worry</h4>
              <p className="text-lg text-neutral-500 ">
                Track the performance of your apps and gain insights into user
                behavior.
              </p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="mx-6 bg-neutral-900 h-10 w-10 p-2 rounded-full justify-center items-center">
              <CheckCircle2 className="text-orange-600" />
            </div>
            <div>
              {' '}
              <h4 className="mt-1 mb-2 text-xl">
                AI Assistance to reduce time
              </h4>
              <p className="text-lg text-neutral-500 ">
                Track the performance of your apps and gain insights into user
                behavior.
              </p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="mx-6 bg-neutral-900 h-10 w-10 p-2 rounded-full justify-center items-center">
              <CheckCircle2 className="text-orange-600" />
            </div>
            <div>
              {' '}
              <h4 className="mt-1 mb-2 text-xl">Share work in minutes</h4>
              <p className="text-lg text-neutral-500 ">
                Track the performance of your apps and gain insights into user
                behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
