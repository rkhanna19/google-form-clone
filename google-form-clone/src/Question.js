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
} from '@material-ui/core';
import Dropdown from './Dropdown.js';
import { makeStyles } from '@material-ui/core/styles';
import {Delete, AddCircle, Icon} from '@material-ui/icons';

// class Question {

//     constructor() {
//         this.name = 'Question';
//         this.type = 'Multiple choice';
//         this.options = ['Option 1'];
//     }
// }

const useStyles = makeStyles({
    container: {
      padding: 50,
    },
    question: {
        marginLeft: 20,
        padding: 10,
        marginTop: 20,
    },
    gridList: {
        padding: 20,
        // width: 500,
        // height: 450,
    },
    option: {
        padding: 5,
    },
    delete: {
        padding: 10,
    },
  });

function QuestionCard() {
    const classes = useStyles();

    const [name, setName] = useState('Question');
    const [type, setType] = useState('Multiple choice');
    const [options, setOptions] = useState(['Option 1']);

    const handleChange = (event) => {
        setType(event.target.value);
        if (event.target.value === 'Paragraph') {
            setOptions('Long answer text');
        } else if (event.target.value === 'Short answer') {
            setOptions('Short answer text');
        } else if (!Array.isArray(options)) {
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
        <Container maxWidth='lg' className={classes.container}>
            <Card variant='outlined'>
                <CardHeader 
                    title={
                        <Input id='question' placeholder='Question' color='primary' className={classes.question} onChange={text => setName(text)} inputProps={{style: {fontSize: 36}}} />
                    }
                    action={<Dropdown type={type} handleChange={handleChange} />}
                />
                <CardContent>
                <GridList cellHeight={50} className={classes.gridList} cols={1}>
                    {!Array.isArray(options) ? 
                    <GridListTile key={options} cols={1}>
                        <Input id={options} placeholder={options} color='primary' fullWidth={true} className={classes.option} inputProps={{style: {fontSize: 18}}} />
                    </GridListTile> 
                    :
                    (options.map((option) => (
                    <GridListTile key={option} cols={1}>
                        <Input id={option} placeholder={option} color='primary' fullWidth={true} className={classes.option} inputProps={{style: {fontSize: 18}}} />
                    </GridListTile>
                    )))}
                    <GridListTile key='<OVO>'>
                        {Array.isArray(options) && <AddCircle onClick={()=> addOption()} />}
                    </GridListTile>
                </GridList>
                </CardContent>
                <CardActions>
                        <IconButton aria-label='delete'>
                            <Delete size='Large' className={classes.delete}/>
                        </IconButton>
                </CardActions>
            </Card>
        </Container>
    );
}

export default QuestionCard;