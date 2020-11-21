import React, { useState, useEffect } from 'react'
import Project from './Project'
import { useSelector } from 'react-redux'
import { GET_RANDOM_PROJECT } from '../constants/ActionTypes'
import { createSelector } from 'reselect'

const SingleProject = ({ project }) => {
    return (

        <div className="singleProject">
            <p className="projectTitle">{project.title}</p>
            <p className="projectBody">{project.body}</p>
        </div>
    )
}

export default SingleProject