import { useHistory } from "react-router-dom";

function AdminController() {

  const history = useHistory();

  function addPizza(){
     history.push("/addpizza")

  }


  function updatePizza(){
    history.push("/update")

 }

 function viewStatistics(){
  history.push("/chart")

}


 function viewOrders(){
  history.push("/vieworders")

}
    return (
      <>
        <div className="container">
          
          <hr/>
          <h1 style={{textAlign:'center'}}>Hiii Admin</h1>
          <hr/>
<div style={{ display: "flex", justifyContent: "space-between" }}>
          <div class="card" style={{width:'10rem',height:'100px',alignItems: "center"}}>
           <div class="card-body">
                <button className="btn btn-primary" onClick={addPizza}>Add Pizza </button>
            </div>
            </div>

            
            <div class="card" style={{width:'10rem',height:'100px',alignItems: "center"}}>
           <div class="card-body">
                <button className="btn btn-danger"  onClick={updatePizza}>Update/Delete Pizza </button>
            </div>
            </div>



            <div class="card" style={{width:'10rem',height:'100px',alignItems: "center"}}>
           <div class="card-body">
                <button className="btn btn-success" onClick={viewOrders}>View All Orders</button>
            </div>
            </div>

            
            <div class="card" style={{width:'10rem',height:'100px',alignItems: "center"}}>
           <div class="card-body">
                <button className="btn btn-warning"  onClick={viewStatistics}>View Statistics</button>
            </div>
            </div>





            </div>

          
        </div>
      </>
    );
  }
  
  export default AdminController;
  