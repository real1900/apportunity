import { read } from "feed-reader";
import React, { useState, useEffect } from "react";


async function fetchBlog() {
    try {


        const response = await fetch('/appdevelopermagazine',)
        const names = await response.text();
        console.log(names);
        console.log('======success=======');


        return [];
    }
    catch (e) {
        console.log('======failure=======');
        console.error(e);
        return [];
    }
};

export { fetchBlog };