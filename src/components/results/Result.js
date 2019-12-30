import React, {Component} from 'react';

import {
    Typography, 
    withStyles,
    Card,
    CardContent,
    //CardMedia,
    IconButton,
} from '@material-ui/core';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

//import searchResultImgae from '../../assets/images/searchResult.png'

const useStyles = theme => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    cover: {
        width: 151,
    },

});

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNum: 0,
            dataNum: this.props.dataNum,
        };
    }

    componentDidMount() {

    }

    pageRight = () => {
        var showNum = this.state.showNum;
        var dataNum = this.state.dataNum;
        if ((showNum + 1) * 4 < dataNum)
            showNum ++; 
        this.setState({showNum: showNum})
    }

    pageLeft = () => {
        let showNum = this.state.showNum;        
        this.setState({showNum: --showNum < 0 ? 0 : showNum})
    }

    render() {
        const { classes, data } = this.props;
        return (        
            <main className={classes.content}>
                <div >
                    {data.map((item, i) => (
                        <Card key={i} className={ this.state.showNum <= (i / 4) && (this.state.showNum + 1) > (i / 4) ? 'card' : 'cardHi'}>
                            <div >
                                <CardContent>
                                    <Typography component="h5" variant="h5">                                        
                                        <span className="authors-list">
                                            {item._source.title.en}
                                        </span>
                                    </Typography>
                                    <Typography component="h5" variant="h5">                                        
                                        <span className="authors-list">
                                            {item._source.dateDocProd.en}
                                        </span>
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        <span className="authors-list">
                                            {item._source.weight.en}
                                        </span>
                                    </Typography>
                                </CardContent>                                
                            </div>
                            {/* <CardMedia
                                className={classes.cover}
                                image={searchResultImgae}
                                title="Live from space album cover"
                            /> */}
                        </Card>                        
                    ))}
                    <div style={{display: 'flex', margin: 'auto', marginBottom: '10px'}}>
                        <IconButton aria-label="show 17 new notifications" color="inherit" 
                            onClick={this.pageLeft}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <p style={{paddingLeft: '10px', paddingRight: '10px'}}>{this.state.showNum * 4 + 1} - {(this.state.showNum + 1) * 4} of {data.length}</p>
                        <IconButton aria-label="show 17 new notifications" color="inherit" 
                            onClick={this.pageRight}
                        >
                            <ChevronRight />
                        </IconButton>
                    </div>
                </div>                
            </main>
        );
    }
}

export default withStyles(useStyles)(Result);
