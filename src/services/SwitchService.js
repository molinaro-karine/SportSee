import FetchMockedData from "./CallsDatas/FetchMockedData";

export default function switchService(id) {
  return new FetchMockedData(id);
}
