const logos = [
    { src: "/src/assets/images/logo.png", name: "Java" },
    { src: "/src/assets/images/logo.png", name: "Python" },
    { src: "/src/assets/images/logo.png", name: "JavaScript" },
    { src: "/src/assets/images/logo.png", name: "Docker" },
    { src: "/src/assets/images/logo.png", name: "Spring" },
    { src: "/src/assets/images/logo.png", name: "AWS" },
    { src: "/src/assets/images/logo.png", name: "Logoipsum" },
    { src: "/src/assets/images/logo.png", name: "Logoipsum" }
];

const LogoCarousel = () => {
    return (
        <div className="w-full overflow-hidden bg-transparent py-6">
            <div className="flex animate-scroll whitespace-nowrap gap-5">
                {logos.concat(logos).map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center mx-8 opacity-70 transition duration-300"
                    >
                        <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-12 w-auto mr-2 text-gray-300"
                        />
                        <span className="text-gray-300 font-medium">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
