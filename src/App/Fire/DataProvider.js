import React, { Component } from "react"
import PropTypes from "prop-types"
import firebase from "firebase"

export class DataProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: { greeting: "local content" },
    }
  }

  firebaseSetup() {
    const dataRef = firebase.database().ref()

    dataRef.on("value", snap => {
      this.setState(s => ({ data: snap.val() }))
    })
  }

  componentDidMount() {
    this.firebaseSetup()
  }

  render() {
    const { render } = this.props
    const { data } = this.state

    return render({ data })
  }
}

DataProvider.propTypes = {
  render: PropTypes.func,
}
