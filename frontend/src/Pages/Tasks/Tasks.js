// import React from "react";
// import MainScreen from "../../Components/MainScreen";
// import { Link } from "react-router-dom";
// import { Accordion, Badge, Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import tasks from "../../data/tasks";

// const Tasks = () => {
//     const deleteHandler=(id)=>{
//         if(window.confirm("Are you sure?")){

//         }
//     }

//   return (
//     <MainScreen title="Welcome back Channayya...">
//       <Link to="/createtask">
//         <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
//           Create New Task
//         </Button>
//         </Link>

//         {tasks.map((task) => (
//             <Accordion>
//                 <Card style={{ margin: 10 }}>
//             <Card.Header style={{ display: "flex" }}>
//               <span
//                 style={{
//                   color: "black",
//                   textDecoration: "none",
//                   flex: 1,
//                   cursor: "pointer",
//                   alignSelf: "center",
//                   fontSize: 18,
//                 }}
//               >
//                 <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">{task.title}</Accordion.Toggle>
//               </span>
//               <div>
//                 <Button href={`/tasks/${task._id}`}>Edit</Button>
//                 <Button variant="danger" className="mx-2" onClick={()=>deleteHandler(task._id)}>
//                   Delete
//                 </Button>
//               </div>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//             <Card.Body>
//                 <h4>
//                     <Badge variant="success">Category = {task.category}</Badge>
//                 </h4>
//         <blockquote className="blockquote mb-0">
//           <p>
//             {
//                 task.description
//             }
//           </p>
//           <footer className="blockquote-footer">
//            Created on - date
//           </footer>
//         </blockquote>
//       </Card.Body>
//             </Accordion.Collapse>
            
//           </Card>
//             </Accordion>
          
//         ))}
      
//     </MainScreen>
//   );
// };

// export default Tasks;



import React, { useEffect, useState } from "react";
import axios from "axios";
import MainScreen from "../../Components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const Tasks = () => {
    const [tasks,setTasks] =useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // Handle delete logic
    }
  };

  const fetchTasks=async()=>{
    const {data}= await axios.get("/api/tasks")

    setTasks(data);
  }
  console.log(tasks);

  useEffect(()=>{
    fetchTasks()
  },[])

  return (
    <MainScreen title="Welcome back Channayya...">
      <Link to="/createtask">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Task
        </Button>
      </Link>

      {tasks.map((task) => (
        <Accordion key={task._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Header as="h5" eventKey="0">
                  {task.title}
                </Accordion.Header>
              </span>
              <div>
                <Button href={`/tasks/${task._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(task._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category = {task.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{task.description}</p>
                  <footer className="blockquote-footer">Created on - date</footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Tasks;

