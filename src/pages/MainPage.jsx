import Header from "../header/Header";
import '../css/MainPage.css'
import Category from "./Category";
function MainPage(){
    return (
        <div>
            <Header />
            <div className="main-page-container">
                <Category />
            </div>
        </div>
        
    )
}
export default MainPage;
