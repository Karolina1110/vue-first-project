import axios from 'axios';

const getArticles = async (accountId) => {
    let response_data = []
    const response = await axios.get('http://localhost:4000/articles');
    response_data = await response.data
    if (accountId != "All accounts"){
        response_data = response_data.filter(article =>
            article.indices[accountId]
        )
    }
    response_data = await response_data.sort(function(x, y){
        return y.timestamp - x.timestamp;
    })
    return response_data

}
export default getArticles