import React, { useState } from "react";
import InputField from "./InputField";

export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!form.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Handle form submission logic here
        alert("Form submitted!");
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
        setErrors({});
    };

    return (
        <form className="max-w-xl mx-auto p-6 bg-transparent space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <InputField
                        id="firstName"
                        type="text"
                        placeholder="Full Name"
                        value={form.firstName}
                        onChange={handleChange}
                        aria-invalid={!!errors.firstName}
                        aria-describedby="firstName-error"
                    />
                    {errors.firstName && (
                        <p id="firstName-error" className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                </div>
                <div>
                    <InputField
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        aria-invalid={!!errors.lastName}
                        aria-describedby="lastName-error"
                    />
                    {errors.lastName && (
                        <p id="lastName-error" className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                </div>
            </div>
            <div>
                <InputField
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                />
                {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>
            <div>
                <textarea
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
                {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
            </div>
            <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-md bg-amber-500 hover:bg-amber-600 transition border border-gray-300 cursor-pointer"
            >
                Send Message
            </button>
        </form>
    );
}
