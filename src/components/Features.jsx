import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
} from 'lucide-react';
const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full font-medium p-4 uppercase">
          {' '}
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Write codes{' '}
          <span className="bg-gradient-to-r from-orange-500 via-orange-700 to-orange-900 text-transparent bg-clip-text ">
            10x faster
          </span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-10 lg:mt-20 gap-6">
        {/* <div className="w-full sm:w-1/2 lg:w-1/3"> */}
        <div className="flex">
          {/* next box */}
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            <BotMessageSquare />
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">Drag-and-Drop Interface</h5>
            <p className="text-neutral-500 ">
              Easily design and arrange your code environments with a
              user-friendly drag-and-drop interface.
            </p>
          </div>
        </div>
        {/* next box */}
        <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            <Fingerprint />
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">Multi-Platform Compatibility</h5>
            <p className="text-neutral-500 ">
              Build software applications that run seamlessly across multiple
              platforms.
            </p>
          </div>
        </div>

        {/* next box */}
        <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            <ShieldHalf />
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">Built-in Templates</h5>
            <p className="text-neutral-500 ">
              Jumpstart your projects with a variety of built-in templates for
              different types of applications and environments.
            </p>
          </div>
        </div>

        {/* next box */}
        <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            <BatteryCharging />
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">Real-Time Preview</h5>
            <p className="text-neutral-500 ">
              Preview your application in real-time as you make changes,
              allowing for quick iterations and adjustments.
            </p>
          </div>
        </div>

        {/* next box */}
        <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            <PlugZap />
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">Collaboration Tools</h5>
            <p className="text-neutral-500 ">
              Work together with your team in real-time on your projects,
              enabling seamless collaboration and idea sharing.
            </p>
          </div>
        </div>

        {/* next box */}
        <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            <GlobeLock />
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">Live Deployment</h5>
            <p className="text-neutral-500 ">
              Deploy your applications live immediately after production for
              global access.
            </p>
          </div>
        </div>
      </div>
    </div>

    //</div>
  );
};

export default Features;
