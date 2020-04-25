import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import image from './../assest/rash3.jpg'
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rashmi Tirkey</h2>
                        <img
                            src={image}
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            I am full stack developer, i have worked on plan PHP as well as Phalcon and Laravel Framework, Now i am learning React js.
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" style={{ float: "left", fontSize: '20px', paddingRight:"10px"}} />
                                        <span style={{ float: "right" }}>933XXXXXXX</span>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" style={{ float: "left", fontSize: '20px', paddingRight:"10px"}} />
                                        <span style={{ float: "right",fontSize: '16px'}}>tirkeyrashmi42@gmail.com</span>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" style={{ float: "left", fontSize: '20px',paddingRight:"10px" }} />
                                        <span style={{ float: "right" }}>rashkitu45</span>

                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;