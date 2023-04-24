// BEGIN
export default function make (numer, denom) {
    return {
        numer,
        denom,
        setNumer(num) {
            this.numer = num;
        },
        setDenom(num) {
            this.denom = num;
        },
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${numer}/${denom}`
        },
        add(num) {
            let n = (numer * num.getDenom() + denom * num.getNumer())
            let d = (denom * num.getDenom());
            return make(n, d);
        }
    }
}

// END