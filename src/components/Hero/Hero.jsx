import SplitText from "../SplitText"
import LogoCarousel from "./LogoCarousel";

const Hero = () => {
    return (
        <section className="bg-[#032B2F] text-white min-h-screen flex items-center px-6 md:px-16 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center max-w-6xl mx-auto w-full">

                {/* Left Content */}
                <div>
                    <div className="text-6xl md:text-6xl font-extrabold leading-tight">
                        <SplitText
                            text="Hi There, I'm Dinesh Kumawat"
                            tag="h1"
                            splitType="chars"
                            delay={80}
                            duration={0.7}
                            className="text-left flex flex-wrap"
                            ease="power3.out"
                        />
                    </div>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                        I’m a Java Full-Stack Developer skilled in building scalable web applications
                        using Java, Spring Boot, React.js, and modern cloud technologies.
                        With expertise in microservices, REST APIs, and databases, I deliver
                        end-to-end solutions that are efficient, secure, and user-focused.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                        >
                            Book a call
                        </a>
                        <a
                            href="#"
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
                        >
                            Learn more
                        </a>
                    </div>

                    <div className="mt-10 text-2xl">
                        <LogoCarousel />
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="src/assets/images/profile.avif"
                        alt="Business Professional"
                        className="rounded-lg shadow-lg w-80 md:w-96 object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
