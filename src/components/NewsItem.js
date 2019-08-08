import React from 'react';
import axios from 'axios'

class NewsItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: []
      }
    }
    componentDidMount() {
        axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=aefc99666b8b4af1bef5a5fcb00b2328`
        )
        .then(response => {
          console.log(response.data)
          this.setState({
            articles: response.data.articles
          })
        })
        .catch(error => {
          console.log(error);
        });
        console.log(process.env.MY_API_KEY)
    }
    render() {
        return(
            this.state.articles.map((article,index) => {
              return(
                <div className='article-item' key={index}>
                  <a className='article-link' href={article.url} target="_blank" rel="noopener noreferrer">
                    <img className='article-photo' src={article.urlToImage} onError={(e)=>{e.target.onerror = null; e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1F9Ao-80ByzhpXJrMGP04WNIe7D3eme6y-Dn9ajU0I4X_BL0"}} alt="article" />
                    <p className="article-title">{article.title.substring(0,50)}</p>
                  </a>
                </div>
              )
            })
        )
    }
}

export default NewsItem;