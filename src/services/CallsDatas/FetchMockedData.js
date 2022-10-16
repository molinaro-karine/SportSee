import {
  USER_MAIN_DATA,
  //USER_ACTIVITY,
  //USER_AVERAGE_SESSIONS,
  //USER_PERFORMANCE
} from "../../data/mockedDatas";
import UserDatas from "../../models/UserDatas";

/**
 * @class
 * @classdesc Fetch mocked data from local file MockedDatas.js
 */

export default class FetchData {
  constructor(id) {
    this.id = id;
  }

  /**
   *
   * @param {number} this.id
   * @returns {object} data from MockedDatas - Used in Banner, InfosCard, and Score
   */

  fetchUserDatas() {
    const data = USER_MAIN_DATA.filter((user) => user.id === this.id);
    return Promise.resolve(new UserDatas(data[0]));
  }
}
