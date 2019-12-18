import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filter Size
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">ALL</option>
                            <option value="a">RM10-20</option>
                            <option value="b">RM20-30</option>
                            <option value="c">RM30-40</option>
                            <option value="d">RM50-60</option>
                            <option value="d">RM60-70</option>
                            <option value="d">RM70-80</option>
                            <option value="d">RM80-90</option>
                            <option value="d">RM90-100</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}