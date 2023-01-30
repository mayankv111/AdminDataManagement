import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { useSnackbar,SnackbarProvider } from 'notistack'

export default function App() {
  
  const [app, setApp] = React.useState('');

  const handleChangeApp = (event) => {
    setApp(event.target.value);
  };

  const [action, setAction] = React.useState('');

  const handleChangeAction = (event) => {
    if(app=="") alert('Please select an application');
    else setAction(event.target.value);
  };

  const [object, setObject] = React.useState('');

  const handleChangeObject = (event) => {
    if(app=="" && action=="") alert('Please select application and object');
    else if(action=="") alert('Please select an object');
    else setObject(event.target.value);
  };
  return (
    <SnackbarProvider>
<Box sx={{display:'flex',justifyContent:'space-around'}} mt={5}>
      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel id="demo-simple-select-readonly-label">Application</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={app}
          onChange={handleChangeApp}
          autoWidth
          label="Application"
          placeholder='Application'
        >
          {/* <MenuItem value={true}>Select Application</MenuItem> */}
          <MenuItem value="p247">P247</MenuItem>
          <MenuItem value="bf">BF</MenuItem>
          <MenuItem value="rummy">Rummy</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{  minWidth: 140 }}>
        <InputLabel id="demo-simple-select-readonly-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={action}
          onChange={handleChangeAction}
          autoWidth
          label="Action"
          placeholder='Action'
        >
          {/* <MenuItem value={true}>Select Application</MenuItem> */}
          <MenuItem value="add">Add new data</MenuItem>
          <MenuItem value="update">Update data</MenuItem>
          <MenuItem value="delete">Delete data</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{  minWidth: 140 }}>
        <InputLabel id="demo-simple-select-readonly-label">Object</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={object}
          onChange={handleChangeObject}
          autoWidth
          label="Object"
          placeholder='Object'
        >
          {/* <MenuItem value={true}>Select Application</MenuItem> */}
          <MenuItem value="category">Category</MenuItem>
          <MenuItem value="properties">Properties</MenuItem>
          <MenuItem value="leads">Leads</MenuItem>
          <MenuItem value="authority">Authority Info</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </SnackbarProvider>
    
  );
}