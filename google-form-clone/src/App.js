// eslint-disable-next-line
import React, {useState} from 'react';
import './App.css';
import Header from './Header.js';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from './Question.js';
import { 
  Container, 
  GridList, 
  Grid,
} from '@material-ui/core';
import {
  Delete, 
  AddCircle, 
  Add, 
  HighlightOff,
  ArrowUpward,
  ArrowDownward,
} from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    padding: 50,
  },
});

function App() {
  const classes = useStyles();

  const [questions, setQuestions] = useState()

  const handleDelete = () => {

  };

  const handleAdd = () => {

  };

  const handleUp = () => {

  };

  const handleDown = () => {

  }

  return (
    <Container maxWidth='lg' className={classes.container}>
        <Header />
        <QuestionCard />
    </Container>
  );
}

export default App;
