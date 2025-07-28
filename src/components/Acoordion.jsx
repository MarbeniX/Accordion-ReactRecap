import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Acoordion({ data }) {
    const [curOpen, setCurOpen] = useState(null);

    return (
        <div className="accordion">
            {data.map((item, index) => (
                <AccordionItem
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={item.title}
                    num={index}
                    key={item.title + index}
                >
                    {item.text}
                </AccordionItem>
            ))}
        </div>
    );
}
