import {
  Linkedin,
  Github,
  Search,
  Plane,
  Wallet,
  HomeIcon,
  User2,
  DollarSign,
  Check,
  Menu,
} from 'lucide-react'
import Image from 'next/image'
import heroImg from '../../public/assets/hero.png'
import solutionImg from '../../public/assets/solution.png'
import worldImg from '../../public/assets/world.png'
import rocketImg from '../../public/assets/rocket.png'

export default function Home() {
  return (
    <>
      {/* Wrapper */}
      <div className="max-w-[1440px] px-8 mx-auto text-zinc-500">
        {/* Header - Navigation */}
        <header className="flex justify-between items-center w-full pt-8">
          <span className="font-bold text-3xl text-indigo-500">Tripify.</span>
          <ul className="hidden md:flex gap-24 font-medium text-slate-900">
            <li className="text-indigo-500">Home</li>
            <li>Product</li>
            <li>Resources</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <span className="md:hidden flex justify-center items-center text-indigo-500">
            <Menu size={32} />
          </span>
          <div className="hidden md:flex justify-center items-center font-medium gap-4">
            <button className="w-32 h-12 text-slate-900">Sign In</button>
            <button className="w-32 h-12 bg-orange-500 bg-opacity-80 text-white rounded-lg border border-orange-500">
              Register
            </button>
          </div>
        </header>
        {/* Hero Banner */}
        <div className="min-h-[700px] flex flex-col md:flex-row justify-between items-center my-32">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
              Discover your
              <br /> dream place
              <br /> in <span className="text-indigo-500">Tripify.</span>
            </h1>
            <p>Find the best places to visit in the world in one place</p>
            <button className="w-32 h-12 bg-indigo-500 text-white rounded-lg">
              Discover Now
            </button>
          </div>
          <Image src={heroImg} alt="" height={750} />
        </div>
        {/* Search Bar */}
        <div className="md:w-11/12 md:h-36 mx-auto gap-6 flex flex-col md:flex-row justify-between items-center p-10 bg-orange-500 bg-opacity-10 rounded-xl">
          <div className="flex flex-col gap-2">
            <label>Destination</label>
            <input
              className="outline-none bg-transparent placeholder-slate-900 font-medium"
              placeholder="Jakarta, Indonesia"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Average Price</label>
            <input
              className="outline-none bg-transparent placeholder-slate-900 font-medium"
              placeholder="$750 - $900"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Date</label>
            <input
              className="outline-none bg-transparent placeholder-slate-900 font-medium"
              placeholder="July 20, 2022"
            />
          </div>
          <button className="w-32 h-12 flex justify-center items-center gap-2 bg-orange-500 bg-opacity-80 text-white rounded-full border border-orange-500">
            <Search />
            Search
          </button>
        </div>
        {/* Best services */}
        <div className="flex flex-col md:flex-row justify-evenly md:items-end my-32 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold capitalize leading-normal text-slate-900">
              We offer
              <br />
              best services
            </h2>
            <p>
              We offer best services for you in one
              <br /> place to make your life easier
            </p>
            <button className="w-32 h-12 bg-indigo-500 text-white rounded-lg">
              Discover Now
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-14 md:mt-0">
            <div className="flex flex-col gap-4">
              <span className="w-16 h-16 rounded-lg bg-indigo-500 text-white flex justify-center items-center">
                <Plane size={32} />
              </span>
              <h3 className="text-xl font-medium capitalize leading-normal text-slate-900">
                Best tour guide
              </h3>
              <p>
                Our tour guide will take you to the
                <br /> best places in your dream
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="w-16 h-16 rounded-lg bg-indigo-500 text-white flex justify-center items-center">
                <Wallet size={32} />
              </span>
              <h3 className="text-xl font-medium capitalize leading-normal text-slate-900">
                Easy booking
              </h3>
              <p>
                Book your trip in one click and
                <br /> get the best price and discount
              </p>
            </div>
          </div>
        </div>
        {/* Explore top destination */}
        <div className="flex flex-col text-center my-32 gap-6">
          <h2 className="text-4xl font-bold capitalize leading-normal text-slate-900">
            Explore top destinarion
          </h2>
          <p>Find the best places to visit in the world in one place.</p>
          {/* Cards destinations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative col-span-1 flex flex-col items-start gap-2">
              <div className="min-h-[450px] w-full p-6 rounded-2xl bg-no-repeat bg-cover bg-[url('../../public/assets/mexico.jpg')]">
                <span className="absolute top-6 left-6 w-24 h-10 rounded-lg flex justify-center items-center bg-white text-indigo-500">
                  Mexico
                </span>
              </div>
              <h3 className="text-2xl font-medium text-slate-900">
                New Mexico
              </h3>
              <p>Starting at $21,600 per person</p>
            </div>
            <div className="relative col-span-1 flex flex-col items-start gap-2">
              <div className="min-h-[450px] w-full p-6 rounded-2xl bg-no-repeat bg-cover bg-[url('../../public/assets/indonesia.jpg')]">
                <span className="absolute top-6 left-6 w-24 h-10 rounded-lg flex justify-center items-center bg-white text-indigo-500">
                  Indonesia
                </span>
              </div>
              <h3 className="text-2xl font-medium text-slate-900">Indonesia</h3>
              <p>Starting at $21,600 per person</p>
            </div>
            <div className="relative col-span-1 flex flex-col items-start gap-2">
              <div className="min-h-[450px] w-full p-6 rounded-2xl bg-no-repeat bg-cover bg-[url('../../public/assets/greece.jpg')]">
                <span className="absolute top-6 left-6 w-24 h-10 rounded-lg flex justify-center items-center bg-white text-indigo-500">
                  Greece
                </span>
              </div>
              <h3 className="text-2xl font-medium text-slate-900">
                Beach of Athens
              </h3>
              <p>Starting at $21,600 per person</p>
            </div>
          </div>
        </div>
        {/* Book your trip section */}
        <div className="flex flex-col md:flex-row justify-around md:items-center my-32 gap-6">
          <h2 className="text-4xl font-bold capitalize leading-normal text-slate-900">
            Book your trip
            <br />
            with simple step
          </h2>
          <p>
            We always make our customers happy by providing
            <br /> the best service and providing the best price
          </p>
          <button className="w-32 h-12 bg-indigo-500 text-white rounded-lg">
            Learn More
          </button>
        </div>
        {/* Other services */}
        <div className="flex flex-col md:flex-row justify-evenly md:items-center my-32 gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-indigo-500">
              <HomeIcon size={32} />
            </span>
            <h3 className="text-xl font-medium capitalize leading-normal text-slate-900">
              Searching for house
            </h3>
            <p>
              Find houses in your dream place in
              <br /> one click and get the best price
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-indigo-500">
              <User2 size={32} />
            </span>
            <h3 className="text-xl font-medium capitalize leading-normal text-slate-900">
              Calling the owner
            </h3>
            <p>
              Contact the owner and make sure
              <br />
              you have everything you need
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-indigo-500">
              <DollarSign size={32} />
            </span>
            <h3 className="text-xl font-medium capitalize leading-normal text-slate-900">
              Deal and pay
            </h3>
            <p>
              Pay for the house securely
              <br /> and get the best price
            </p>
          </div>
        </div>
        {/* We provide best services phrase */}
        <div className="flex justify-center items-center text-center my-32 gap-6">
          <h2 className="text-4xl font-bold leading-normal text-slate-900">
            We provide best solution for
            <br /> your vacation matters
          </h2>
        </div>
        {/* We provide best solution section */}
        <div className="flex flex-col md:flex-row justify-around items-center my-32 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold capitalize leading-normal text-slate-900">
              Well curated places
            </h2>
            <p className="text-zinc-500">
              We always make our customers happy by providing
              <br /> as many choices as possible
            </p>
            <ul className="flex flex-col gap-10 text-slate-900 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-indigo-500">
                  <Check size={24} />
                </span>
                Keyless access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-500">
                  <Check size={24} />
                </span>
                Luxury hotel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-500">
                  <Check size={24} />
                </span>
                Fully equipped kitchens
              </li>
            </ul>
          </div>
          <Image src={solutionImg} alt="" height={700} />
        </div>
        {/* We provide best solution section pt2 */}
        <div className="flex flex-col md:flex-row justify-around items-center my-32 gap-6">
          <Image src={worldImg} alt="" height={600} />
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold capitalize leading-normal text-slate-900">
              Special Tickets
            </h2>
            <p className="text-zinc-500">
              We always make our customers happy by providing
              <br /> as many choices as possible
            </p>
            <ul className="flex flex-col gap-10 text-slate-900 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-indigo-500">
                  <Check size={24} />
                </span>
                Instant confirmation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-500">
                  <Check size={24} />
                </span>
                24/7 helpline for all our guests
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-500">
                  <Check size={24} />
                </span>
                Fast services
              </li>
            </ul>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-around items-center my-32 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Get more update
              <br /> subscribe to our newsletter
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-auto md:w-[600px] p-6 shadow-xl border rounded-xl">
              <input
                type="text"
                className="outline-none bg-transparent"
                placeholder="Your email address"
              />
              <button className="w-32 h-12 bg-indigo-500 text-white rounded-lg">
                Discover Now
              </button>
            </div>
          </div>
          <Image src={rocketImg} alt="" height={450} />
        </div>
      </div>

      {/* Footer */}
      <footer className="md:h-[300px] bg-orange-500 bg-opacity-10">
        <div className="max-w-[1440px] flex flex-col w-11/12 p-8 mx-auto gap-6 h-full">
          <span className="font-bold text-2xl text-indigo-500">Tripify.</span>
          <p className="leading-normal">
            Providing the best service and providing the best price
          </p>
          <div className="mt-auto flex justify-between items-center border-t border-gray-900 pt-4">
            <span> &copy; 2023 All Rights Reserved</span>
            <ul className="flex justify-between items-center gap-4 text-white">
              <li className="flex justify-center items-center bg-orange-500 bg-opacity-80 text-white p-2 rounded-full cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/gabriel--vicente/"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li className="flex justify-center items-center bg-orange-500 bg-opacity-80 text-white p-2 rounded-full cursor-pointer">
                <a href="https://github.com/hastalamuerteg" target="_blank">
                  <Github size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
