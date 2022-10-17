import FetchMockedData from "./CallsDatas/FetchMockedData";

/**
 * we can either use the mocked data or the one fetched from the API
 * replace FetchApiData() by FetchMockedData() to use the local mocked data
 * @param {number} id
 * @returns Promises of datas
 */

export default function switchService(id) {
  return new FetchMockedData(id);
}
