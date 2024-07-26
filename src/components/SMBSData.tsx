import { memo } from "react";
import { useSMBS } from "../apiHooks/useSMBS";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Loading from "./Loading";

const columns: GridColDef[] = [
  { field: "name", headerName: "name", width: 250 },
  { field: "country", headerName: "country", width: 250 },
  { field: "industries", headerName: "industries", width: 400 },
];

function SMBSData({ naicsCode }: { naicsCode: number | undefined }) {
  const { data, isLoading } = useSMBS(naicsCode);
  const rows = data?.data.map((d) => {
    return {
      ...d,
      industries: d.industries.reduce(
        (acc, cur) => (acc += cur.name + ", "),
        ""
      ),
    };
  });

  return (
    <div style={{ height: 370 }}>
      {isLoading && <Loading />}
      {data && (
        <DataGrid
          columns={columns}
          rows={rows}
          getRowId={(row) => row.name + row.country}
          autoPageSize={true}
        />
      )}
    </div>
  );
}
export default memo(SMBSData);
