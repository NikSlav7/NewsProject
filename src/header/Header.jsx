import '../css/header.css'
function Header(){
    
    let array = ["Sports", "Politics", "Health", "Education", "War"];
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <p className='logo'>News</p>
            </div>
            <div className='links-container'>
                {array.map((e)=> <a href={'#'+e} className='link'>{e}</a>)}
            </div>
            <div className='search-container'>
                <input className="name-field"/>
            </div>
        </div>
    )
}
export default Header;