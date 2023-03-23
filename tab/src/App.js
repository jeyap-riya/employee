import { useState } from 'react';
import { Table,Modal,Input,Space,Button,Form} from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as React from 'react';






function App() {
  const [isEdit, setIsEdit] = useState(false)
  const[edit,setEdit] = useState(null)
 
  const [dataSource, setDataSource] = useState([
    {
      id:1,
      firstName:'john',
      lastName:'marry',
      email:'john@gmail.com',
      gender:'female',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },
    {
      id:2,
      firstName:'anthony',
      lastName:'stanlin',
      email:'anthontstalin@gmail.com',
      gender:'male',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },
    {
      id:3,
      firstName:'jeya',
      lastName:'malai',
      email:'jeyamalai@gmail.com',
      gender:'male',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },
    {
      id:4,
      firstName:'pandi',
      lastName:'selvi',
      email:'pandiselvi@gmail.com',
      gender:'female',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },
    {
      id:5,
      firstName:'pandi',
      lastName:'selvi',
      email:'pandiselvi@gmail.com',
      gender:'female',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },
    
    {
      id:6,
      firstName:'jeya',
      lastName:'priya',
      email:'jeyapriya@gmail.com',
      gender:'female',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },
    {
      id:7,
      firstName:'nithish',
      lastName:'pushba',
      email:'nithishpushba@gmail.com',
      gender:'male',
      dateOfBirth:'2023-03-14',
      dateOfJoining:'2023-03-14',
    },

    
  ]);
  const columns=[
    {
      key:'1',
      title:'ID',
      dataIndex:'id',
    },
    {
      key:'2',
      title:'First Name',
      dataIndex:'firstName',
    },
    {
      key:'3',
      title:'Last Name',
      dataIndex:'lastName',
    },
    {
      key:'4',
      title:'Email',
      dataIndex:'email',
    },
    {
      key:'5',
      title:'Gender',
      dataIndex:'gender',
     
    },
    {
      key:'6',
      title:'Date of Birth',
      dataIndex:'dateOfBirth',
    },
    {
      key:'7',
      title:'Date of joining',
      dataIndex:'dateOfJoining' ,
    },
    {
      key:'8',
      title:'Actions',
      render:(record)=>{
        return (
        <>
        
        <EditOutlined onClick={()=>{
          onEdit(record)
          
           }}style={{color:"blue",marginLeft:12}}/>
        <DeleteOutlined onClick={()=>{
         onDelete(record)
        }} style={{color:"red",marginLeft:12}}/>
       
  
        </>
        );
      },
    },
  ]
    const onDelete=(record)=>{
    Modal.confirm({
      title:'Are you sure,you want to delete this employee record?',
      okText:'Yes',
      okType:'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((employee) => employee.id !== record.id);
         });
      },
    });
       
  };
  const onEdit = (record) =>{
    setIsEdit(true);
    setEdit({...record})
    
   
  };
  const resetEdit=()=>{
    setIsEdit(false);
    setEdit(null);
    
  };
  
  const onAdd = () => {
    const newEmployee ={
      id:'',
      firstName:'',
      lastName:'',
      email:'',
      gender:'',
      dateOfBirth:'',
      dateOfJoining:'', 
    }
    setDataSource(pre=>{
      return[...pre, newEmployee ];
    }); 
  };
   
   return (

    <div className="App">
      <header className="App-header">
      <center><h1>Employee Details</h1> </center><br/><br/>
      <div><center><Button  onClick={onAdd} style={{backgroundColor:"skyblue", color:"Black"}}>Add new employee</Button><br/><br/></center></div>
       <div><Table columns={columns} dataSource={dataSource} /></div>
       <div><Modal
       title="Edit Employee"
       visible={isEdit}
       okText="Save"
       onCancel={()=>{
          resetEdit()
           }}
           
      onOk={() => {
        setDataSource(pre=>{
          return pre.map(employee=>{
              if(employee.id === edit.id){
                 return edit
                }
            
            
            else{
                 return employee;
                }
               });
            });
             resetEdit()
          }} 
       ><Form
        autoComplete="off" 
        labelCol={{ span:10}} 
        wrapperCol={{ span:10}}
        onFinish={( values) =>{
          console.log({ values});
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }} 
        >
          <Space direction="vertical" style={{ width: '100%' }}>
           
            <Form.Item name="firstName"label="First Name" 
            rules={[
              {
                required: true,
                message: "please Enter your First name",
                },
                {whitespace:true},
                {min: 3},
                ]}hasFeedback>  
              <Input value={edit?.firstName} onChange={(e) => {  setEdit((pre)=>{  return{...pre, firstName: e.target.value}; }); }} placeholder="firstName"></Input></Form.Item>
            <Form.Item name="lastName"label= "Last Name"  rules={[
              {
                required: true,
                message: "please Enter your First name",
                },
                {whitespace:true},
                {min: 3},
                ]}hasFeedback> 
             <Input value={edit?.lasttName} onChange={(e) => {  setEdit((pre)=>{  return{...pre, lastName: e.target.value}; }); }} placeholder="lastName"></Input></Form.Item>
             <Form.Item name="email"label= "Email"  rules={[
              {
                required: true,
                message: "please Enter your Email",
                },
                {type: "email"},
                ]}>
              <Input value={edit?.email} onChange={(e) => {  setEdit((pre)=>{  return{...pre, email: e.target.value}; }); }} placeholder="email"></Input></Form.Item>
              <Form.Item name="gender"label= "Gender" requiredMark="optional"> 
              <select  placeholder="gender"  style={{ color:"gray", width: '100%',height:"33px" }} value={edit?.gender} onChange={(e) => {setEdit((pre)=>{return{...pre, gender: e.target.value};});}} >
                      <option value="Male">male</option>
                      <option value="female">female</option>
                     <option value="other">other</option>
              </select></Form.Item>
            <Form.Item name="dateOfBirth"label= "date Of Birth"  rules={[
              {
                required: true,
                message: "please provide your date of birth",
                },
               
                ]}hasFeedback>
              <Input type="date" value={edit?.dateOfBirth} onChange={(e) => {  setEdit((pre)=>{  return{...pre, dateOfBirth: e.target.value}; }); }} placeholder="dateOfBirth"></Input></Form.Item>
            <Form.Item name="date of joing"label= "date Of Joining"  rules={[
              {
                required: true,
                message: "please provide your joining date",
                },
                
                ]}hasFeedback>
              <Input type="date" value={edit?.dateOfJoining} onChange={(e) => {  setEdit((pre)=>{  return{...pre, dateOfJoining: e.target.value}; }); }} placeholder="dateOfJoining"></Input></Form.Item>
              
          </Space> 
          </Form> 
        </Modal>
        </div>
      </header>
    </div>
    
   
   );
}
  
export default App;

