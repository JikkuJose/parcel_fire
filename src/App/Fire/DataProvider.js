import React, { Component } from "react"
import PropTypes from "prop-types"
import firebase from "firebase"

export class DataProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  firebaseSetup() {
    const dataRef = firebase
      .database()
      .ref()
      .child("parcelApp")

    dataRef.on("value", snap => {
      this.setState(s => snap.val())
    })
  }

  componentDidMount() {
    this.firebaseSetup()
  }

  render() {
    const { render } = this.props

    return render({ data })
  }
}

DataProvider.propTypes = {
  render: PropTypes.func,
}
