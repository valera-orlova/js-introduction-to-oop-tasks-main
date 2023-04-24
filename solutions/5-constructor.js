// BEGIN
export function Point (x, y) {
    this.getX = () => x;
    this.getY = () => y;
}

export function Segment (beginPoint, endPoint) {
    this.getBeginPoint = () => beginPoint;
    this.getEndPoint = () => endPoint;
}

export function reverse (segment) {
    const end = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const begin = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());

    return new Segment(end, begin);
}
// END
