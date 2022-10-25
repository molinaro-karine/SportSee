/**
 * @param {object} data performance data
 **/

export default class UserPerformance {
  constructor(data) {
    this.id = data.userId;
    this.kind = data.kind;
    this.data = data.data;
    this.setUpData();
  }

  setUpData() {
    /**
     *
     * @param {object} this.data
     * @param {object} this.kind
     */

    for (let i = 0; i < this.data.length; i++) {
      this.data[i].kind = this.kind[i + 1];
      switch (this.data[i].kind) {
        case "energy":
          this.data[i].kind = "énergie";
          break;
        case "strength":
          this.data[i].kind = "force";
          break;
        case "speed":
          this.data[i].kind = "vitesse";
          break;
        case "intensity":
          this.data[i].kind = "intensité";
          break;
        default:
          break;
      }
    }
    this.data.reverse();
  }
}
