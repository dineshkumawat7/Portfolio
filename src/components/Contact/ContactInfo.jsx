import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="bg-white rounded-2xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-500" /> +91 7627000907
            </div>
            <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-500" /> example@email.com
            </div>
            <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-500" /> Jaipur, Rajasthan, India
            </div>
        </div>
    );
}
