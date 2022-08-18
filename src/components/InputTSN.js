import { useEffect, useState } from "react";
import TransferService from "../services/TransferData";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import ObjectRow from "./ObjectRow";

const article = {};
export default function Form() {

const [uploadedFile, setUploadedFile] = useState();
const [imagesList,setImagesList] = useState([])

async function handleSubmit(e) {
      e.preventDefault();
      article['file'] = e.target.file.files[0];

      setImagesList([])
      setUploadedFile(URL.createObjectURL(e.target.file.files[0]));
  
      try {
        const res = await TransferService.makeRequest(article)   
          
        res.data.obj.data.forEach(async (element,key) => {

          article['url']="http://localhost:8080/static/img?fileName="+element[0]+".jpg"
          const getData = await TransferService.getImage(article)
          const reader = new FileReader();
          reader.readAsDataURL(getData.data);

          reader.onloadend = () => {
            const base64data = reader.result;
            res.data.obj.data[key].push(base64data)

            setImagesList(prevState => [...prevState, res.data.obj.data[key]])
          };
        });
        NotificationManager.success("Results added successfully ");
      } catch (error) {
        NotificationManager.error(error.response.data, 'Click here!', 5000, () => {
          alert("Error while fetching the data");
        });
      }
        console.log(imagesList)
 
    }

    return (
      <>
        <div style={{backgroundColor:"#011542",color:"white"}}>

        <div  style={{display:"flex",justifyContent:"center"}}>
          <div className="bg-image ripple mt-4 hover-shadow" style={{maxWidth:"200px",borderRadius:"30px"}} >
            <img
              src={uploadedFile}
              className="img-fluid"
              alt="Sample"
            />
            <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <p className="text-white mb-0">Uploaded Image</p>
              </div>
            </div>
          </div>
        </div>

        

        <form method="post" onSubmit={handleSubmit} style={{minWidth:"500px", padding:"5px"}}>
            <div className="form-group m-4" style={{display:"flex",justifyContent:"center"}}>
                <input type="file" name="file" class="form-control w-25" id="exampleFormControlFile1" />
            </div>
            <button type="submit" className="btn btn-primary m-2">SUBMIT</button>
        </form>
        </div>


        <div className="d-flex justify-content-center flex-wrap">
        {imagesList.map((object, i) => <ObjectRow obj={object} key={i} />)}
        </div>
      
        <NotificationContainer/>
      </>
    );

  }

