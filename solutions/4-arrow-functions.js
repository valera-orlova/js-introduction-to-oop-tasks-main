// BEGIN
export default each = (objects, callback) => {
    for (let item of objects) {
        callback.apply(item);
    }
}
// END
