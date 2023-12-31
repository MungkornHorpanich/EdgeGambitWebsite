import React, { useState, Fragment } from "react";
import Logo from "../assets/EdgeGambit_3.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Announcement from "./Announcement";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full p-0 mx-auto fixed backdrop-blur-md">
      <Announcement />
      <div className="mx-auto mt-9">
        <div className="text-white flex flex-row justify-between p-3">
          <div className="flex gap-8">
            <Link to={"/"} className="my-auto">
              <svg
                width="150"
                height="25"
                viewBox="0 0 281 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto ml-2 w-[150px] md:w-[200px]"
              >
                <path
                  d="M179.183 12.968C177.711 14.9129 176.225 16.7693 174.796 18.6689C174.475 19.0961 174.153 19.2227 173.669 19.1797C173.337 19.1502 172.998 19.1482 172.666 19.1793C171.921 19.2492 171.456 19.0166 170.969 18.3507C168.838 15.4396 166.6 12.6057 164.39 9.75207C164.203 9.50934 163.934 9.32837 163.557 8.98633C163.557 14.617 163.557 20.0317 163.557 25.5132C161.866 25.5132 160.244 25.5132 158.554 25.5132C158.554 17.2681 158.554 8.98108 158.554 0.557364C160.062 0.557364 161.619 0.549343 163.176 0.568935C163.345 0.571055 163.567 0.691134 163.67 0.827378C165.971 3.88733 168.256 6.95923 170.55 10.024C171.232 10.9349 171.905 11.8561 172.656 12.7086C172.778 12.8482 173.443 12.7794 173.586 12.5966C175.346 10.3455 177.053 8.05261 178.781 5.77631C179.98 4.19743 181.173 2.61311 182.414 1.06752C182.626 0.803411 183.062 0.592792 183.404 0.579028C184.77 0.52397 186.139 0.556313 187.565 0.556313C187.565 8.8868 187.565 17.1737 187.565 25.5205C185.896 25.5205 184.207 25.5205 182.499 25.5205C182.499 20.1034 182.499 14.667 182.499 9.05223C182.229 9.258 181.968 9.38882 181.801 9.59481C180.918 10.6845 180.058 11.7931 179.183 12.968Z"
                  fill="#FAF9F6"
                />
                <path
                  d="M191.842 19.7744C191.842 13.3432 191.842 7.01217 191.842 0.605126C192.158 0.587721 192.445 0.558304 192.732 0.558103C196.948 0.555146 201.165 0.518508 205.38 0.571244C207.63 0.599384 209.825 1.12494 211.483 2.69409C212.298 3.46647 212.866 4.65481 213.181 5.75836C213.61 7.26513 213.67 8.88858 212.732 10.3003C212.283 10.9758 211.667 11.541 211.073 12.2166C212.736 12.9687 213.958 14.1346 214.492 15.8587C215.798 20.073 213.639 23.9949 209.189 25.1524C208 25.4615 206.728 25.5488 205.492 25.5615C200.98 25.608 196.467 25.5799 191.842 25.5799C191.842 23.6485 191.842 21.7615 191.842 19.7744ZM204.789 21.3759C205.505 21.3092 206.224 21.2662 206.936 21.1715C209.088 20.8853 210.276 19.0319 209.623 16.9731C209.186 15.5957 207.848 14.8199 206.174 14.7843C203.569 14.7288 200.961 14.7696 198.355 14.7696C197.868 14.7696 197.381 14.7696 196.925 14.7696C196.925 17.043 196.925 19.1899 196.925 21.3759C199.52 21.3759 202.056 21.3759 204.789 21.3759ZM207.503 5.64285C206.977 5.41546 206.456 5.00261 205.925 4.99137C202.928 4.92787 199.928 4.96068 196.912 4.96068C196.912 6.87004 196.912 8.68456 196.912 10.5654C199.793 10.5654 202.631 10.6281 205.463 10.5351C206.627 10.4969 207.803 10.1374 208.313 8.86506C208.788 7.68202 208.54 6.63555 207.503 5.64285Z"
                  fill="#FAF9F6"
                />
                <path
                  d="M51.1869 20.7632C49.4077 18.0722 48.729 15.1307 49.0108 12.0562C49.5497 6.177 52.9822 1.67586 59.1275 0.395051C63.7277 -0.563729 68.0838 0.11891 71.5579 3.59281C72.593 4.62786 73.2659 6.02247 74.1722 7.35135C72.6488 7.87329 71.4248 8.32667 70.1744 8.68957C69.9497 8.75478 69.4623 8.52034 69.3561 8.29994C68.1509 5.79905 64.1759 4.19217 61.2081 4.69815C57.5705 5.31832 55.4392 7.37978 54.5229 10.7719C53.6693 13.9321 54.367 16.8659 56.5185 19.3227C57.5066 20.4511 58.8696 21.1537 60.4134 21.4882C62.8712 22.0206 65.1928 21.6763 67.3986 20.5738C68.9178 19.8145 69.8993 18.6485 69.6823 16.794C69.6327 16.3703 69.675 15.9359 69.675 15.3965C66.7274 15.3965 63.8359 15.3965 60.89 15.3965C60.89 13.9661 60.89 12.645 60.89 11.2447C65.3027 11.2447 69.7329 11.2447 74.2964 11.2447C74.2964 13.0149 74.2418 14.8049 74.3121 16.59C74.3797 18.3065 74.2423 19.9376 73.1856 21.3791C71.8626 23.1838 70.1603 24.4406 68.0378 25.2108C64.6255 26.4489 61.1729 26.535 57.7458 25.5095C55.0761 24.7107 52.8239 23.1707 51.1869 20.7632Z"
                  fill="#04BF8A"
                />
                <path
                  d="M36.0819 25.5802C31.6435 25.5802 27.3012 25.5802 22.9087 25.5802C22.9087 17.2274 22.9087 8.96912 22.9087 0.556336C23.249 0.556336 23.6002 0.556336 23.9515 0.556336C27.7673 0.556336 31.5851 0.479499 35.3985 0.573919C41.4884 0.724697 46.0463 4.65204 47.1382 10.6758C47.794 14.2933 47.0992 17.7486 44.9398 20.7758C43.1598 23.2711 40.6747 24.7908 37.6419 25.3761C37.1588 25.4693 36.6662 25.5134 36.0819 25.5802ZM28.283 13.4686C28.283 16.0882 28.283 18.7077 28.283 21.1769C30.7559 21.1769 33.0823 21.1833 35.4086 21.1751C37.7767 21.1668 39.482 19.9485 40.7458 18.0913C42.3955 15.667 42.5476 12.9921 41.684 10.2699C40.8808 7.73788 39.2593 5.71757 36.5928 5.27491C33.9009 4.82804 31.1104 4.97044 28.283 4.85131C28.283 7.81102 28.283 10.5397 28.283 13.4686Z"
                  fill="#04BF8A"
                />
                <path
                  d="M120.907 15.6144C120.552 15.4687 120.203 15.3785 119.854 15.3768C117.285 15.3647 114.717 15.3703 112.113 15.3703C112.113 13.9401 112.113 12.5915 112.113 11.2066C116.588 11.2066 121.022 11.2066 125.533 11.2066C125.533 13.9054 125.703 16.5809 125.45 19.2161C125.348 20.2835 124.434 21.3526 123.695 22.2646C121.887 24.4967 119.359 25.5096 116.603 25.965C113.949 26.4034 111.318 26.2766 108.745 25.3837C104.385 23.8705 101.641 20.8747 100.64 16.4117C99.7259 12.3383 100.372 8.45885 102.888 5.06788C104.739 2.57281 107.288 0.978527 110.372 0.368413C112.828 -0.117664 115.312 -0.125289 117.726 0.572538C121.083 1.54265 123.551 3.62687 125.057 6.79369C125.148 6.98577 125.114 7.23703 125.14 7.47893C123.937 7.86138 122.76 8.19368 121.618 8.61959C121.154 8.7925 120.967 8.76717 120.692 8.32461C119.022 5.638 116.463 4.47867 113.407 4.58896C109.113 4.74386 106.171 7.7131 105.616 11.8686C105.305 14.2005 105.736 16.3019 107.01 18.2295C108.297 20.1766 110.125 21.2586 112.473 21.5995C114.651 21.9158 116.665 21.5454 118.594 20.5832C120.136 19.814 121.2 18.7214 120.92 16.8103C120.868 16.451 120.912 16.0776 120.907 15.6144Z"
                  fill="#FAF9F6"
                />
                <path
                  d="M89.7684 10.9664C92.4739 10.9664 95.0789 10.9664 97.7444 10.9664C97.7444 12.4512 97.7444 13.8624 97.7444 15.3483C92.8984 15.3483 88.0901 15.3483 83.21 15.3483C83.21 17.2993 83.21 19.1778 83.21 21.1666C88.2467 21.1666 93.28 21.1666 98.3603 21.1666C98.3603 22.6631 98.3603 24.0507 98.3603 25.5096C91.6475 25.5096 84.941 25.5096 78.1743 25.5096C78.1743 17.2211 78.1743 8.9383 78.1743 0.605957C84.8944 0.605957 91.5771 0.605957 98.3342 0.605957C98.3342 2.01397 98.3342 3.42558 98.3342 4.94776C93.3029 4.94776 88.2695 4.94776 83.1875 4.94776C83.1875 6.97803 83.1875 8.89943 83.1875 10.9664C85.3463 10.9664 87.5071 10.9664 89.7684 10.9664Z"
                  fill="#04BF8A"
                />
                <path
                  d="M8.39092 15.3702C7.15846 15.3702 6.02641 15.3702 4.83475 15.3702C4.83475 17.3229 4.83475 19.2011 4.83475 21.1538C9.88262 21.1538 14.8918 21.1538 19.9726 21.1538C19.9726 22.6375 19.9726 24.0489 19.9726 25.5207C13.3274 25.5207 6.68799 25.5207 0 25.5207C0 17.2213 0 8.96204 0 0.629395C6.64021 0.629395 13.2797 0.629395 19.9822 0.629395C19.9822 2.038 19.9822 3.44925 19.9822 4.93512C14.9394 4.93512 9.93029 4.93512 4.84776 4.93512C4.84776 6.95267 4.84776 8.89787 4.84776 10.9536C9.67916 10.9536 14.5116 10.9536 19.3924 10.9536C19.3924 12.45 19.3924 13.8377 19.3924 15.3702C15.7583 15.3702 12.1248 15.3702 8.39092 15.3702Z"
                  fill="#04BF8A"
                />
                <path
                  d="M140.285 0.556152C141.615 0.556152 142.852 0.556152 144.202 0.556152C148.384 8.86475 152.578 17.1989 156.796 25.58C155.081 25.58 153.384 25.6124 151.691 25.5517C151.365 25.54 150.914 25.2365 150.756 24.9424C149.858 23.266 149.031 21.5516 148.142 19.7745C144.083 19.7745 139.975 19.7615 135.868 19.8029C135.586 19.8058 135.197 20.1575 135.046 20.4452C134.165 22.1287 133.34 23.8415 132.495 25.5468C130.657 25.5468 128.826 25.5468 126.869 25.5468C128.081 23.1169 129.241 20.7552 130.434 18.41C132.069 15.1936 133.728 11.9891 135.379 8.78066C136.691 6.2327 137.992 3.67941 139.339 1.15014C139.484 0.878157 139.902 0.750673 140.285 0.556152ZM139.705 11.163C139.015 12.5444 138.326 13.9259 137.636 15.3078C140.432 15.3078 143.114 15.3078 145.733 15.3078C144.599 12.5258 143.482 9.77492 142.349 7.03058C142.274 6.84965 142.026 6.56681 141.949 6.59325C141.743 6.66425 141.506 6.84356 141.423 7.03953C140.859 8.36261 140.333 9.70116 139.705 11.163Z"
                  fill="#FAF9F6"
                />
                <path
                  d="M239.262 8.96439C239.262 14.531 239.262 19.9975 239.262 25.522C237.532 25.522 235.843 25.522 234.075 25.522C234.075 18.7172 234.075 11.8969 234.075 4.99731C230.835 4.99731 227.672 4.99731 224.452 4.99731C224.452 3.5037 224.452 2.08774 224.452 0.61377C232.555 0.61377 240.672 0.61377 248.849 0.61377C248.849 2.01258 248.849 3.42844 248.849 4.92469C245.703 4.92469 242.54 4.92469 239.262 4.92469C239.262 6.2893 239.262 7.57681 239.262 8.96439Z"
                  fill="#FAF9F6"
                />
                <path
                  d="M222.384 12.7681C222.383 17.0045 222.382 21.1408 222.379 25.2771C222.379 25.3396 222.355 25.4021 222.331 25.5223C220.788 25.5223 219.232 25.5223 217.619 25.5223C217.619 19.918 217.619 14.2991 217.619 8.62207C219.158 8.62207 220.713 8.62207 222.384 8.62207C222.384 9.95933 222.384 11.3137 222.384 12.7681Z"
                  fill="#FAF9F6"
                />
                <path
                  d="M218.593 6.36172C218.207 6.34343 217.918 6.32514 217.598 6.30489C217.598 4.38552 217.598 2.53333 217.598 0.618652C219.181 0.618652 220.729 0.618652 222.331 0.618652C222.331 2.4982 222.331 4.35065 222.331 6.36172C221.131 6.36172 219.911 6.36172 218.593 6.36172Z"
                  fill="#04BF8A"
                />
                <rect
                  x="254.844"
                  y="19.2183"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="267.457"
                  y="19.2183"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="261.15"
                  y="12.9355"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="254.844"
                  y="6.65234"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="261.15"
                  y="0.369629"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="273.763"
                  y="12.9355"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="267.457"
                  y="6.65234"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
                <rect
                  x="273.763"
                  y="0.369629"
                  width="6.30619"
                  height="6.2829"
                  fill="#04BF8A"
                />
              </svg>
            </Link>
            <ul className="hidden cursor-pointer lg:flex items-center gap-3 text-[16px]">
              <Link to={"/"}>
                <li className="e p-1 px-2 hover:text-green">Home</li>
              </Link>
              <Link to={"/wearelaunchingsoon"}>
                <li className=" p-1 px-2 hover:text-green">Competitions</li>
              </Link>
              <Link to={"/wearelaunchingsoon"}>
                <li className="p-1 px-2 hover:text-green">Docs</li>
              </Link>
              <Link to={"/wearelaunchingsoon"}>
                <li className=" p-1 px-2 hover:text-green">Plans</li>
              </Link>
              <li className=" rounded-lg hover:text-green">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center hover:text-green rounded-md px-2 py-1 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                      About us
                      <ChevronDownIcon
                        className="ml-1 -mr-1 h-5 w-5 mt-1 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#1D334D] shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={"/wearelaunchingsoon"}>
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-200 text-black"
                                    : "text-white"
                                } group flex w-full items-center rounded-md px-2 py-2  text-sm`}
                              >
                                About EdgeGambit
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={"/wearelaunchingsoon"}>
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-200 text-black"
                                    : "text-white"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Blog
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={"/wearelaunchingsoon"}>
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-200 text-black"
                                    : "text-white"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Newsletter
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={"/wearelaunchingsoon"}>
                              <button
                                className={`${
                                  active
                                    ? "bg-gray-200 text-black"
                                    : "text-white"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Contact
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </ul>
          </div>
          <div className="items-center flex justify-center gap-2">
            <div className="hidden lg:flex items-center text-[16px] hover:text-green p-1 justify-center">
              <Link to={"/wearelaunchingsoon"}>Login</Link>
            </div>
            <div className="hidden lg:flex mr-2 items-center text-[16px] hover:text-green p-1 justify-center  ">
              <Link to={"/wearelaunchingsoon"}>Sign up</Link>
            </div>
            <HiMenu
              size={25}
              color="white"
              className="lg:hidden"
              onClick={handleNav}
            />
          </div>
          <div
            className={
              !nav
                ? "fixed right-0 top-0 w-[60%] h-screen bg-[#1D334D] ease-in-out duration-500 rounded-lg"
                : "fixed right-[-100%]"
            }
          >
            <ul className="flex flex-col gap-2 pt-4 text-black pl-6 mr-5">
              <div className="flex justify-between">
                <div></div>
                {!nav ? (
                  <HiX
                    size={25}
                    color="#FAF9F6"
                    className="m-2"
                    onClick={handleNav}
                  />
                ) : (
                  ""
                )}
              </div>
              <Link to={"/"}>
                <li className="p-2 hover:bg-gray-200 font-semibold">Home</li>
              </Link>
              <Link to={"/wearelaunchingsoon"}>
                <li className="p-2 hover:bg-gray-200 font-semibold">
                  Competitions
                </li>
              </Link>
              <Link to={"/wearelaunchingsoon"}>
                <li className="p-2 hover:bg-gray-200 font-semibold">Docs</li>
              </Link>
              <Link to={"/wearelaunchingsoon"}>
                <li className="p-2 hover:bg-gray-200 font-semibold">Plans</li>
              </Link>
              <li className="p-2 hover:bg-gray-200 font-semibold">
                <Menu>
                  <Menu.Button className="w-full flex justify-start">
                    About Us
                    <ChevronDownIcon
                      className="ml-1 -mr-1 h-5 w-5 mt-1 text-black"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Menu.Items className="mt-1 flex flex-col">
                    <Menu.Item className="p-1 pl-3">
                      {({ active }) => (
                        <Link
                          to={"/wearelaunchingsoon"}
                          className={`${active && "bg-gray-300 "}`}
                        >
                          About EdgeGambit
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="p-1 pl-3">
                      {({ active }) => (
                        <Link
                          to={"/wearelaunchingsoon"}
                          className={`${active && "bg-gray-300"}`}
                        >
                          Blog
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="p-1 pl-3">
                      {({ active }) => (
                        <Link
                          to={"/wearelaunchingsoon"}
                          className={`${active && "bg-gray-300"}`}
                        >
                          Newsletter
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="p-1 pl-3">
                      {({ active }) => (
                        <Link
                          to={"/wearelaunchingsoon"}
                          className={`${active && "bg-gray-300"}`}
                        >
                          Contact
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </li>
              <div className="text-[14px] justify-center border border-[#04bf8a] flex px-4 mt-3 py-2  rounded-full">
                <Link to={"/wearelaunchingsoon"} className="w-full text-center">
                  Login
                </Link>
              </div>
              <div className="text-[14px] justify-center flex px-4 mt-3 py-2 bg-[#04bf8a] font-bold rounded-full text-white">
                <Link to={"/wearelaunchingsoon"} className="w-full text-center">
                  Sign up
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
