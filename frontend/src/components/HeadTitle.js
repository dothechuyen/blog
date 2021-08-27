import React, { Component } from 'react'

export default class HeadTitle extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Danh sach san pham</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                </div>
            </div>
        )
    }
}
