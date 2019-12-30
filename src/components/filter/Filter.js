import React, {Component, createRef} from 'react';
import 'date-fns';
import {
    Typography, 
    Divider,
    createMuiTheme,
    TextField,
    FormControlLabel,
    Checkbox,
    Paper,
    FormControl,
    InputLabel,
    Select,
    withStyles,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const drawerWidth = 250;
const useStyles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        border: "1px solid rgb(212, 212, 212)"
    },
    searchText: {
        width: '90%',
        marginLeft: '10px',
        marginRight: 'auto', 
        padding: '5px',
        marginTop: 0,
    },
    inputInput: {
        height: '45px',
        paddingTop: 0,
        margin: 0,
    },
    label: {
        fontSize: '13px',
    },
    paper: {
        borderBottomWidth: 0,
        boxShadow: "none",
    },
    formControl: {
        width: '90%',
        marginLeft: '10px',
        marginRight: 'auto', 
        padding: '5px',
        marginTop: 0,
    },
    select: {
        height: '45px',
        padding: 0,
        paddingLeft: '15px',
        margin: 0,        
    },
    dateclase: {
        width: '70%',
        margin: 0,
        marginLeft: '10px',
        marginRight: 'auto', 
        padding: '5px',
    },
    dateinput: {
        height: '35px',
        margin: 0, 
        padding: 0,
        paddingLeft: '15px',       
    }
});
const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedA: true,
            checkedB: false,
            checkedC: false,
            checkedD: true,
            age:'',
            startDate: new Date('2000-01-01'),
            endDate: new Date(),
            inputLabel: createRef(null),
            labelWidth: 0,
        };
    }

    componentDidMount() {
        this.setState({labelWidth: this.state.inputLabel.current.parentElement.clientWidth})
    }

    handleChangeSubjec = (event) => {
        const {value, checked} = event.target        
        this.setState({[value]: checked })
    }
    handleChangeSurvey = (event) => {
        const {name, value} = event.target        
        this.setState({[name]: value })
        this.setState({labelWidth: this.state.inputLabel.current.parentElement.clientWidth})
        
    }
    handleDateChangeStart = (date) =>{              
        this.setState({startDate: date })
    }
    handleDateChangeEnd = (date) =>{        
        this.setState({endDate: date })
    }
    
    render() {
        
        const { classes } = this.props;
        return (            
            <nav
                className={classes.drawer}
            >
                <Typography variant="h5" style={{padding: '10px', margin: 0}} gutterBottom>Filters:</Typography>
                <Divider style={{marginLeft: '15px', marginRight: '15px'}} />
                <Typography variant="subtitle1" style={{padding: '10px', marginTop: '25px', margin: 0}} gutterBottom>Subjects:</Typography>
                <ThemeProvider theme={theme}>
                    <TextField
                        className={classes.searchText}
                        label="Search.."
                        variant="outlined"
                        id="mui-input"
                        InputProps={{
                            className: classes.inputInput,
                        }}
                    />
                </ThemeProvider>
                <Paper style={{paddingLeft:'20px', maxHeight: 250, overflow: 'auto'}} 
                    classes = {{
                        rounded: classes.paper,
                    }}
                >
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedA}
                            value="checkedA"
                            onChange={this.handleChangeSubjec}
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedB}
                            value="checkedB"
                            onChange={this.handleChangeSubjec}
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedC}
                            onChange={this.handleChangeSubjec}
                            value="checkedC"
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedD}
                            onChange={this.handleChangeSubjec}
                            value="checkedD"
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedA}
                            onChange={this.handleChangeSubjec}
                            value="checkedA"
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedB}
                            onChange={this.handleChangeSubjec}
                            value="checkedB"
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedC}
                            onChange={this.handleChangeSubjec}
                            value="checkedC"
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            checked={this.state.checkedD}
                            onChange={this.handleChangeSubjec}
                            value="checkedD"
                        />
                        }
                        classes={{
                            label: classes.label,
                        }}
                        label="Aboriginal people color(1)"
                    />
                </Paper>
    
                <Divider style={{marginLeft: '15px', marginRight: '15px', marginTop: '10px'}} />
                <Typography variant="subtitle1" style={{padding: '10px', marginTop: '25px', margin: 0}} gutterBottom>Survey:</Typography>
    
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={this.state.inputLabel} htmlFor="outlined-age-native-simple">
                        Filter by Survey
                    </InputLabel>
                    <Select
                        native
                        value={this.state.age}
                        onChange={this.handleChangeSurvey}
                        labelWidth={this.state.labelWidth}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                            className: classes.select,
                        }}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
    
                <Divider style={{marginLeft: '15px', marginRight: '15px', marginTop: '10px'}} />
                <Typography variant="subtitle1" style={{padding: '10px', marginTop: '25px', margin: 0}} gutterBottom>Date:</Typography>
    
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Start"
                        value={this.state.startDate}
                        onChange={this.handleDateChangeStart}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        className={classes.dateclase}
                        inputProps={{
                            className: classes.dateinput,
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="End"
                        value={this.state.endDate}
                        onChange={this.handleDateChangeEnd}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        className={classes.dateclase}
                        inputProps={{
                            className: classes.dateinput,
                        }}
                    />
                </MuiPickersUtilsProvider> 
            </nav>   
        );
    }
}

export default withStyles(useStyles)(Filter);