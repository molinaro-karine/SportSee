import UserDatas from "../../models/UserDatas";

const url = "http://localhost:3000/user/";

/**
 * @class
 * @classdesc Fetch data from API. Has 4 methods corresponding to the API's 4 endpoints
 * This way, API calls are done outside of React Components
 */

export default class FetchData {
  constructor(id) {
    this.id = id;
  }

  /**
   *
   * @param {string} url
   * @param {number} this.id
   * @returns {object} data from API - Used in Banner, InfosCard, and Score
   */

  fetchUserDatas() {
    return fetch(`${url + this.id}`)
      .then((response) => response.json())
      .then((result) => {
        if (result !== "can not get user") return new UserDatas(result.data);
        throw result;
      })
      .catch((error) => console.log(error));
  }
}
