import './App.css';
import { useState } from 'react';
import {Button, Table,Modal,Input,Space,} from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Select from "react-select"




function App() {
  const [isEditing, setIsEditing] = useState(false)
  const[editingStudent,setEditingStudent] = useState(null)
  const [dataSource, setDataSource] = useState([
    {
      id:1,
      fname:'john',
      lname:'marry',
      email:'john@gmail.com',
      gender:'female',
      dob:'18/5/1990',
      dateofjoining:'6/6/2015',
    },
    {
      id:2,
      fname:'anthony',
      lname:'stanlin',
      email:'anthontstalin@gmail.com',
      gender:'male',
      dob:'13/11/2000',
      dateofjoining:'10/10/22',
    },
    {
      id:3,
      fname:'jeya',
      lname:'malai',
      email:'jeyamalai@gmail.com',
      gender:'male',
      dob:'25/5/1994',
      dateofjoining:'13/10/22',
    },
    {
      id:4,
      fname:'pandi',
      lname:'selvi',
      email:'pandiselvi@gmail.com',
      gender:'female',
      dob:'28/5/1999',
      dateofjoining:'18/10/2023',
    },
    
    {
      id:6,
      fname:'jeya',
      lname:'priya',
      email:'jeyapriya@gmail.com',
      gender:'female',
      dob:'06/10/2000',
      dateofjoining:'1/3/23',
    },
    {
      id:7,
      fname:'nithish',
      lname:'pushba',
      email:'nithishpushba@gmail.com',
      gender:'male',
      dob:'18/5/2006',
      dateofjoining:'10/10/23',
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
      dataIndex:'fname',
    },
    {
      key:'3',
      title:'Last Name',
      dataIndex:'lname',
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
      dataIndex:'dob',
    },
    {
      key:'7',
      title:'Date of joining',
      dataIndex:'dateofjoining',
    },
    {
      key:'8',
      title:'Actions',
      render:(record)=>{
        return (
        <>
        
        <EditOutlined onClick={()=>{
          onEditStudent(record)
          
           }}style={{color:"blue",marginLeft:12}}/>
        <DeleteOutlined onClick={()=>{
         onDeleteStudent(record)
        }} style={{color:"red",marginLeft:12}}/>
        
        </>
        );
      },
    },
    
  ];

  const onAddStudent = () => {
    const randomstring = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomstring,
      fname:' '+randomstring,
      lname:' '+randomstring,
      gender:'male',
      email: randomstring+"@gmail.com",
     dob:' '+randomstring,
      dateofjoining:' '+randomstring,
      
    };
    setDataSource((pre) => {
      return[...pre, newStudent]
    });

  };
  const onDeleteStudent=(record)=>{
    Modal.confirm({
      title:'Are you sure,you want to delete this employee record?',
      okText:'Yes',
      okType:'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
         });
      },
    });
       
  };
  const onEditStudent = (record) =>{
    setIsEditing(true);
    setEditingStudent({...record})
    
   
  };
  const resetEditing=()=>{
    setIsEditing(false);
    setEditingStudent(null);
    
  };
  var list=[
    {
      value:1,
      label:"male"
    },
    {
      value:2,
      label:"female"
    },
    {
      value:3,
      label:"other"
    }
  ];
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Employee Details</h1> <br/><br/>
      <Button onClick={onAddStudent} style={{backgroundColor:"skyblue", color:"Black"}}>Add new employee</Button><br/><br/>
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
               return pre.map(student=>{
                if(student.id === editingStudent.id){
                  return editingStudent
                }
                else{
                  return student;
                }
               })
            })
             resetEditing()
          }  }                                               
        >
          <Space direction="vertical" style={{ width: '100%' }}>
          <Input   value={editingStudent?.fname} onChange={(e)=>{
            setEditingStudent(pre=>{
              return{...pre,fname:e.target.value}
            })
          }}
            />
             <Input   value={editingStudent?.lname} onChange={(e)=>{
            setEditingStudent(pre=>{
              return{...pre,lname:e.target.value}
            })
          }}
            />
          <Input   value={editingStudent?.email} onChange={(e)=>{
            setEditingStudent(pre=>{
              return{...pre,email:e.target.value}
            })
          }}/>
          
          <Select options= {list} style={{ width: 470  }} 
          placeholder="Gender"
        value={editingStudent?.gender} onChange={(e)=>{
            setEditingStudent(pre=>{
              return{...pre,gender:e.target.value}
            })
          }}/>
            
        <Input type='date' style={{ width: 470  }} value={editingStudent?.dob} onChange={(e)=>{
            setEditingStudent(pre=>{
              return{...pre,dob:e.target.value}
            });
          }}
              placeholder='Date of Birth' />
     
       
           
            <Input type="date"style={{ width: 470  }}   value={editingStudent?.dateofjoining} onChange={(e)=>{
            setEditingStudent(pre=>{
              return{...pre,dateofjoining:e.target.value}
            });
          }}
              placeholder='Date of joining'    />
      
            
           
            
          </Space>  
             
        </Modal>
        
      </header>
    </div>
  );
}

export default App;

