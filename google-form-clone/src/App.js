// eslint-disable-next-line
import React, {useState} from 'react';
import './App.css';
import Header from './Header.js';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from './Question.js';
import { 
  Container, 
  GridList,
  GridListTile,
} from '@material-ui/core';
// import {
//   Delete, 
//   AddCircle, 
//   Add, 
//   HighlightOff,
//   ArrowUpward,
//   ArrowDownward,
// } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    padding: 50,
  },
  gridlist: {
    padding: 1,
  },
});

function App() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([0])

  const handleDelete = (id) => {
    setQuestions(questions.filter(question => question !== id));
  };

  const handleAdd = () => {
    setQuestions(questions.concat([questions.length]))
  };

  const handleUp = (id) => {

  };

  const handleDown = (id) => {

  }

  return (
    <Container maxWidth='lg' className={classes.container}>
        <Header />
        <Container maxWidth='lg' className={classes.container}>
          <GridList cellHeight={450} cols={1} className={classes.gridList} spacing={0}>
            {questions.map((question, id) =>
            <GridListTile key={question} cols={1}>
              <QuestionCard id={id} handleAdd={handleAdd} handleDelete={handleDelete}/>
            </GridListTile>)}
          </GridList>
        </Container>
    </Container>
  );
}

export default App;
