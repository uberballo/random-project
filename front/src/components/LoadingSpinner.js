import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoadingSpinner = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader>Loading project</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default LoadingSpinner
