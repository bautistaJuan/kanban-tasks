import { create } from "zustand";
import { devtools } from "zustand/middleware";
const store = set => ({
  loader: true,
  isLoggedIn: false,
  boards: [],
  isFetchedBoards: false,
  toastMsg: "",
  setToastMsg: msg => set({ toastMsg: msg }, false, "setToastMsg"),
  setBoards: boards =>
    set({ boards, isFetchedBoards: true }, false, "setBoards"),
  addBoard: board =>
    set(old => ({ boards: [board, ...old.boards] }), false, "addBoard"),
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
