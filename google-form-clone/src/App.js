// eslint-disable-next-line
import React from 'react';
import './App.css';
import Header from './Header.js';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from './Question.js';
import { Container, Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles({
  container: {
    padding: 50,
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.container}>
        <Header />
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
        <QuestionCard />
    </Container>
  );
}

export default App;
