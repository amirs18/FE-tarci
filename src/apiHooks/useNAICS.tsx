import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Entity {
  code: number;
  name: string;
}

type Payload = {
  count: null | number;
  list: Entity[];
  offset: null;
  total: number;
};

export const useNaics = () => {
  return useQuery({
    queryKey: ["naics"],
    queryFn: () => axios.get<Payload>(import.meta.env.VITE_BE_URL + "/naics"),
  });
};
