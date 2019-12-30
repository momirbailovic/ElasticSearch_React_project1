import React, {Component} from 'react';
import {
    Container, 
    Typography, 
    Divider,
} from '@material-ui/core';

import SearchBar from './components/search/SearchBar'
import Filter from './components/filter/Filter'
import Results from './components/results/Result'

import './assets/css/components.css';

var client = require('./connection.js');
var indexName = "test";
var docType = "_doc";


//var payload;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {            
			id: "",
            searchValue: "",
			dataList: [],
        };
    }

    componentDidMount() {
		this.getElasticSearchData();
    }
    
    getElasticSearchData = () => {
        var that = this;
        console.log(this.state.searchValue);

        if (this.state.searchValue === ""){
            client.search({
                index: indexName,
                type: docType,
                body: {
                  query: {
                    match_all: {
                    }
                  }
                }                
            }).then(function (resp) {
                console.log(resp.hits.hits);
                that.setState({
                    dataList: resp.hits.hits
                })
            }, function (err) {
                console.log(err.message);
            });
            return;
        }

		client.search({
			index: indexName,
            type: docType,
            body: {
              query: {
                match: {
                    "title.en": this.state.searchValue
                    //"play_name": this.state.searchValue ? this.state.searchValue : "",
                    //text_entry: this.state.searchValue ? this.state.searchValue : null,
                }
              }
              // {
                //     "query": {
                //         "multi_match" : {
                //             "query" : "guide",
                //             "fields" : ["title", "authors", "summary", "publish_date", "num_reviews", "publisher"]
                //         }
                //     }
                // }
            }
            //q: this.state.searchValue ? this.state.searchValue : null,
            
		}).then(function (resp) {
			console.log(resp.hits.hits);
			that.setState({
				dataList: resp.hits.hits
			})
		}, function (err) {
			console.log(err.message);
		});
	}

    setSearchValue = (value) => {
		this.setState({
			searchValue: value
        })
    }

    searchStart = () => {
        this.setState({
            previewValue: this.state.searchValue,
			searchValue: ""
        })
        this.getElasticSearchData();
	}

    render() {
        console.log(this.state.dataList.length)
        return (
            <div>
                <SearchBar setSearchValue={this.setSearchValue} searchStart={this.searchStart} />
                <Container>
                    <Typography style={{paddingTop: '30px'}} variant="h5" component="h5" gutterBottom>You Searched for: Social</Typography>
                    <Divider />
                    <div className="FitAndRes">
                        <Filter />
                        {this.state.dataList.length > 0 && <Results data={this.state.dataList} dataNum={this.state.dataList.length} />}
                          
                    </div>
                    <p>{this.state.searchValue}</p>
                </Container>        
            </div>
        );
    }
    
}

export default App;
