
import moment from "moment";

function convertUnixDateToDateTime(unixTimeStamp) {
    var date = moment(new Date(unixTimeStamp)).format("MMM DD, YYYY hh:mm a");
    return date
}

export { convertUnixDateToDateTime };