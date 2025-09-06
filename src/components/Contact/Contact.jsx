import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import { Instagram } from 'lucide-react';
import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left Side - Form */}



                {/* Right Side - Info & Map */}

            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 uppercase">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We can ensure reliability, low cost fares and most important, with safety and comfort in mind.
                        </p>
                        <p>
                            Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
                        </p>
                        <div className="mt-6 flex space-x-4 text-2xl text-gray-700">
                            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                            <a href="#" className="hover:text-blue-400"><FaSquareXTwitter /></a>
                            <a href="#" className="hover:text-pink-600"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="hover:text-blue-700"><i className="fa-brands fa-linkedin"></i></a>
                        </div>

                    </div>

                    <div >
                        <ContactForm />
                    </div>
                </div>


            </div>
            <div className="max-w-6xl mx-auto mt-10">
                <ContactMap />
            </div>
        </div>
    );
}
