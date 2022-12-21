import axios from 'axios';

async function fetchBlog() {
    try {
        const url = 'https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://www.businessofapps.com/feed/rss/';
        const response = await axios.get(url);
        // const data = JSON.parse(
        //     convert.xml2json(response.data, { compact: true, spaces: 2 })
        // );

        // console.log(response);
        const objects = response.data.items;
        const array = objects
      //  console.log(array);
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