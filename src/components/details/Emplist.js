
import * as React from 'react';
import {useState,useEffect,useCallback} from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Addemp from './Addemp';
import EditEmpModal from './EditEmpModal';
import '../../Dash.css';


//mui
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography,Divider } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//sweetalert
import Swal from 'sweetalert2';
import Navbar from '../../NewCom/Navbar';
import Sidebar from '../../NewCom/Sidebar';




export default function Emplist() {
  const navigate=useNavigate();

  

  const [data, setData] = useState([]);

  //state for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [totalCount, setTotalCount] = useState(0);
  
   // State for modal
   const [open, setOpen] = useState(false);
   const [selectedEmployee, setSelectedEmployee] = useState(null);
   
   //state for search
   const [searchTerm, setSearchTerm] = useState("");
   const [searchData, setSearchData] = useState([]);

  
   
   const fetchData = useCallback(async () => {
     const offset = page * rowsPerPage;
    //  const pagesize = rowsPerPage;
     try {
       const response = await axios.get(`http://localhost:8080/admin/emplist/${page}/${rowsPerPage}`);
       setData(response.data.content);
       setTotalCount(response.data.totalElements); // Ensure the total count is set
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, [page, rowsPerPage]);
    

    useEffect(() => {
     if (searchTerm) {
       handleSearch(searchTerm);
     } else {
       fetchData();
     }
   }, [fetchData, searchTerm]);

//handlefunctions
  const handleDelete = async (empId) => {
    try {
        await axios.delete(`http://localhost:8080/admin/delete/${empId}`);
        fetchData();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
};

const handleEdit = (employee) => {
  setSelectedEmployee(employee);
  setOpen(true); // Open the modal
};

const handleClose = () => {
  setOpen(false);
  setSelectedEmployee(null);
};

const handleSave = async () => {
  try {
    await axios.put(`http://localhost:8080/admin/editemp/${selectedEmployee.empId}`, selectedEmployee);
    fetchData();
    handleClose();
  } catch (error) {
    console.error('Error updating employee data:', error);
  }
};

const handleChange = (e) => {
  setSelectedEmployee({ ...selectedEmployee, [e.target.name]: e.target.value });
};


const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0); // Reset page when rows per page changes
};


const handleSearch = async (value) => {
  if (value) {
    try {
      const response = await axios.get(`http://localhost:8080/admin/search/${value}`);
      setData(response.data);
      setTotalCount(response.data.length);
      setPage(0); // Reset to the first page
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  } else {
    setSearchData([]);
    fetchData(); // If the search term is cleared, fetch the original data
  }
};

const handleSearchChange = (event, value) => {
  setSearchTerm(value);
};






// const displayedData = searchTerm ? searchData.slice(page * rowsPerPage, (page + 1) * rowsPerPage) : data;


  return (
    
    <>
    <div className='dashbg'> 
      <Navbar/>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
    <Paper >
      <Typography gutterBottom variant="h5" component="div" sx={{padding:"20px"}}>
        Employees List
      </Typography>
      <Divider/>
      <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              // disablePortal
              freeSolo
              id="combo-box-demo"
              sx={{ width: 300 }}
              options={data.map((option) => option.empName)}
              onInputChange={handleSearchChange}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Employee" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleIcon />} onClick={()=>{navigate('/addemp')}}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell align="left" style={{ minWidth: "100px" }}>Id</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Name</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Email</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Department</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Salary</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Action</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
          
             
          {data.map(item => (
                  
                  <TableRow hover role="checkbox" tabIndex={-1}  key={item.id}>
                    
                        <TableCell  align="left">
                        {item.empId}
                        </TableCell>
                        <TableCell  align="left">
                        {item.empName}
                        </TableCell>
                        <TableCell  align="left">
                        {item.gmail}
                        </TableCell>
                        <TableCell  align="left">
                        {item.dept}
                        </TableCell>
                        <TableCell  align="left">
                        {item.salary}
                        </TableCell>
                     <TableCell align='left'>
                        <Stack direction="row" spacing={2}>
                        
                          <EditIcon
                             style={{
                              fontSize: "20px",
                              color:'dodgerblue',
                              cursor:'pointer',
                            }}
                            onClick={()=>{handleEdit(item)}}
                            />
                          
                          <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color:'darkred',
                            cursor:'pointer',
                          }}
                          onClick={()=>{handleDelete(item.empId)}}
                          />
                         
                          
                        </Stack>

                     </TableCell>
                  </TableRow>
                ))}
            
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
  component="div"
  count={totalCount} // Total number of items (you may need to get this from the backend as well)
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>

{/* Render EditEmployeeModal component */}
<EditEmpModal
        open={open}
        handleClose={handleClose}
        selectedEmployee={selectedEmployee}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    </Paper>
    </Box>
      </Box>
      </div>
    </>
  
  );
}




 // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [rows, setRows] = useState([]);
  
  // const empCollectionRef = collection(dbb,"details");

  // useEffect(()=>{
  //   getUsers();
  // },[]);

  // const getUsers=async ()=>{
  //   const data =await getDocs(empCollectionRef);
  //   setRows(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
  // };


  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // const deleteUser=(id)=>{
  //   Swal.fire({
  //     title:"Are you sure?",
  //     text:"You won't be able to revert this!",
  //     icon:"warning",
  //     showCancelButton:true,
  //     confirmButtonColor:"dodgerblue",
  //     confirmButtonText:"Delete",
  //     cancelButtonColor:"darkred",
  //   }).then((result)=>{
  //     if(result.value){
  //         deleteApi(id);
  //     }
  //   })
  // }
    
  // const deleteApi=async (id)=>{
  //   const userDoc =doc(dbb, "details",id);
  //   await deleteDoc(userDoc);
  //   getUsers();

  // }

  // const filterData = (v) => {
  //   if (v) {
      
  //     setRows([v]);
  //   } else {
  //     setRows(['']);
  //     getUsers();
  //   }
  // };


//firebase configured
{/* <TableBody>
  {rows
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          
              <TableCell key={row.id} align="left">
               {row.name}
              </TableCell>
              <TableCell key={row.id} align="left">
               {row.email}
              </TableCell>
              <TableCell key={row.id} align="left">
               {row.department}
              </TableCell>
              <TableCell key={row.id} align="left">
               {row.salary}
              </TableCell>
           <TableCell align='left'>
              <Stack direction="row" spacing={2}>
              
                <EditIcon
                   style={{
                    fontSize: "20px",
                    color:'dodgerblue',
                    cursor:'pointer',
                   }}
                   onClick={()=>{deleteUser(row.id)}}
                />
                
                <DeleteIcon
                style={{
                  fontSize: "20px",
                  color:'darkred',
                  cursor:'pointer',
                 }}
                 onClick={()=>{deleteUser(row.id)}}
                />
               
                
              </Stack>

           </TableCell>
        </TableRow>
      );
    })}
</TableBody> */}






