import React from "react";

export default function ContactMap() {
    return (
        <div className="rounded-none overflow-hidden shadow-lg mx-auto">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14252.424553956113!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4b00fbb!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-[300px]"
            ></iframe>
        </div>
    );
}
