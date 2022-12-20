import axios from 'axios';
const convert = require("xml-js");

async function fetchBlog() {
    try {
        const url = '/appdevelopermagazine';
        const response = await axios.get(url);
        const data = JSON.parse(
            convert.xml2json(response.data, { compact: true, spaces: 2 })
        );
        const objects = data.rss.channel.item;
        const array = objects
        console.log(array);
        console.log('======success=======');
        // this.setState({ games: data.items });
        return array;
    }
    catch (e) {
        console.log('======failure=======');
        console.error(e);
        return [];
    }
};

export { fetchBlog };