// import React, { useEffect, useState } from 'react'
// import './App.css';

// function App() {


//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((result) => {
//       result.json().then((resp) => {
//         //console.warn("result", resp)
//         setData(resp)
//       })
//     })
//   }, [])



//   console.warn(data)
//   // fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   // .then(response => response.json())
//   // .then(json => console.log(json))

//   //const sendData


//   return (
//     <>
//       <div className="App">
//         {/* GET API  */}
//         <h1>Get API Call</h1>
//         <table border="1">
//           <tr>
//             <td>ID</td>
//             <td>PostID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Body</td>
//           </tr>
//           {
//             data.map((DATA) =>
//               <tr>
//                 <td>{DATA.postId}</td>
//                 <td>{DATA.id}</td>
//                 <td>{DATA.name}</td>
//                 <td>{DATA.email}</td>
//                 <td>{DATA.body}</td>
//               </tr>
//             )
//           }
//         </table>
//       </div>
//       <div className="Apps">
//         {/* POST API */}


//       </div>
//     </>

//   );
// }

// export default App;
