import { useEffect } from "react";

const ProgressRing = ({
    children,
    width = 180,
    height = 180,
    percent = 0,
    shadow = true,
    ringColor = '#ffffff',
    ringBorderWidth = 2
}) => {
    const mobileWidth = width - 40;
    const mobileHeight = width - 40;

    useEffect(() => {
        const finalPercent = percent < 101 && percent > -1
            ? percent
            : 0;
        const circle = document.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        }
        setProgress(finalPercent);
    }, [percent]);

    return (
        <div className="relative flex items-center justify-center"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <svg
                className="progress-ring"
                width={width}
                height={height}
                style={{
                    filter: shadow ? 'drop-shadow(0px 0px 6px #FC7400)' : ''
                }}
            >
                <circle
                    className="progress-ring__circle"
                    strokeWidth={ringBorderWidth}
                    stroke={ringColor}
                    fill="transparent"
                    r={(width / 2) - 8}
                    cx={width / 2}
                    cy={height / 2}
                />
            </svg>
            {children}
        </div>
    );
};

export default ProgressRing;