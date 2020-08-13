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
} from '@material-ui/core';
import Dropdown from './Dropdown.js';
import { makeStyles } from '@material-ui/core/styles';
import {DeleteIcon, AddCircle, Add} from '@material-ui/icons';

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
  });

function QuestionCard() {
    const classes = useStyles();

    const [name, setName] = useState('Question');
    const [type, setType] = useState('Multiple choice');
    const [options, setOptions] = useState(['Option 1']);
    console.log(options);

    const handleChange = (event) => {
        setType(event.target.value);
        if (type === 'Paragraph') {
            setOptions('Long answer text');
        } else if (type === 'Short answer') {
            setOptions('Short answer text');
        } else if (!Array.isArray(options)) {
            setOptions(['Option 1']);
        }
    }

    function addOption() {
        if (Array.isArray(options)) {
            options.push('Option ' + options.length);
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
                    <GridListTile key='<OVO>' cols={1}>
                        {Array.isArray(options) && <AddCircle onClick={()=> addOption()} />}
                    </GridListTile>
                </GridList>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Container>
    );
}

export default QuestionCard;