import React from "react";
import Check from "../../99-Svg_Icon/check";

const ItemLi = ({ entry }) => {
    return (
        <ul className={`ul-anime open`}>
            {entry.description.itemLi.map((item, itemIndex) => (
                <li
                    className={`ul-anime open`}
                    key={`itemLi_${itemIndex + 1}`}
                    style={{
                        transitionDelay: `${itemIndex * 0.1}s`,
                    }}
                >
                    <Check />
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default React.memo(ItemLi);
