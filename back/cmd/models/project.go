package models

type Project struct {
	Model
	Title       string `json:"title"`
	Description string `json:"description"`
	Body        string `json:"body"`
}

func GetAllProjects() ([]*Project, error) {
	projects := []*Project{}
	db.Find(&projects)

	return projects, nil
}

func CreateProject(data map[string]interface{}) (*Project, error) {
	project := Project{
		Title:       data["title"].(string),
		Description: data["description"].(string),
		Body:        data["body"].(string),
	}
	if err := db.Create(&project).Error; err != nil {
		return nil, err
	}

	return &project, nil
}

func GetProject(id string) (*Project, error) {
	var project Project
	err := db.Where("id = ?", id).Find(&project).Error
	if err != nil {
		return nil, err
	}
	return &project, nil
}

func DeleteProject(id string) {
	var project Project
	db.Where("id = ?", id).Delete(&project)
}
