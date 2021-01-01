package project_service

import (
	"github.com/uberballo/random-project/cmd/models"
)

type Project struct {
	Title       string
	Description string
	Body        string
}

func GetProjects() []models.Project {
	var projects []models.Project

	res, _ := models.GetAllProjects()
	projects = res
	return projects
}

func (p *Project) Create() (*models.Project, error) {
	project := map[string]interface{}{
		"title":       p.Title,
		"description": p.Description,
		"body":        p.Body,
	}

	createdProject, err := models.CreateProject(project)
	return createdProject, err
}

func Delete(id string) error {
	models.DeleteProject(id)
	return nil
}
