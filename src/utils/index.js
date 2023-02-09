function appInDebugMode() {
    if (window.location.origin.includes("apportunity.io")) {
        //(process.env.NODE_ENV !== "production") {
        return false;
    } else {
        return true;
    }
}

export { appInDebugMode }