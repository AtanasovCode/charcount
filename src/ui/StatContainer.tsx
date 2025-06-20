import clsx from "clsx"
type StatTypes = {
    title: string;
    value: number | null;
    color: string;
}

const StatContainer = ({
    title,
    value,
    color,
}: StatTypes) => {
    return (
        <div className={clsx(
            "w-full p-3 flex flex-col items-center justify-start gap-1.5 rounded-md text-background",
            {
                "bg-accent": color === "accent",
                "bg-green": color === "green",
                "bg-orange": color === "orange"
            }
        )}>
            <div className="text-3xl font-black">
                {value ? value : 0}
            </div>
            <div className="font-medium text-lg">
                {title}
            </div>
        </div>
    );
}

export default StatContainer;