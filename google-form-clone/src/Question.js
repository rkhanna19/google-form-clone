import React, {useState} from "react";
import {
    Container,
    Card, 
    CardHeader, 
    CardContent, 
    Input, 
    GridList,
    GridListTile,
    CardActions,
    IconButton,
    InputAdornment,
    Typography,
} from '@material-ui/core';
import Dropdown from './Dropdown.js';
import { makeStyles } from '@material-ui/core/styles';
import {
    Delete, 
    AddCircle, 
    Add, 
    HighlightOff,
    ArrowUpward,
    ArrowDownward,
} from '@material-ui/icons';

// class Question {

//     constructor() {
//         this.name = 'Question';
//         this.type = 'Multiple choice';
//         this.options = ['Option 1'];
//     }
// }

const useStyles = makeStyles({
    container: {
      padding: 5,
    },
    question: {
        marginLeft: 20,
        padding: 10,
        marginTop: 20,
    },
    gridList: {
        padding: 5,
        // width: 500,
        // height: 450,
    },
    option: {
        padding: 5,
        marginLeft: 10,
    },
    delete: {
        padding: 10,
    },
    longForm: {
        padding: 10,
        margin: 10,
    },
  });

function QuestionCard({id, handleAdd, handleDelete}) {
    const classes = useStyles();

    const [type, setType] = useState('Multiple choice');
    const [options, setOptions] = useState(['Option 1']);

    const handleChange = (event) => {
        setType(event.target.value);
        if (event.target.value === 'Paragraph') {
            setOptions('Long answer text');
        } else if (event.target.value === 'Short answer') {
            setOptions('Short answer text');
        } else if (event.target.value === 'Linear scale') {
            setOptions(['Lowest value (label)', 'Highest value (label)']);
        } else {
            setOptions(['Option 1']);
        } 
    }

    function addOption() {
        if (Array.isArray(options)) {
            let newOptions = options.concat('Option ' + (options.length + 1));
            setOptions(newOptions);
        }
    }

    return (
            <Card variant='outlined'>
                <CardHeader 
                    title={
                        <Input id='question' placeholder='Question' color='primary' className={classes.question} inputProps={{style: {fontSize: 36}}} />
                    }
                    action={<Dropdown type={type} handleChange={handleChange} />}
                />
                <CardContent>
                <GridList cellHeight={50} className={classes.gridList} cols={1}>
                    {!Array.isArray(options) ? 
                    <GridListTile key={options} cols={1}>
                        <Typography variant="overline" display="block" gutterBottom className={classes.longForm} size='Large'>
                            {options}
                        </Typography>
                        {/* <Input id={options} placeholder={options} color='primary' fullWidth={true} className={classes.option} inputProps={{style: {fontSize: 18}}} /> */}
                    </GridListTile>
                    :
                    (options.map((option, index) => (
                    <GridListTile key={option} cols={1}>
                        <Input 
                        id={`${index}`}
                        placeholder={option} 
                        color='primary' 
                        fullWidth={true} 
                        className={classes.option} 
                        inputProps={{style: {fontSize: 18}}} 
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton>
                                    {((options.length > 1) && (type !== 'Linear scale')) && <HighlightOff onClick={() => setOptions(options.filter((word, i) => word !== option))} />}
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                    </GridListTile>
                    )))}
                    <GridListTile key='<OVO>'>
                        {(Array.isArray(options) && (type !== 'Linear scale'))  && <IconButton aria-label='add'><AddCircle onClick={()=> addOption()} /></IconButton>}
                    </GridListTile>
                </GridList>
                </CardContent>
                <CardActions disableSpacing>
                        <IconButton aria-label='delete'>
                            <Delete size='Large' className={classes.delete} onClick={handleDelete}/>
                        </IconButton>
                        <IconButton aria-label='add'>
                            <Add size='Large' className={classes.delete} onClick={handleAdd}/>
                        </IconButton>
                        <IconButton aria-label='up'>
                            <ArrowUpward size='Large' className={classes.delete} />
                        </IconButton>
                        <IconButton aria-label='down'>
                            <ArrowDownward size='Large' className={classes.delete} />
                        </IconButton>
                </CardActions>
            </Card>
    );
}

export default QuestionCard;