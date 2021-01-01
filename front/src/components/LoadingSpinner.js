import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoadingSpinner = ({ label }) => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading {label}</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default LoadingSpinner
