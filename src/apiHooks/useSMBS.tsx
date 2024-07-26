import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SMB {
  name: string;
  industries: Industry[];
  country?: string;
}

export interface Industry {
  type: string;
  code: string;
  name: string;
  year: string;
  level: string;
}
export const useSMBS = (naicsCode: number | undefined) => {
  return useQuery({
    queryKey: ["smbs", naicsCode],
    queryFn: () =>
      axios.get<SMB[]>(import.meta.env.VITE_BE_URL + "/smbs", {
        params: { naics: naicsCode },
      }),
  });
};
