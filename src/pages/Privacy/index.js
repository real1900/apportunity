import React from "react";
import MarkDownReader from "../../components/MarkDownReader";


function PrivacyPolicy() {


    const markDownFile = require("../../data/markDown/privacyPolicy.md");
    return (
        <MarkDownReader markDownFile={markDownFile} />
    );
}

export default PrivacyPolicy;
