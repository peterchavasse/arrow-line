const isUndefined = require('lodash/isUndefined');
class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  translate(first, second){
    let x,y;
    if (first && isUndefined(second)) {
      [x,y] = [first.x, first.y];
    } else {
      [x,y] = [first, second];
    }
    const result = new Point(this.x+(x || 0), this.y + (y || 0));
    return result;
  }

  leftOf(other) {
    return this.x < other.x
  }

  aboveOf(other) {
    return this.y < other.y
  }

  horizontallyAlignedTo(other){
    const hDist = Math.abs(other.x - this.x);
    const vDist = Math.abs(other.y - this.y);
    return hDist > vDist;
  }

  str() {
    return `${this.x} ${this.y}`
  }
}

module.exports = Point;