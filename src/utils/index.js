function appInDebugMode() {
    if (process.env.NODE_ENV !== "production") {
        return true;
    } else {
        return false;
    }
}

export { appInDebugMode }