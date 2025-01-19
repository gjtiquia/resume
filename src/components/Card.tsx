export function Card(props: {
    title: string,
    subtitle: string,
    date: string,
    descriptions: string[],
}) {
    return (
        <div className="my-1">
            <div className="flex flex-col md:flex-row justify-between text-nowrap">
                <div className="flex flex-col md:flex-row md:items-center">
                    <h3>{props.title}</h3>
                    <p><span className="hidden md:inline md:px-2">|</span><span className="md:italic">{props.subtitle}</span></p>
                </div>
                <div>
                    <i>{props.date}</i>
                </div>
            </div>
            <ul className="marker:text-gray-800">
                {props.descriptions.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
        </div>
    )
}