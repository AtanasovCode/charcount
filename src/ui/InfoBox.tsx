

const InfoBox = () => {
    return (
        <div className="w-full hidden xl:flex flex-col items-start justify-center text-text gap-4">
            <div className="font-semibold text-2xl font-fancy text-fancy">
                Zipf's Law
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-sm">
                    In any piece of text, regardless of its length, language,
                    or context, a certain patterns begin to appear where
                    a small number of words are used far more
                    frequently than the rest. The top 20 percent of the
                    most frequently used words typically account for a
                    disproportionately large share of the total word usage.
                </p>
                <p>
                    This phenomenon is known as <span className="text-fancy font-fancy">Zipf's Law</span>.
                </p>
            </div>
        </div>
    );
}

export default InfoBox;