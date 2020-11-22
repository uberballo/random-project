import React from 'react'

const ProjectForm = ({ title, body, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input placeholder={'Enter project name here!'} value={title.value} onChange={title.onChange} />
        <label>Body:</label>
        <input placeholder={'Enter project description here'} value={body.value} onChange={body.onChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ProjectForm 
