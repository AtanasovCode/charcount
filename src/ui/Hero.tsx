import Swiggle from "../assets/swiggly-line.svg";

const Hero = () => {
    return (
        <div className="flex items-center justify-center min-h-1/3 w-full">
            <div className="text-text font-bold text-4xl xl:text-7xl flex flex-col items-center justify-center">
                <div>
                    Analyze your text
                </div>
                <div>
                    in <span className="font-fancy relative text-fancy">
                        real-time
                        <img src={Swiggle} className="absolute w-full max-h-16 -bottom-10 -right-[45%]" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Hero;