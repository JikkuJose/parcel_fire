import React from "react"
import PropTypes from "prop-types"

import { DataProvider } from "./DataProvider"

export function Fire() {
  return (
    <DataProvider
      render={({ data }) => (
        <div>
          <div className="pa3 h3 bg-red sans-serif">{data.greeting}</div>
        </div>
      )}
    />
  )
}
