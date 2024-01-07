import React from "react";
import CheckIcon from "../../99-Svg_Icon/CheckIcon";
import { Fade } from "react-awesome-reveal";

const ItemLi = ({ entry }) => {
    return (
        <ul className={`ul-anime open`}>
            {entry.description.itemLi.map((item, itemIndex) => (
                <Fade
                    cascade
                    triggerOnce="true"
                    delay={itemIndex * 410}
                    key={`itemLi_${itemIndex + 1}`}
                >
                    <li>
                        <CheckIcon />
                        {item}
                    </li>
                </Fade>
            ))}
        </ul>
    );
};

export default React.memo(ItemLi);
