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
            "w-full p-6 flex flex-col items-center justify-start gap-6 rounded-xl",
            {
                "bg-accent text-background": color === "accent",
                "bg-secondary": color === "secondary",
                "bg-orange text-background": color === "orange"
            }
        )}>
            <div className="text-5xl font-black">
                {value ? value : "00"}
            </div>
            <div className="font-semibold text-xl">
                {title}
            </div>
        </div>
    );
}

export default StatContainer;