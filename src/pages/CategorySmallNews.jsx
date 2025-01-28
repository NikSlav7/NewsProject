import '../css/CategorySmallNews.css'
function CategorySmallNews(props){

    return (
        <div className='small-news-container'>
            <div className='small-news-picture-container'>
                <img className='small-news-picture' src={props.data['picture']}></img>
            </div>
            <div>
                <p className='small-news-title'>{props.data['title']}</p>
            </div>
            <div>
                <p className='small-news-subtitle'>{props.data['subtitle']}</p>
            </div>
        </div>
    )
}
export default CategorySmallNews;