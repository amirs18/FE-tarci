import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { darken, lighten, styled } from "@mui/material";
import { Entity } from "../apiHooks/useNAICS";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor: lighten(theme.palette.primary.light, 0.85),
  ...theme.applyStyles("dark", {
    backgroundColor: darken(theme.palette.primary.main, 0.8),
  }),
}));

const GroupItems = styled("ul")({
  padding: 0,
});
function NAICSAutoCompleate({
  data,
  setValue,
}: {
  data: Entity[];
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}) {
  const options = data.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  return (
    <>
      {options && (
        <Autocomplete
          className="w-60"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.name}
          getOptionKey={(option) => option.code}
          renderInput={(params) => <TextField {...params} label="NAICS" />}
          renderGroup={(params) => (
            <li key={params.key}>
              <GroupHeader>{params.group}</GroupHeader>
              <GroupItems>{params.children}</GroupItems>
            </li>
          )}
          onChange={(_event, newValue) => {
            if (newValue) {
              setValue(newValue.code);
            } else {
              setValue(undefined);
            }
          }}
        />
      )}
    </>
  );
}

export default NAICSAutoCompleate;
