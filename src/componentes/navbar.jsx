import { Link } from "react-router-dom";
// sahi tarika (case match kare)
import logo from "../assets/img/logo.png";
import { MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import img1 from "../assets/img/img1.PNG";
import img2 from "../assets/img/img2.PNG";
import img3 from "../assets/img/img3.PNG";
import img4 from "../assets/img/img4.PNG";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center relative z-50">

      {/* Logo */}
      <img src={logo} className="text-white w-38 pl-10 h-auto" alt="Logo" />

      {/* Navbar Links */}
      <div className="flex pb-1 pl-9 pt-1 gap-9">

        {/* Services */}
        <div className="relative group">
          <button className="text-white flex items-center text-sm cursor-pointer">
            Services <span className="ml-2 text-sm">▼</span>
          </button>
          <div className="
                fixed absolute left-0 top-16 w-full bg-white text-black shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 z-40 h-150 overflow-y-auto"
          >
            <div className="p-10">
              <div className="flex">
                {/* Left Box */}
                <div className="bg-gray-300 w-100">
                  <div className="pl-10 pt-10">
                    <div className="text-2xl font-bold">SERVICES</div>
                    <div className="w-80 h-auto mt-4">
                      <img src={img1} alt="img" />
                    </div>
                    <div className="mt-4 text-xl font-semibold">
                      <p>Why data standards matter & why</p>
                      <p>they’re important</p>
                    </div>
                    <div className="mt-6 text-orange-600 font-semibold hover:underline">
                      <button>LEARN MORE →</button>
                    </div>
                  </div>
                </div>

                {/* Right Links */}
                <div className="pl-20">
                  <div>
                    <Link to="/Digital" className="text-2xl font-semibold hover:text-orange-700">
                      Digital
                    </Link>
                  </div>
                  <div className="mt-3">
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Digital Consulting & Strategy</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Digital Commerce</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Business Applications</button>
                  </div>
                  <div className="pt-4">
                    <Link to="/DataAnalytics" className="text-2xl font-semibold hover:text-orange-700 mt-4">
                      Data & Analytics
                    </Link>
                  </div>
                  <div className="mt-4">
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Data Modernization</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Advanced Analytics</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Connected Intelligence</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Data Management</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Generative AI</button>
                  </div>
                  <div className="pt-4">
                    <Link to="/Cloud" className="text-2xl font-semibold hover:text-orange-700 mt-4">
                       Cloud
                    </Link>
                  </div>
                  <div className="mt-4 mb-16">
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Cloud Operations & Migration</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Cloud Application Development &</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Integration</button>
                    <button className="block mt-3 hover:text-orange-700 font-semibold">Managed Services</button>
                  </div>
                </div>
                <div className="pl-20">
                  <div>
                    <Link to="DigitalInfrastructureServices" className="text-2xl font-semibold hover:text-orange-700">
                      Digital Infrastructure Services
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to="/Security" className="text-2xl font-semibold hover:text-orange-700">
                      Security
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to="EmergingTechnologies" className="text-2xl font-semibold hover:text-orange-700">
                      Emerging Technologies
                    </Link>
                  </div>
                  <div className="mt-6">
                    <div className="mt-5 text-lg font-semibold hover:text-orange-700">
                      <Link to="BusinessProcessServices" className="text-2xl font-semibold hover:text-orange-700">
                        Business Process Services
                      </Link>
                    </div>
                    <div className="mt-5 text-lg font-semibold hover:text-orange-700">
                      <button>
                        Contact Center
                      </button>
                    </div>
                    <div className="mt-5 text-lg font-semibold hover:text-orange-700">
                      <button>
                        Digital Marketing
                      </button>
                    </div>
                    <div className="mt-5 text-lg font-semibold hover:text-orange-700">
                      <button>
                        Finance & Accounting
                      </button>
                    </div>
                    <div className="mt-5 text-lg font-semibold hover:text-orange-700">
                      <button>
                        Staff Augmentation
                      </button>
                    </div>
                    <div className="mt-5 text-lg font-semibold hover:text-orange-700">
                      <button>
                        Legal Process Outsourcing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="relative group">
          <button className="text-white flex items-center text-sm cursor-pointer">
            Industries <span className="ml-2 text-sm">▼</span>
          </button>
          <div className="
                fixed left-0 top-16 w-full bg-white text-black shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 z-40 h-100 overflow-y-auto"
           >
            <div className="flex">
                <div className="pl-15 mb-5">
                  <div className="bg-gray-300 w-100 h-100">
                    <div className="pl-10 pt-9">
                      <div className="text-2xl font-bold">SERVICES</div>
                      <div className="w-80 h-auto mt-4">
                        <img src={img2} className="" alt="img" />
                      </div>
                      <div className="mt-4 text-xl font-semibold">
                        <p>Perfecting the art of financial</p>
                        <p>consolidation</p>
                      </div>
                      <div className="mt-6 text-orange-600 font-semibold hover:underline">
                        <button>LEARN MORE →</button>
                      </div>
                    </div>
                </div>
              </div>
              <div className="pl-20 pt-10">
                <div className="text-2xl font-bold">
                  <Link  to="/Communications" className="text-black hover:text-orange-700">
                    Communications
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/BankingFinancialServices" className="text-black hover:text-orange-700">
                    Banking & Financial Services
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/PublicSector" className="text-black hover:text-orange-700">
                    Public Sector
                  </Link>
                </div>
              </div>
              <div className="pl-20 pt-10">
                <div className="text-2xl font-bold">
                  <Link to="/Health" className="text-black hover:text-orange-700">
                    Health
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/Retail" className="text-black hover:text-orange-700">
                    Retail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="relative group">
          <button className="text-white flex items-center text-sm cursor-pointer">
            Insights <span className="ml-2 text-sm">▼</span>
          </button>
          <div className="
                fixed left-0 top-16 w-full bg-white text-black shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 z-40"
           >
            <div className="flex">
                <div className="pl-15 mb-5">
                  <div className="bg-gray-300 w-100 h-100">
                    <div className="pl-10 pt-9">
                      <div className="text-2xl font-bold">SERVICES</div>
                      <div className="w-80 h-auto mt-4">
                        <img src={img3} className="" alt="img" />
                      </div>
                      <div className="mt-4 text-xl font-semibold">
                        <p>Systems Arabia unveils AI</p>
                        <p>innovations at LEAP 2025 as the</p>
                        <p>Bronze Sponsor</p>
                      </div>
                      <div className="mt-6 text-orange-600 font-semibold hover:underline">
                        <button>LEARN MORE →</button>
                      </div>
                    </div>
                </div>
              </div>
              <div className="pl-20 pt-10">
                <div className="text-2xl font-bold">
                  <Link  to="/Case studies" className="text-black hover:text-orange-700">
                    Case studies
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/Newsroom" className="text-black hover:text-orange-700">
                   Newsroom
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/WhitepaperseBooks" className="text-black hover:text-orange-700">
                    Whitepapers/eBooks
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/Blogs" className="text-black hover:text-orange-700">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative group">
          <button className="text-white flex items-center text-sm cursor-pointer">
            About <span className="ml-2 text-sm">▼</span>
          </button>
          <div className="
                fixed left-0 top-16 w-full bg-white text-black shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 z-40"
          >
          </div>
        </div>
      </div>

      {/* Careers */}
      <Link to="/Careers" className="text-white text-sm pl-70">
        Careers
      </Link>

      {/* Investors */}
      <div className="relative group pl-12">
        <button className="text-white flex items-center text-sm cursor-pointer">
          Investors <span className="ml-2 text-sm">▼</span>
        </button>
        <div className="
                fixed absolute left-0 top-16 w-full bg-white text-black shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 z-40 h-screen overflow-y-auto"
        >
              <div className="flex">
                <div className="pl-15 mb-5">
                  <div className="bg-gray-300 w-100 h-screen">
                    <div className="pl-10 pt-9">
                      <div className="text-2xl font-bold">SERVICES</div>
                      <div className="w-80 h-auto mt-4">
                        <img src={img4} className="h-60 w-auto flex items-center text-center pl-9" alt="img" />
                      </div>
                      <div className="mt-4 text-xl font-semibold">
                        <p>Hasan Waleed Majal (Company</p>
                        <p>Secretary)</p>
                        <p>Investor_relations@systemsltd.com</p>
                        <p>Hasan.waleed@systemsltd.com</p>
                      </div>
                      <div className="mt-6 text-orange-600 font-semibold hover:underline">
                        <button>LEARN MORE →</button>
                      </div>
                    </div>
                </div>
              </div>
              <div className="pl-20 pt-10">
                <div className="text-2xl font-bold">
                  <Link  to="/InvestorRelations" className="text-black hover:text-orange-700">
                    Investor Relations
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/Governance" className="text-black hover:text-orange-700">
                   Governance
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/Companyprofile" className="text-black hover:text-orange-700">
                    Company profile
                  </Link>
                </div>
                <div className="text-2xl font-bold mt-5">
                  <Link to="/FinancialReports" className="text-black hover:text-orange-700">
                   Financial Reports
                  </Link>
                </div>
              </div>
              <div className="pl-25 pt-10">
                <div className="text-2xl font-bold">
                  <Link to="/ElectionofBoardofdirectors" className="text-black hover:text-orange-700">
                    Election of Board of directors
                  </Link>
                </div>
                <div className="text-2xl mt-5 font-bold">
                  <Link to="/NoticesQuickLinks" className="text-black hover:text-orange-700">
                    Notices & Quick Links
                  </Link>
                </div>
              </div> 
            </div>
        </div>
      </div>
      {/* Search Icon */}
      <div className="border-l border-white-500">
        <button className="pl-12 pt-2 rounded-full text-white hover:scale-120 transform transition-transform duration-200">
          <MagnifyingGlassIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Globe + Dropdown */}
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full transform transition-transform duration-200 hover:scale-110">
          <GlobeAltIcon className="w-5 h-5 text-gray-300 hover:text-white" />
        </button>
        <div className="relative group">
          <span className="text-sm text-white pb-5 cursor-pointer">▼</span>
        <div className="
            fixed w-40 bg-white h-45 text-black shadow-lg rounded-lg
            absolute transform -translate-x-1/2 text-center
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-300 z-40"
        >
            <div className="flex">
            <div className="text-center items-center pl-13 pt-4 text-center  mb-10">
                <div className="text-xl font-semibold">
                  <Link  to="/Mea" className="text-black hover:text-orange-700">
                    MEA
                  </Link>
                </div>
                <div className="text-xl font-semibold mt-3">
                  <Link to="/Ksa" className="text-black hover:text-orange-700">
                   KSA
                  </Link>
                </div>
                <div className="text-xl font-semibold mt-3">
                  <Link to="/Apac" className="text-black hover:text-orange-700">
                    APAC
                  </Link>
                </div>
                <div className="text-xl font-semibold mt-3">
                  <Link to="/Global" className="text-black hover:text-orange-700">
                    Global
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;