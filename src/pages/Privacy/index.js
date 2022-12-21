import React from "react";
import MarkDownReader from "../../components/MarkDownReader";
import PageDetail from "../../components/PageDetail";


function PrivacyPolicy() {


    const markDownFile = require("../../data/markDown/privacyPolicy.md");
    const body = <MarkDownReader markDownFile={markDownFile} />
    const header = <div>
        <h1>
            Privacy Policy
        </h1>
        <p>Last updated October 30, 2022</p>
    </div>
    const image = require("../../assets/png/privacy/privacy.jpg");
    return (
        <PageDetail image={image} header={header} body={body} shouldContainImage={false} />
    );
}

export default PrivacyPolicy;
