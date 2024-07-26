import { memo } from "react";
import { useSMBS } from "../apiHooks/useSMBS";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "name", width: 250 },
  { field: "country", headerName: "country", width: 250 },
];

function SMBSData({ naicsCode }: { naicsCode: number | undefined }) {
  const { data, isLoading } = useSMBS(naicsCode);

  return (
    <div style={{ height: 370 }}>
      <DataGrid
        columns={columns}
        rows={data?.data}
        getRowId={(row) => row.name + row.country}
        autoPageSize={true}
      />
    </div>
  );
}
export default memo(SMBSData);
