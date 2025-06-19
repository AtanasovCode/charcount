import Swiggle from "../assets/swiggly-line.svg";

const Hero = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="text-text font-bold text-4xl xl:text-5xl flex flex-col items-center justify-center">
                <div>
                    Analyze your text
                </div>
                <div>
                    in <span className="font-fancy relative text-accent">
                        real-time
                        <img src={Swiggle} className="absolute w-[70%] -bottom-2 left-1/2 -translate-x-1/2" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Hero;