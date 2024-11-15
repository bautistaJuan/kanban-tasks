import { create } from "zustand";
import { devtools } from "zustand/middleware";
//
const store = set => ({
  loader: true,
  isLoggedIn: false,

  setLoginStatus: isLoggedInStatus =>
    set(
      {
        isLoggedIn: isLoggedInStatus,
        loader: false,
      },
      false,
      "setLoginStatus"
    ),
});
const useStore = create(devtools(store));
export default useStore;
