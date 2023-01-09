import React, {
} from "react";

function Seperator({ backgroundColor, opacity, paddingTop, paddingBottom }) {
    return (
        <div>

            <div className="line-styling" style={{ paddingTop: paddingTop, paddingBottom: paddingBottom }}>
                <div className="style-line" style={{ backgroundColor: backgroundColor, opacity: opacity }}></div>
                <div className="style-circle" style={{ backgroundColor: backgroundColor, opacity: opacity }}></div>
                <div className="style-circle" style={{ backgroundColor: backgroundColor, opacity: opacity }}></div>
            </div>
        </div>);

}

export default Seperator;
