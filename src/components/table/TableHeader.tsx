import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Popover from "@mui/material/Popover";
import { useState, MouseEvent, ChangeEvent, useContext } from "react";
import TextField from "@mui/material/TextField";
import { debounce } from "@mui/material/utils";
import { TableContext } from "./TableContext";

interface TableNameProps {
  tableName: string;
}

const TableName = ({ tableName }: TableNameProps) => {
  return (
    <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: "15px" }}>
      {tableName}
    </Typography>
  );
};

interface TableFilterProps {
  filterName: string;
}

const TableFilter = ({ filterName }: TableFilterProps) => {
  const { tableOptions, setTableOptions } = useContext(TableContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "table-filter-popover" : undefined;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const debouncedSearch = debounce((searchTerm) => {
    setTableOptions({ ...tableOptions, filter: searchTerm });
  }, 300);

  return (
    <>
      <Button
        sx={{
          boxShadow: "0px 2px 2px 0px #1018280D",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          "& svg": {
            color: (theme) => theme.palette.info.main,
          },
        }}
        size="small"
        color="inherit"
        variant="outlined"
        aria-describedby={id}
        startIcon={<TuneOutlinedIcon fontSize="small" />}
        onClick={handleClick}
      >
        {filterName}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <TextField
            label="Section"
            size="small"
            defaultValue={tableOptions.filter}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              debouncedSearch(event.target.value);
            }}
          />
        </Box>
      </Popover>
    </>
  );
};

interface TableHeaderProps extends TableNameProps, TableFilterProps {}

export const TableHeader = ({ tableName, filterName }: TableHeaderProps) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", mb: "0.5rem" }}
    >
      <TableName tableName={tableName} />
      <TableFilter filterName={filterName} />
    </Box>
  );
};
