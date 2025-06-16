type StatTypes = {
    title: string;
    value: number | null;
}

const StatContainer = ({
    title,
    value,
}: StatTypes) => {
    return (
        <div className="w-full p-2 flex flex-col items-center justify-start gap-4">
            <div className="font-semibold text-xl">
                {title}
            </div>
            <div className="text-md">
                {value}
            </div>
        </div>
    );
}

export default StatContainer;