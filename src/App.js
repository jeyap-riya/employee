import { useState } from 'react';
import { Table,Modal,Input,Space,Button} from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import * as React from 'react';






function App() {
  const [isEditing, setIsEditing] = useState(false)
  const[editing,setEditing] = useState(null)
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
      dataIndex:'dateOfJoining',
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
    setIsEditing(true);
    setEditing({...record})
    
   
  };
  const resetEditing=()=>{
    setIsEditing(false);
    setEditing(null);
    
  };
  
  const onAddEmployee = (record) => {
    setIsAdding(true);
    setIsAdding({...record})
   
  };
  const resetAdding=()=>{
    setIsAdding(false);
    setIsAdding(null);
    
  };
  
 
  
  
  return (
    <div className="App">
      <header className="App-header">
      <center><h1>Employee Details</h1> </center><br/><br/>
      <center><Button  onClick={onAddEmployee} style={{backgroundColor:"skyblue", color:"Black"}}>Add new employee
      <Modal
          title="Add new Employee"
          visible = {isAdding} 
          okText="Add"
          onCancel={()=>{
           resetAdding()
          }}
          
          onOk={() => {
           setDataSource(pre=>{
              return pre.map(employee=>{
               if(employee.id !== adding.id) {
                 return  employee + 1;
              }
             else{
                 return employee;
               }
              });
           });
            resetAdding()
          }  }                 
         >
          <Space direction="vertical" style={{ width: '100%' }}>
          <label >First Name</label>

<Input label="firstname:"
 value={adding?.firstName}
     onChange={(e) => {
       setAdding((pre)=>{
           return{...pre, firstName: e.target.value};
      });
}} placeholder="firstName"
/>
<label >Last Name</label>
<Input label="lastname:"
value={adding?.lastName}
onChange={(e) => {
setAdding((pre)=>{
return{...pre, lastName: e.target.value};
});
}} placeholder="lastName"
/>
<label >Email</label>
<Input label="email:"
value={adding?.email}
onChange={(e) => {
setAdding((pre)=>{
return{...pre, email: e.target.value};
});
}} placeholder="email"
/>

         
<label >Gender</label>
  <select  placeholder="gender"  style={{ color:"gray", width: '100%',height:"33px" }} value={adding?.gender}
   onChange={(e) => {
  setAdding((pre)=>{
    return{...pre, gender: e.target.value};
  });
}} >

       <option value="Male">male</option>

       <option value="female">female</option>

       <option value="other">other</option>

     

  </select>
  <label >Date Of Birth</label>
  <Input type="date" label="dateOfBirth:"
  value={adding?.dateOfBirth}
   onChange={(e) => {
  setAdding((pre)=>{
    return{...pre, dateOfBirth: e.target.value};
  });
}} placeholder="dateOfBirth"
  />
  <label >Date Of Joining</label>
  <Input type="date" label="dateOfJoining:"
  value={adding?.dateOfJoining}
   onChange={(e) => {
  setAdding((pre)=>{
    return{...pre, dateOfJoining: e.target.value};
  });
}} placeholder="dateOfJoining"
  />
            
           
            
           
            
          </Space>  
             
        </Modal>
        
      </Button><br/><br/></center>
      
      <Table columns={columns} dataSource={dataSource} />
    
        <Modal
           title="Edit Employee"
           visible={isEditing} 
           okText="Save"
           onCancel={()=>{
            resetEditing()
           }}
           
          onOk={() => {
            setDataSource(pre=>{
               return pre.map(employee=>{
                if(employee.id === editing.id){
                  return editing
                }
                else{
                  return employee;
                }
               })
            })
             resetEditing()
          }  }  
         required rules = {[{required:true, message:"Please Enter employee firs name"}]}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
          <label >First Name</label>

             <Input label="firstname:"
              value={editing?.firstName}
                  onChange={(e) => {
                    setEditing((pre)=>{
                        return{...pre, firstName: e.target.value};
                   });
}} placeholder="firstName"  required rules = {[{required:false, message:"Please Enter employee firstName"}]}
  />
  <label >Last Name</label>
  <Input label="lastname:"
  value={editing?.lastName}
   onChange={(e) => {
  setEditing((pre)=>{
    return{...pre, lastName: e.target.value};
  });
}} placeholder="lastName"
  />
  <label >Email</label>
  <Input label="email:"
  value={editing?.email}
   onChange={(e) => {
  setEditing((pre)=>{
    return{...pre, email: e.target.value};
  });
}} placeholder="email"
  />
  <label >Gender</label>
  <select  placeholder="gender"  style={{ color:"gray", width: '100%',height:"33px" }} value={editing?.gender}
   onChange={(e) => {
  setEditing((pre)=>{
    return{...pre, gender: e.target.value};
  });
}} >

       <option value="Male">male</option>

       <option value="female">female</option>

       <option value="other">other</option>

     

  </select>
  <label >Date Of Birth</label>
  <Input type="date" label="dateOfBirth:"
  value={editing?.dateOfBirth}
   onChange={(e) => {
  setEditing((pre)=>{
    return{...pre, dateOfBirth: e.target.value};
  });
}} placeholder="dateOfBirth"
  />
  <label >Date Of Joining</label>
  <Input type="date" label="dateOfJoining:"
  value={editing?.dateOfJoining}
   onChange={(e) => {
  setEditing((pre)=>{
    return{...pre, dateOfJoining: e.target.value};
  });
}} placeholder="dateOfJoining"
  />
  </Space>
         
          
        
             
        </Modal>
        
      </header>
    </div>
  );
}

export default App;

