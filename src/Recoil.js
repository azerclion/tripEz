import { atom } from "recoil";

export const windowDimensionsStateAtom = atom({
  key: "windowDimensionsState",
  default: {
    width: 0,
    height: 0,
  },
});

export const languageStateAtom = atom({
  key: "languageStateAtom",
  default: "ko",
});
