import React from 'react'

const ProjectForm= ({title, body, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input placeholder={'Enter project name here!'} {...title} />
        <label>Body:</label>
        <input placeholder={'Enter project description here'} {...body} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ProjectForm 
