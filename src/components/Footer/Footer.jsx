import FooterNewsletterForm from "./NewsletterForm";

export default function Footer() {
    return (
        <footer className="bg-[#012B2F] text-gray-300 py-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 border-b border-gray-700 pb-8">

                {/* Brand + Newsletter */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-3">Upreach</h2>
                    <p className="mb-4">
                        Subscribe to our newsletter for the marketing insights,
                        trends, & growth strategies to scale your business.
                    </p>
                    <div>
                        <FooterNewsletterForm />
                    </div>
                </div>

                <div className=" grid md:grid-cols-2 gap-10">
                    {/* Sections */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Sections</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-400">Services</a></li>
                            <li><a href="#" className="hover:text-green-400">Team</a></li>
                            <li><a href="#" className="hover:text-green-400">Testimonials</a></li>
                            <li><a href="#" className="hover:text-green-400">Services</a></li>
                            <li><a href="#" className="hover:text-green-400">Team</a></li>
                            <li><a href="#" className="hover:text-green-400">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-400">FAQ's</a></li>
                            <li><a href="#" className="hover:text-green-400">404</a></li>
                            <li><a href="#" className="hover:text-green-400">404</a></li>
                            <li><a href="#" className="hover:text-green-400">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>Copyright © 2025 — All Rights Reserved</p>
                <p className="mt-2 md:mt-0">
                    Created by <span className="text-green-400 font-medium cursor-pointer">Dinesh Kumawat</span>
                </p>
            </div>
        </footer>
    );
}
