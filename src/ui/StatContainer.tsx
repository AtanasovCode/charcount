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
            "w-full p-6 flex flex-col items-center justify-start gap-6",
            {
                "bg-primary": color === "primary",
                "bg-secondary": color === "secondary"
            }
        )}>
            <div className="font-semibold text-xl">
                {title}
            </div>
            <div className="text-lg font-bold">
                {value ? value : 0}
            </div>
        </div>
    );
}

export default StatContainer;