package v1

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/pkg/app"
	"github.com/uberballo/random-project/cmd/pkg/e"
	"github.com/uberballo/random-project/cmd/service/project_service"
)

func GetProjects(c *gin.Context) {
	projects := project_service.GetProjects()
	app := app.Gin{C: c}
	data := make(map[string]interface{})
	data["projects"] = projects
	app.Response(
		http.StatusOK,
		1,
		data)
}

type CreateProjectForm struct {
	Title       string `form:"title" valid:"Required;MaxSize(100)"`
	Description string `form:"description" valid:"Required;MaxSize(255)"`
	Body        string `form:"body" valid:"Required;MaxSize(65535)"`
}

func CreateProject(c *gin.Context) {
	var (
		appG = app.Gin{C: c}
		form CreateProjectForm
	)

	httpCode, errCode := app.BindAndValid(c, &form)
	fmt.Println(httpCode, errCode)
	projectService := project_service.Project{
		Title:       form.Title,
		Description: form.Description,
		Body:        form.Body,
	}

	createdProject, err := projectService.Create()
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, nil)
		return
	}
	fmt.Println()
	appG.Response(http.StatusOK, e.SUCCESS, createdProject)

}
