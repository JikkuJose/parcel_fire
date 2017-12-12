import React from "react"
import PropTypes from "prop-types"

import { DataProvider } from "./DataProvider"

export function Fire() {
  return (
    <DataProvider
      render={data => (
        <div>
          <div className="pa3 sans-serif">{data.greeting}</div>
        </div>
      )}
    />
  )
}
