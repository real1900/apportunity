import { read } from "feed-reader";


async function fetchBlog() {

    try {

        const rssUrl = "https://proxy1900.herokuapp.com/http://feeds.feedburner.com/appdevelopermagazine";

        const result =  await read(rssUrl, {
            useISODateFormat: false,
            normalization: true,
            getExtraEntryFields: (feedEntry) => {
                const mediaContent = feedEntry["media:content"];
                const guid = feedEntry["guid"];
                const uid = guid.substring(0, guid.length - 1);
                const refinedId = uid.substring(uid.lastIndexOf('/') + 1, uid.length)

                return {
                    image: mediaContent["@_url"],
                    id: refinedId,
                }
            },

        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'mode': "no-cors"
            },
            mode: 'no-cors',
        });

        return result.entries;
    }
    catch (e) {
        console.error(e);
        return [];
    }
};

export { fetchBlog };