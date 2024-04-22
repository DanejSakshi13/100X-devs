import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",            //signifies how we uniquely identify 
    default: 0
});
