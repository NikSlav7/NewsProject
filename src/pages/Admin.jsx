import { renderToPipeableStream } from "react-dom/server"
import "../css/Admin.css"
function Admin(props){
    function click(){
             let news={

             "title":document.getElementById("1").value,
             "subtitle":document.getElementById("2").value,
             "picture":document.getElementById("3").value
             }
        let copu={...props.data}     
        copu["Sports"].push(news)
        props.data1(copu)
    }
    function click1(){
      props.show1(false)

    }






    return (
        <div className="admin-container" >
            <div className="admin-console">
                 <div className="admin-box-1">
                    <div className="admin-box-3">
                        <input id="1" className="admin-box-text"></input>
                    </div>
                    <div className="admin-box-4">
                      <input id="2" className="admin-box-text"></input>
                    </div>
                 </div>

                 <div className="admin-box-2">
                   <input id="3" className="admin-box-text2"></input>
                   <button onClick={()=>click()}>update</button>
                   <button onClick={()=>click1()}>cancel</button>
                 </div>


            </div>
        </div>
    )

}
export default Admin