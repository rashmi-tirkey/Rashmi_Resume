import React, { Component } from 'react'
import './Home.scss';
export default class Home extends Component {
    render() {
        return (
            <div className="parent-wrapper">
               <div className="heading-wrapper">
                   <div className="heading-row">
                   <spam><h2>Flipkart Explore Plus</h2></spam>
                    </div>
                    <div className="heading-row">
                     <spam><input type="text" placeholder="Search for products brands and more "/><i class="fa fa-search"></i></spam>
                    </div>
                    <div className="heading-row">
                     <spam><input type="text" placeholder="LOGIN"/></spam>
                    </div>
                    <div className="heading-row">
                     <spam>More</spam>
                    </div>
                    <div className="heading-row">
                     <spam>Cart</spam>
                    </div>

                  
                 </div>
            </div>
        )
    }
}
