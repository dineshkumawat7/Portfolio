import React, { useState } from "react";
import { useToast } from "../../hooks/useToast";
import InputField from "../InputField";

export default function FooterNewsletterForm() {
    const toast = useToast();

    const [form, setForm] = useState({
        email: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        // if (!form.email.trim()) {
        //     newErrors.email = "Email is required.";
        // } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
        //     newErrors.email = "Email is invalid.";
        // }
        return newErrors;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleFocus = (e) => {
        const { id } = e.target;
        setErrors((prev) => ({ ...prev, [id]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error('Bad Request', { description: 'All fields are required.' })
            return;
        }
        // Handle form submission logic here
        toast.success('Saved', { description: 'Form submitted successfully.' })
        setForm({
            email: "",
        });
        setErrors({});
    };

    return (
        <form className="max-w-xl mx-auto bg-transparent space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
                <InputField
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                />
                {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>
            <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-md bg-amber-500 hover:bg-amber-600 transition border border-gray-300 cursor-pointer"
            >
                Get Notified
            </button>
        </form>
    );
}