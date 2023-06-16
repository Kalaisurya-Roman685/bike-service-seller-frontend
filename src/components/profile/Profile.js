// import React, { useEffect, useState } from 'react'
import './styles/Profile.scss';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { ProfileActionData, ProfileGetData } from '../../Redux/actions/profileactions/ProfileActions';
// function Profile() {

//   const urls = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU';

//   const history = useNavigate();

//   const dispatch = useDispatch();

//   const state = useSelector((state) => state?.users?.user?.user);

//   console.log(state, "state");

//   const [images, setImages] = useState("");


//   useEffect(() => {
//     dispatch(ProfileGetData());
//   }, [])


//   const handleChangeimage = (e) => {
//     setImages(e?.target?.files[0]);
//   }

//   const ProfileImageUpload = () => {
//     const userid = localStorage.getItem("id");
//     const formDatas = new FormData();
//     formDatas.append("image", images);
//     dispatch(ProfileActionData(JSON.parse(userid), formDatas, toast, history));
//   }

//   return (
//     <div className='mainprofilesection'>
//       <div className='insideprofile'>
//         <div className='cardsectionprofile'>
//           <div className='imageprofiel'>
//             <input type="file" onChange={handleChangeimage} accept='image/png, image/jpeg,image/jpg' style={{ display: "none" }} id="image" />
//             <label htmlFor='image'>
//               {images ? <>
//                 <img src={URL.createObjectURL(images)} alt="no image" className='imageround' />
//               </> : <>
//                 <img src={`http://localhost:9500/${state?.image}`} alt="no image" className='imageround' />

//               </>}
//             </label>
//             <div className='mt-4'>

//               <button onClick={ProfileImageUpload} className='upload'>Upload</button>



//             </div>
//           </div>
//           <div>

//             <div className='formsection'>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputEmail1" class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state?.username}/>
//                 <div id="emailHelp" class="form-text">
//                   {/* We'll never share your email with anyone else. */}
//                 </div>
//               </div>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1" />
//               </div>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1" />
//               </div>
//             </div>
//             <div className='formsection'>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputEmail1" class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 <div id="emailHelp" class="form-text">
//                   {/* We'll never share your email with anyone else. */}
//                 </div>
//               </div>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1" />
//               </div>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1" />
//               </div>
//             </div>
//             <div className='formsection'>
//               <div class="mb-3 col-lg-3">
//                 <label for="exampleInputEmail1" class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 <div id="emailHelp" class="form-text">
//                   {/* We'll never share your email with anyone else. */}
//                 </div>
//               </div>

//             </div>


//            <div className='d-flex justify-content-center mt-3 mb-3'>
//            <button class="submits">Submit</button>
//            </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile


import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import WorkerModel from './WorkerModel';
import Button from 'react-bootstrap/Button';
import { deleteworker, workersgetall } from '../../services/worker_services/worker_services';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
function Profile() {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);


  const [editid, setEditId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [wokeserdetails, setWorkers] = useState([]);


  useEffect(() => {

    setShow1(false);

    const userId = localStorage.getItem("id")

    const data = {
      userId: JSON.parse(userId)
    }

    console.log(data, "data")
    workersgetall(data).then((res) => {


      setWorkers(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [editid, show1]);


  const Edits = (id) => {
    setEditId(id);

    setTimeout(() => {
      handleShow();
    }, 500);
  }



  const DeleteUser = (id) => {

    const userids = localStorage.getItem("id");

    const sample = {
      userId: JSON.parse(userids),
      workerid: id
    }

    setShow1(false);

    deleteworker(sample).then((res) => {
      toast.success("Delete worker success");
      setShow1(true);
    }).catch((err) => {
      console.log(err);
      setShow1(false);
    })

  };
  return (
    <div className='mainprofilesection'>
      <div className='insideprofile'>
        <div className='left-box'>

        </div>
        <div className='right-box'>
          <WorkerModel Modal={Modal} show={show} handleClose={handleClose} handleShow={handleShow}
            Button={Button}
            editid={editid}
            setShow1={setShow1}
          />

          <div className='mt-4'>



            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>WorkerName</th>
                  <th>ContactNo</th>
                  <th>Location</th>
                  <th>Actions</th>

                </tr>
              </thead>
              <tbody>
                {wokeserdetails?.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.workName}</td>
                      <td>{item?.contactNo}</td>
                      <td>{item?.location}</td>
                      <td>
                        <div className='d-flex gap-2' style={{ cursor: "pointer" }}>
                          <div>
                            <i class="fa-sharp fa-regular fa-eye"></i>
                          </div>
                          <div onClick={() => Edits(item?._id)}>
                            <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                          <div onClick={() => DeleteUser(item?._id)}>
                            <i class="fa-solid fa-trash"></i>
                          </div>
                        </div>
                      </td>

                    </tr>

                    // <div>
                    //   {item?.workName}
                    //   <div onClick={() => Edits(item?._id)}>Edit</div>
                    // </div>
                  )
                })}

              </tbody>
            </Table>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Profile