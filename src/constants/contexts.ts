import { createContext } from "react";

export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => { },
  ImageModalId: -1,
  setImageModalId: (value: number) => { },
});

