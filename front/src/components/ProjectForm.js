import React from 'react'
import { Input, Form, TextArea, Button } from 'semantic-ui-react'

const ProjectForm = ({ title, description, body, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Field
          control={Input}
          label="title"
          value={title.value}
          onChange={title.onChange}
        />
        <Form.Field
          control={Input}
          label="description"
          value={description.value}
          onChange={description.onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Field
          control={TextArea}
          label="Body"
          placeholder="Tell us more about the project"
          value={body.value}
          onChange={body.onChange}
        />
      </Form.Group>
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
}

export default ProjectForm
