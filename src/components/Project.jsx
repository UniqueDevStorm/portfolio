import React from 'react';
import { Grid, Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';

export default class Project extends React.Component {
    render() {
        return (
            <Grid item xs={12} md={6} lg={4} id={this.props.id}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardHeader title={this.props.title} />
                    <CardContent style={{ flexGrow: 1, fontSize: '20px' }}>
                        {this.props.desc}
                    </CardContent>
                    <CardActions>
                        <Button href={this.props.url} target='_blank' >바로가기</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}