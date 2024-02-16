import axios from 'axios';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PendingOrders() {

const [order,setOrder]=useState([]);

var status="DELIVERED";
const postData = {
    status,
  };
    const jwtToken = sessionStorage.getItem("jwtToken");
    const config1 = {
        headers: {
         Authorization:jwtToken,
          
        },
      };
const changeStatus=(e)=>{
 console.log(e.target.value);
 axios
      .put("http://127.0.0.1:7070/orders/pending/"+e.target.value,postData,config1)
      .then((res) => {
       //alert('Status Changes Successfully...!!!');
       toast.success('Status changed successfully.');
        setOrder(res.data);
        
      })
      .catch((err) => {
        //alert('Oops! Something went Wrong');
        toast.error('Oops! Something went wrong.');
      });


}
    useEffect(() => {

        axios.get('http://127.0.0.1:7070/orders/pending',config1)
          .then(function (response) {
           // console.log(response);
            console.log(response.data)
            setOrder(response.data);
            
          })
           
    }, [])


    return (
  <>
  <div className="container">
        <div className="card" style={{ margin: 100 }}>
          <h3  style={{ textAlign:'center' }}>Pending Orders</h3>
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Date</th>
                  <th>UserName</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {order.map((orders) => {
                  return (
                    <tr>
                      <td>{orders.id}</td>
                      <td>{orders.orderDate}</td>
                      <td>{orders.userName}</td>
                      <td>{orders.orderStatus}</td>
                      <td>
                        <button
                          type="button"
                          value={orders.id}
                          className="btn btn-primary btn-sm"
                          onClick={changeStatus}
                        >
                          ChangeStatus
                        </button>
                      </td>
                     
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>
   
  
  
  
  
  
  
  </>

        

      
      
        
    );
  }
  
  export default PendingOrders;
  