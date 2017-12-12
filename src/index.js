import React from "react"
import ReactDOM from "react-dom"
import * as firebase from "firebase"
import "tachyons"

const config = {
  apiKey: "AIzaSyA5s6DZ2Sluwt1VBsUOIZXKd_nngf26LUY",
  authDomain: "pid-standard-template.firebaseapp.com",
  databaseURL: "https://pid-standard-template.firebaseio.com",
  projectId: "pid-standard-template",
  storageBucket: "pid-standard-template.appspot.com",
  messagingSenderId: "16720623510",
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

import { App } from "./App"

const mountNode = document.getElementById("root")
ReactDOM.render(<App />, mountNode)
