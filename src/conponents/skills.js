import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4} style={{ paddingTop: '0px' }}>
          <div style={{display: 'flex'}}>{this.props.skill}  </div>
        </Cell>
        <Cell col={8} style={{ paddingTop: '0px' }}>
          <ProgressBar  progress={this.props.progress} />
          <p>{this.props.progress}%</p>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;