import '../css/Category.css'
import CategorySmallNews from './CategorySmallNews';
function Category(props){

    return (
        <div className='category-container' id={props.title}>
            <div className='category-title-container'>
                <p className='category-title'>{props.title}</p>
                <button className='button-plus' onClick={()=>props.show1(true)}>+</button>
            </div>
            <div className='category'>
                <div className='container-left'>
                    <div className='news-picture-container'>
                        <img className='news-picture' src={props.data[0]['picture']}></img>
                    </div>
                    <div className='news-title-container'>
                        <p className='news-title'>{props.data[0]['title']}</p>
                    </div>
                    <div className='news-subtitle-container'>
                        <p className='news-subtitle'>{props.data[0]['subtitle']}</p>
                    </div>
                </div>
                <div className='container-right'>
                    <CategorySmallNews data={props.data[1]}/>
                    <CategorySmallNews data={props.data[2]}/>
                    <CategorySmallNews data={props.data[3]}/>
                    <CategorySmallNews data={props.data[4]}/>
                </div>
            </div>
        </div>
    )
}
export default Category;