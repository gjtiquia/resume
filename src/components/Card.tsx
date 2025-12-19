export function Card(props: {
    title: string,
    subtitle: string,
    date: string,
    descriptions: string[],
}) {
    return (
        <div className="my-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between text-nowrap">
                <div className="flex flex-col md:flex-row md:items-center">
                    <h3>{props.title}</h3>
                    <p><span className="hidden md:inline md:px-2">|</span><span className="md:italic">{props.subtitle}</span></p>
                </div>
                <div>
                    <i>{props.date}</i>
                </div>
            </div>
            <BulletPoints points={props.descriptions} />
        </div>
    )
}

export function BulletPoints(props: { points: string[] }) {
    return (
        <ul className="marker:text-gray-800">
            {props.points.map((description, index) =>
                <li key={index} className="whitespace-pre-wrap">
                    {parseForBold(description)}
                </li>
            )}
        </ul>
    )
}

export function parseForBold(text: string) {
    // Parse **text** syntax for bold formatting
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            // Remove ** and make bold
            const boldText = part.slice(2, -2);
            return <strong key={partIndex}>{boldText}</strong>;
        }

        return part;
    });
}
