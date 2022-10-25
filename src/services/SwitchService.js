import FetchApiData from "./dataCalls/FetchApiData";
import FetchMockedData from "./dataCalls/FetchMockedData";

const isMockedData = false;

/**
 * we can either use the mocked data or the one fetched from the API
 * replace isMockedData with true to use local mocked data or false to use API data
 * @param {number} id
 * @returns Promises of datas
 */
export default function switchService(id) {
  if (isMockedData) return new FetchMockedData(id);

  return new FetchApiData(id);
}
