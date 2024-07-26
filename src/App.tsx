import { useNaics } from "./apiHooks/useNAICS";
import Loading from "./components/Loading";
import NAICSAutoCompleate from "./components/NAICSAutoCompleate";
import { Suspense, useState } from "react";
import SMBSData from "./components/SMBSData";

export default function App() {
  const [value, setValue] = useState<number | undefined>();
  const { data, isLoading } = useNaics();

  return (
    <div className="grid grid-cols-1 justify-items-center gap-4  m-11 ">
      {isLoading && <Loading />}
      {data && <NAICSAutoCompleate data={data.data.list} setValue={setValue} />}
      {value && <SMBSData naicsCode={value} />}
    </div>
  );
}
