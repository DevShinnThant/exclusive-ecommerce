"use client";

import { atom, useRecoilState, useRecoilValue } from "recoil";

export const authState = atom({
  key: "authState", // unique ID (with respect to other atoms/selectors)
  default: {
    token: "",
    username: "",
  },
});

export const useGetAuthAtom = () => {
  const [_, setAuth] = useRecoilState(authState);
  const auth = useRecoilValue(authState);

  return {
    auth,
    setAuth,
  };
};
