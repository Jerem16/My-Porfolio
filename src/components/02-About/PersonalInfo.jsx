import React from "react";

function PersonalInfo({ info }) {
    return (
        <>
            {Object.entries(info).map(([key, value, index]) => (
                <div className="info-item" key={`Person.Inf_${key}`}>
                    <p>
                        {key} : <span>{value}</span>
                    </p>
                </div>
            ))}
        </>
    );
}

export default React.memo(PersonalInfo);
