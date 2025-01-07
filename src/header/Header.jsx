import '../css/header.css'
function Header(){
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <p className='logo'>News</p>
            </div>
            <div className='links-container'>
                <p className='link'>Sports</p>
                <p className='link'>Sports</p>
                <p className='link'>Sports</p>
                <p className='link'>Sports</p>
                <p className='link'>Sports</p>
            </div>

            <div className='search-container'>
                <input className="name-field"/>
            </div>
        </div>
    )
}
export default Header;