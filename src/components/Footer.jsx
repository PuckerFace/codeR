const Footer = () => {
  return (
    <div className="px-12 grid lg:grid-cols-3 sm:grid-cols-1 mb-8">
      <div>
        <h5 className="mb-4">Resources</h5>
        <ul className="flex flex-col">
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#" className="">
              Getting Started
            </a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Documentation</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Tutorials</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">API Reference</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Community Forums</a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="mb-4">Platform</h5>
        <ul className="flex flex-col">
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Features</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Supported Devices</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">System Requirements</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Downloads</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Release Notes</a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="mb-4">Community</h5>
        <ul className="flex flex-col">
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Events</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Meetups</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Conferences</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Hackathons</a>
          </li>
          <li className="text-neutral-400 tracking-tight hover:text-neutral-300">
            <a href="#">Jobs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
