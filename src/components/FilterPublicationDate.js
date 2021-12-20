import * as React from 'react';
import { Checkbox, TextField, Autocomplete } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilterPublicationDate(props) {
  const { books } = props;
  // Filter unique values from an array of publication Date
  const publicationDates = books.map((book) => book.publicationDate);
  let uniquePublicationDates = [...new Set(publicationDates)];

  // TODO: filtrowanie ksiażek po wybranym roku...

  return (
    <Autocomplete
      multiple
      id="checkboxes-publication-date"
      options={uniquePublicationDates}
      disableCloseOnSelect
      getOptionLabel={(book) => book}
      renderOption={(props, book, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            color="secondary"
            checkedIcon={checkedIcon}
            checked={selected}
            // onChange={}
          />
          {book}
        </li>
      )}
      style={{ minWidth: 250 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          color="secondary"
          label="Filter year"
        />
      )}
    />
  );
}
