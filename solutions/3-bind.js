// BEGIN
export default bind = (obj, f) => {
    return function(...argument) {
        return f.call(obj, ...argument);
    }
}
// END