import React, { Component } from 'react'
import { connect } from "react-redux"

class BookDetail extends Component {
  render() {
    if (this.props.book) {
      return (
        <div>
          <h3>Details for: </h3>
          <p>Title: {this.props.book.title}</p>
          <p>Pages: {this.props.book.pages}</p>
        </div>
      )
    } else return (<div>Let's select a book </div>)

  }
}

function mapStateToProps ( state ) {
  return {
    book : state.activeBook
  }
}

export default connect (mapStateToProps) (BookDetail);