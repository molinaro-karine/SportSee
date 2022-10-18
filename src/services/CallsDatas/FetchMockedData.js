import { USER_MAIN_DATA, USER_ACTIVITY } from "../../data/mockedDatas";
import UserActivity from "../../models/UserActivity";
import UserDatas from "../../models/UserDatas";

export default class FetchData {
  constructor(id) {
    this.id = id;
  }

  fetchUserDatas() {
    const data = USER_MAIN_DATA.filter((user) => user.id === this.id);
    return Promise.resolve(new UserDatas(data[0]));
  }

  fetchUserActivity() {
    const data = USER_ACTIVITY.filter((user) => user.userId === this.id);
    return Promise.resolve(new UserActivity(data[0]));
  }
}
