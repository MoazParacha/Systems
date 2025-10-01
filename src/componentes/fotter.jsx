import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const Footer = () => {
    return(
        <div className="bg-gray-200">
            <div className="flex">
                <div>
                <div className="text-3xl pt-16 pl-15 font-semibold">Services</div>
                <div className="flex mt-8">
                    <div >
                        <div>
                            <div className="text-lg pl-15 font-semibold">
                                <Link>Digital</Link>
                            </div>
                            <div className="pl-15">
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
                            <div className="text-lg mt-4 pl-15 font-semibold">
                                <Link>Data & Analytics</Link>
                            </div>
                            <div  className="pl-15">
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
                            <div className="text-lg mt-4 pl-15 font-semibold">
                                <Link>Cloud</Link>
                            </div>
                            <div className="pl-15">
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
                            <div className="text-lg mt-4 pl-15 font-semibold">
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
            <div>
                <div className="text-3xl pt-16 pl-15 font-semibold">Industries</div>
                <div>
                    <div className="pl-15">
                        <div className="mt-12 text-md hover:text-orange-700">
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
                <div className="text-3xl pt-16 pl-15 font-semibold">Insights</div>
                <div>
                    <div className="pl-15">
                        <div className="mt-12 text-md hover:text-orange-700">
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
                <div className="text-3xl pt-16 pl-15 font-semibold">Quick Links</div>
                <div>
                    <div className="pl-15">
                        <div className="mt-12 text-md hover:text-orange-700">
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
            <div>
                <div className="text-3xl mt-15 pt-16 pl-15 font-semibold">Subscribe</div>
                <div className="text-md pl-15 mt-3">
                    <p>Stay updated on how future of technology is shaping.</p>
                </div>
                <div className="flex">
                    <div className="hover:border-gray-600 pl-15 mt-4">
                        <input type="text" placeholder="Enter Your Email" className="border border-gray-400 rounded hover:outline-none hover:ring-4 hover:ring-gray-400 text-left px-4 py-2 w-70"/>
                    </div>
                    <div className="pl-5 h-25 hover:text-black-100">
                        <button className="mt-4 text-lg border border-gray-400 rounded hover:outline-none hover:ring-4 hover:ring-gray-400 text-center py-1.5 px-3 hover:bg-black hover:text-white transition duration-300">Submit</button>
                    </div>
                </div>
            </div>
            <hr className="border-t-1 border-gray-400 mt-2"/>

            <div className="flex">
                <div className="pl-15 flex gap-15 mt-7 text-gray-400 mb-8">
                <div className="hover:text-orange-700">
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </div>
                <div className="hover:text-orange-700">
                    <Link>Terms & Conditions</Link>
                </div>
                <div className="hover:text-orange-700">
                    <Link>Sitemap</Link>
                </div>
                <div className="hover:text-orange-700">
                    <Link> Cookie Policy</Link>
                </div>
                </div>
                <div className="pt-7.5 pl-80 text-gray-400">
                    <div>© 2025 Systems Ltd. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;