
import React, {Component} from 'react';

import {AppBar, Container, Toolbar, IconButton, Typography, InputBase, Button} from '@material-ui/core';

import { fade, withStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.85),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.85),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#555',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 350,
        },
    },
    button: {
        height: '40px',
        borderRadius: theme.shape.borderRadius - 1,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    }
});

class SearchBar extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {         
            searchValue: "",
        };
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: '#2b3d69'}}>            
                    <Container >
                        <Toolbar style={{padding: 0}}>
                            <Typography className={classes.title} variant="h4" noWrap>
                                DAaaS
                            </Typography>
                            <div className={classes.grow} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon color="primary"/>
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={(event) => {
                                        this.setState({searchValue: event.target.value})
                                        this.props.setSearchValue(event.target.value)
                                    }}
                                    onKeyDown={(event)=>{
                                        if(event.keyCode === 13){
                                            //console.log("13")
                                            this.props.searchStart()
                                            //this.setState({searchValue: ""})
                                        }
                                    }}
                                    value={this.state.searchValue}
                                />
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    Search
                                </Button>
                            </div>
                            <IconButton color="inherit">
                                <HelpOutlineIcon />
                            </IconButton>
                            <div className={classes.grow}/>
                            <div>
                                <div>
                                    <IconButton
                                    aria-label="account of current user"
                                    aria-controls={'primary-search-account-menu'}
                                    aria-haspopup="true"
                                    color="inherit"
                                    >
                                        <p style={{fontSize: '18px', margin: 0}}>First Name</p>
                                        <AccountCircle />
                                    </IconButton>
                                    <IconButton aria-label="show 17 new notifications" color="inherit">
                                            <NotificationsNoneIcon />
                                    </IconButton>
                                    <IconButton aria-label="show 4 new mails" color="inherit" edge="end">
                                            <SettingsIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}
export default withStyles(useStyles)(SearchBar);