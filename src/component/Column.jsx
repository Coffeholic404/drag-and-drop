/* eslint-disable react/prop-types */
import { useState } from "react"

export const Column = ({title, headingColor, column, cards, setCards}) => {
    const [active, setActive] = useState(false);
    const filterCards = cards.filter((c) => c.column === column);
    return (<div className=" w-56 shrink-0">
        <div className=" mb-3 flex items-center justify-between">
            <h3 className={`font-medium ${headingColor}`}>
                {title}
            </h3>
            <span className="rounded text-sm text-neutral-400"> {filterCards.length} </span>
        </div>
        <div className={`h-full w-full transition-colors ${
            active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}> 
        {filterCards.map((c) => {
            return <Card key={c.id} {...c} />;
        })}
        </div>

        </div>
    );
}