import AccordionItem from "./AccordionItem";

export default function Acoordion({ data }) {
    return (
        <div className="accordion">
            {data.map((item, index) => (
                <AccordionItem
                    title={item.title}
                    text={item.text}
                    num={index}
                    key={item.title + index}
                />
            ))}
        </div>
    );
}
