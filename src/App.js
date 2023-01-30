import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import { useSnackbar,SnackbarProvider } from 'notistack'
import { Button, Divider, IconButton, LinearProgress, Stack, Typography } from '@mui/material';
import DownloadForOfflineRounded from '@mui/icons-material/DownloadForOfflineRounded';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from 'react';

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
    if(app=="" && action=="") alert('Please select application and action');
    else if(action=="") alert('Please select an action');
    else setObject(event.target.value);
  };
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./download.txt";
    link.click();
  };

  return (
    <Box sx={{backgroundColor:'#EEF1EF !important'}}  pt = {5} pl={10} pr={10} pb = {5} >
    <Typography  variant="h5">
        Upload data
      </Typography>
    <Box sx={{display:'flex',justifyContent:'space-between'}}  mb={2} mt={2}>
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
          size='medium'
        >
          <MenuItem value="p247">P247</MenuItem>
          <MenuItem value="bf">BF</MenuItem>
          <MenuItem value="rummy">Rummy</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{  minWidth: 140 }}>
        <InputLabel id="demo-simple-select-readonly-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label-small"
          id="demo-simple-select-readonly-small"
          value={action}
          onChange={handleChangeAction}
          autoWidth
          label="Action"
          placeholder='Action'
        >
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
          <MenuItem value="category">Category</MenuItem>
          <MenuItem value="properties">Properties</MenuItem>
          <MenuItem value="leads">Leads</MenuItem>
          <MenuItem value="authority">Authority Info</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Divider />
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} mt={4} mb={2}>
    <Button variant="outlined" endIcon={<DownloadForOfflineRounded/>} onClick={onDownload}>
      Download sample file
    </Button>
    <Button variant="contained" component="label" sx={{marginTop:'1.5rem'}}>
        Choose files
        <input hidden accept={".csv"} multiple type="file" />
      </Button>
    </Box>
    <LinearProgress/>
    </Box>

  );
  }