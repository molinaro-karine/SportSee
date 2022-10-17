import { USER_MAIN_DATA } from "../../data/mockedDatas";
import UserDatas from "../../models/UserDatas";

export default class FetchData {
  constructor(id) {
    this.id = id;
  }

  fetchUserDatas() {
    const data = USER_MAIN_DATA.filter((user) => user.id === this.id);
    return Promise.resolve(new UserDatas(data[0]));
  }
}
