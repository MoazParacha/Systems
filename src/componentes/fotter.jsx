import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const Footer = () => {
    return(
        <div className="bg-gray-200">
            <div className="lg:flex">
                <div>
                <div className="text-3xl pl-4 pt-8 md:pt-16 md:pl-15 lg:pt-16 lg:pl-15 font-semibold">Services</div>
                <div className="md:flex lg:flex mt-8">
                    <div >
                        <div>
                            <div className="text-lg pl-4 md:pl-15 lg:pl-15 font-semibold">
                                <Link>Digital</Link>
                            </div>
                            <div className="pl-4 pt-3 md:pl-15 lg:pl-15">
                                <div className="mt-2 hover:text-orange-700 text-md">
                                    <button>Digital Consulting & Strategy</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Digital Commerce</button>
                                </div>
                                <div className="mt-2 hover:text-orange-700 text-md">
                                    <button>Business Applications</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg mt-4 pl-4 md:pl-15 lg:pl-15 font-semibold">
                                <Link>Data & Analytics</Link>
                            </div>
                            <div  className="pl-4 pt-3 md:pl-15 lg:pl-15">
                                <div className="mt-2 hover:text-orange-700 text-md">
                                    <button>Data Modernization</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Advanced Analytics</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Connected Intelligence</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Data Management</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Generative AI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                        <div>
                            <div className="text-lg mt-4 pl-4 md:pl-15 lg:pl-15 font-semibold">
                                <Link>Cloud</Link>
                            </div>
                            <div className="pl-4 pt-3 md:pl-15 lg:pl-15">
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Cloud Operations & Migration</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Cloud Applications</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Development & Integrations</button>
                                </div>
                                <div className="mt-2 text-md hover:text-orange-700">
                                    <button>Managed Services</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="text-lg mt-4 pl-4 md:pl-15 lg:pl-15 font-semibold">
                                <div className="hover:text-orange-700">
                                    <Link>
                                        <div>Digital Infrastructure</div>
                                        <div>Service</div>
                                    </Link>
                                </div>
                                <div className="hover:text-orange-700">
                                    <Link>Securit</Link>
                                </div>
                                <div className="hover:text-orange-700">
                                    <Link>Emerging Technologie</Link>
                                </div>
                                <div className="hover:text-orange-700">
                                    <Link>Business Process Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="md:flex">
                <div>
                <div className="text-3xl pl-4 pt-4 md:pl-15 md:pt-16 lg:pt-16 lg:pl-15 font-semibold">Industries</div>
                <div>
                    <div className="pl-4 md:pl-15 lg:pl-15">
                        <div className="mt-6 text-md hover:text-orange-700 md:mt-12 lg:mt-12">
                            <button>Communications</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Banking & Financial</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Services</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Public Sector   </button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Public Sector</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Retail</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="text-3xl pl-4 pt-4 md:pl-15 md:pt-16 lg:pt-16 lg:pl-15 font-semibold">Insights</div>
                <div>
                    <div className="pl-4 md:pl-15 lg:pl-15">
                        <div className="mt-6 text-md hover:text-orange-700 md:mt-12 lg:mt-12">
                            <button>Case Studies</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Newsroom</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Whitepapers / EBooks</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Blogs</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-3xl pl-4 pt-4 md:pl-15 md:pt-16 lg:pt-16 lg:pl-15 font-semibold">Quick Links</div>
                <div>
                    <div className="pl-4 md:pl-15 lg:pl-15">
                        <div className="mt-6 text-md hover:text-orange-700 md:mt-12 lg:mt-12">
                            <button>Who we are</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Careers</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Our Leadership</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Investor Relation</button>
                        </div>
                        <div className="mt-1 text-md hover:text-orange-700">
                            <button>Financial Reports</button>
                        </div>
                    </div>
                </div>
            </div>

            </div>                
            </div>

            <div>
                <div className="text-3xl md:pl-15 lg:mt-15 pt-16 pl-4 lg:pl-15 font-semibold">Subscribe</div>
                <div className="text-xs sm:text-md pl-4 md:pl-15 md:text-lg lg:pl-15 lg:text-lg mt-3">
                    <p>Stay updated on how future of technology is shaping.</p>
                </div>
                <div className="md:flex lg:flex">
                    <div className="hover:border-gray-600 pl-4 md:pl-15 lg:pl-15 mt-4">
                        <input type="text" placeholder="Enter Your Email" className="border border-gray-400 rounded hover:outline-none hover:ring-4 hover:ring-gray-400 text-left px-4 py-2 w-70"/>
                    </div>
                    <div className="pl-5 h-25 hover:text-black-100">
                        <button className="mt-4 text-lg border border-gray-400 rounded hover:outline-none hover:ring-4 hover:ring-gray-400 text-center py-1.5 px-3 hover:bg-black hover:text-white transition duration-300">Submit</button>
                    </div>
                </div>
            </div>
            <hr className="border-t-1 border-gray-400 mt-2"/>

        <div className="w-full flex flex-col justify-between items-center px-4 py-4 md:flex-row md:py-8 md:px-15 lg:flex-row text-gray-400">
            {/* Left Side Links */}
                <div className="flex flex-wrap justify-center text-xs gap-2 sm:gap-4 md:justify-start md:gap-6 lg:justify-start lg:gap-6 text-xs md:text-sm">
                   <Link to="/PrivacyPolicy" className="hover:text-orange-700">Privacy Policy</Link>
                   <Link to="/TermsConditions" className="hover:text-orange-700">Terms & Conditions</Link>
                   <Link to="/Sistems" className="hover:text-orange-700">Sitemap</Link>
                   <Link to="CookiePolicy" className="hover:text-orange-700">Cookie Policy</Link>
                </div>
            {/* Right Side Text */}
                <div className="text-xs md:text-sm mt-3 md:mt-0 text-center md:text-right">
                    © 2025 Systems Ltd. All Rights Reserved.
                </div>
        </div>

        </div>
    )
}

export default Footer;