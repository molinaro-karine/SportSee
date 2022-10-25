import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/mockedDatas";
import UserActivity from "../../models/UserActivity";
import UserAverageSessions from "../../models/UserAverageSessions";
import UserDatas from "../../models/UserDatas";
import UserPerformance from "../../models/UserPerformances";

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
   * @returns {object} data from MockedDatas - Used in Header, KeyCard, and Score
   */

  fetchUserDatas() {
    const data = USER_MAIN_DATA.filter((user) => user.id === this.id);
    return Promise.resolve(new UserDatas(data[0]));
  }

  /**
   *
   * @param {number} this.id
   * @returns {object} data from MockedDatas - Used in DailyParameters
   */

  fetchUserActivity() {
    const data = USER_ACTIVITY.filter((user) => user.userId === this.id);
    return Promise.resolve(new UserActivity(data[0]));
  }

  /**
   *
   * @param {number} this.id
   * @returns {object} data from MockedDatas - Used in Performance
   */

  fetchUserPerformance() {
    const data = USER_PERFORMANCE.filter((user) => user.userId === this.id);
    return Promise.resolve(new UserPerformance(data[0]));
  }

  /**
   *
   * @param {number} this.id
   * @returns {object} data from MockedDatas - Used in AverageSessions
   */

  fetchUserAverageSessions() {
    const data = USER_AVERAGE_SESSIONS.filter(
      (user) => user.userId === this.id
    );
    return Promise.resolve(new UserAverageSessions(data[0]));
  }
}
