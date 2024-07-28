// import * as React from 'react';
// import {useState} from "react"
// import { useTheme } from '@mui/material/styles';

// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 450,
//     },
//   },
// };

// const names = [
//   'Engineering',
//   'Production',
//   'Sales Executive',
//   'Marketing',
//   'Administration',
//   'IT',
  
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }




// export default function Department() {
//   const theme = useTheme();
//   const [personName, setPersonName] = useState([]);
//   const [dept, setDept]=useState("");
  
//   const handleDeptChange=(e)=>{
//     setDept(e.target.value);
//   }

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 570 }} style={{marginLeft:'0px',}}>
//         <InputLabel className='input'  id="demo-multiple-name-label">Employee Department</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           multiple
//           value={personName}
//           onChange={()=>{handleChange();handleDeptChange()}}
//           input={<OutlinedInput label="Employee Department" />}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
