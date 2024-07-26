import { useNaics } from "./apiHooks/useNAICS";
import Loading from "./components/Loading";
import NAICSAutoCompleate from "./components/NAICSAutoCompleate";
import { Suspense, useState } from "react";

export default function App() {
  const [value, setValue] = useState<number>(-1);
  console.log("🚀 ~ App ~ value:", value);
  const { data, isLoading } = useNaics();

  return (
    <div className="flex flex-col  items-center  ">
      {isLoading && <Loading />}
      {data && <NAICSAutoCompleate data={data.data.list} setValue={setValue} />}
      {value !== -1 && <>{value}</>}
    </div>
  );
}
