import React from "react";
import { Input, Container, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        padding: 5,
    },
    description: {
        padding: 5,
        marginTop: 10,
    },
});

function Header() {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <Card variant='outlined'>
                <CardContent>
                    <Container maxWidth='lg'>
                        <Input id='title' placeholder='Form Title' fullWidth={true} color='primary' className={classes.title} inputProps={{style: {fontSize: 44}}}/>
                        <Input id='description' placeholder='Form description' fullWidth={true} multiline={true} color='primary' className={classes.description} inputProps={{style: {fontSize: 20}}}/>
                    </Container>
                </CardContent>
            </Card>
        </Container>
  
    )

}

export default Header;