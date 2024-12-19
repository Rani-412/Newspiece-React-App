import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
  static defaultProps={
    name:'in',
    pageSize:5,
    category:'general'
  }

  static propTypes={
    country:propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string
  }
  
    capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    };


    articles = [
        
            {
              "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
              "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
              "publishedAt": "2020-04-27T11:41:47Z",
              "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
            },
            {
              "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
              },
              "author": null,
              "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
              "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
              "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
              "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
              "publishedAt": "2020-03-30T15:26:05Z",
              "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            },
            {
      
              "source": {
                "id": null,
                "name": "Financial Times"
              },
              "author": null,
              "title": "Donald Trump accuses UK Labour party of interference in White House race - Financial Times",
              "description": "Republican ex-president files legal complaint with US’s federal election authority",
              "url": "https://www.ft.com/content/f404c6fc-1ba6-4a4a-bf04-5b05658a2530",
              "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F52dff144-9227-417a-8ccb-0f8be2d6feed.jpg?source=next-barrier-page",
              "publishedAt": "2024-10-23T05:03:52Z",
              "content": "FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\r\n\u003Cul\u003E\u003Cli\u003E\u003C/li\u003EWeekday Print Edition\u003Cli\u003E\u003C/li\u003EFT Weekend\u003Cli\u003E\u003C/li\u003EFT Digital Edition\u003Cli\u003EGlobal n… [+105 chars]"
            },
            {
                "source": {
                "id": "espn",
                "name": "ESPN"
              },
              "author": "Dave McMenamin",
              "title": "Rookie hazing, cupcakes and extra shots: LeBron and Bronny's path to NBA history - ESPN",
              "description": "From spot-shooting routines to light family hazing to an early mentor, here are the key moments from inside the Lakers that led to LeBron and Bronny James sharing an NBA court for the first time.",
              "url": "https://www.espn.com/nba/story/_/id/41948228/seven-lebron-bronny-moments-lakers-preseason-led-nba-history",
              "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1023%2Fr1404463_1296x729_16%2D9.jpg",
              "publishedAt": "2024-10-23T04:20:00Z",
              "content": "One hour and 55 minutes before tipoff Tuesday, Los Angeles Lakers coach JJ Redick made no promises that LeBron James and Bronny James would make history during the regular-season opener soon to begin… [+19545 chars]"
            }
          ]
        
    
    constructor(props){
        super(props);
        console.log("Hello i am a constructor from news component");
        this.state={
            articles:this.articles,
            loading:true,
            page:1, //initialize page state
            totalResults:0


        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsPiece`;
    }

    async updateNews(pageNo){
      window.scrollTo(0, 0);  // Scroll to the top of the page
      this.props.setProgress(10)
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60d28462b7ad48fd8303f6c8394c857b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      this.props.setProgress(30)
      let parsedData=await data.json()
      console.log(parsedData);
      this.props.setProgress(70)
      this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false,
        
      })
      this.props.setProgress(100);

    }



async componentDidMount(){
  //console.log("cdm");
  //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60d28462b7ad48fd8303f6c8394c857b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //this.setState({loading:true});
  //let data=await fetch(url);
  //let parsedData=await data.json()
  //console.log(parsedData);
  //this.setState({articles:parsedData.articles,
    //totalResults:parsedData.totalResults,
   // loading:false})
   this.updateNews();
}

 handlePrevClick = async() => {
  //console.log("Previous");

  //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=60d28462b7ad48fd8303f6c8394c857b&page=${this.state.page - 1 } &pageSize=${this.props.pageSize}`;
  //this.setState({loading:true});
  //let data=await fetch(url);
  //let parsedData=await data.json()
  //console.log(parsedData);
 //
  //this.setState({ 
  //  page: this.state.page - 1 ,
  //  articles:parsedData.articles,
  //loading:false
  //});  
  


this.setState({page:this.state.page -1});
this.updateNews();
};

handleNextClick = async() => {
  //console.log("Next");
  //if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

  //
  //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60d28462b7ad48fd8303f6c8394c857b&page=${this.state.page + 1 } &pageSize=${this.props.pageSize}`;
  //this.setState({loading:true});
  //let data=await fetch(url);
  //let parsedData=await data.json()
  
  //this.setState({ 
  //  page: this.state.page + 1 ,
  //  articles:parsedData.articles,
  //  loading : false
  //}); 
this.setState({page:this.state.page +1})
this.updateNews();
};

fetchMoreData = async() => {
  
    this.setState({
     page:this.state.page+1
    });
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60d28462b7ad48fd8303f6c8394c857b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        loading:false
        
      });
  
};

     


  render() {
    console.log("render");
    return (
      <>
     <div style={{ marginTop: '56px' }}>
        <h2 className="text-center style={{margin:'35px 0px',marginTop:'90px'}}"><strong>NewsPiece</strong> - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        </div>
        {this.state.loading && <Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults} // Adjusted hasMore logic
          loader={<Spinner/>}
        >
          
        <div className="container">

        
        <div className="row">
           {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,74):""} imgurl={element.urlToImage} url={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>  
            </div>
           
          })}
        </div>
        </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">*/}
            {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>*/}
            {/* <button disabled= {this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>*/}
           {/*</div> */}
        
        </>
        
      
    );
  }
}


News.defaultProps={
  name:'in',
  pageSize:5,
  category:'general'
}

News.propTypes={
  country:propTypes.string,
  pageSize:propTypes.number,
  category:propTypes.string
}

export default News
