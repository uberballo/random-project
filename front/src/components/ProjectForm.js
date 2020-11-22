import React from 'react'

const ProjectForm = ({ title, body, description, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          placeholder={'Enter project name here!'}
          value={title.value}
          onChange={title.onChange}
        />
        <label>Description:</label>
        <input
          placeholder={'Enter short project description here'}
          value={description.value}
          onChange={description.onChange}
        />
        <label>Body:</label>
        <input
          placeholder={'Explain the project here: '}
          value={body.value}
          onChange={body.onChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ProjectForm
