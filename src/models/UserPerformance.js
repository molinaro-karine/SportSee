/**
 * @param {object} data performance data
 **/

export default class UserPerformance {
  constructor(data) {
    this.id = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}
