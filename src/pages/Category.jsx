import '../css/Category.css'
import CategorySmallNews from './CategorySmallNews';
function Category(){

    return (
        <div className='category-container'>
            <div className='category-title-container'>
                <p>Sport</p>
            </div>
            <div className='category'>
                <div className='container-left'>
                    <div className='news-picture-container'>
                        
                    </div>
                    <div className='news-title-container'>
                        <p className='news-title'>Title</p>
                    </div>
                    <div className='news-subtitle-container'>
                        <p className='news-subtitle'>Subtitle</p>
                    </div>
                </div>
                <div className='container-right'>
                    <CategorySmallNews />
                    <CategorySmallNews />
                    <CategorySmallNews />
                    <CategorySmallNews />

                </div>
            </div>
        </div>
    )
}
export default Category;