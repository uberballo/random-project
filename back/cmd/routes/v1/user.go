package v1

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/pkg/app"
	"github.com/uberballo/random-project/cmd/pkg/e"
	"github.com/uberballo/random-project/cmd/pkg/util"
	"github.com/uberballo/random-project/cmd/service/user_service"
)

type CreateUserForm struct {
	Username string `form:"username" valid:"Required;MaxSize(100)"`
	Password string `form:"password" valid:"Required;MaxSize(255)"`
}

func CreateUser(c *gin.Context) {
	var (
		appG = app.Gin{C: c}
		form CreateUserForm
	)

	httpCode, errCode := app.BindAndValid(c, &form)
	fmt.Println(httpCode, errCode)
	userService := user_service.User{
		Username: form.Username,
		Password: form.Password,
	}
	exists := userService.CheckIfUserExists()
	if exists != nil {
		appG.Response(http.StatusOK, e.ERROR_USER_ALREADY_EXISTS, nil)
		return
	}
	createdUser, err := userService.Create()
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, nil)
		return
	}
	appG.Response(http.StatusCreated, e.SUCCESS, createdUser)
}

type AddChosenProjectForm struct {
	ProjectID int `form:"projectID" valid:"Required"`
}

func AddChosenProjectToUser(c *gin.Context) {
	var (
		appG = app.Gin{C: c}
		form AddChosenProjectForm
	)

	httpCode, errCode := app.BindAndValid(c, &form)
	if errCode != e.SUCCESS {
		appG.Response(httpCode, errCode, nil)
		return
	}
	fmt.Println(util.ExtractTokenMetadata(c.Request))
	tokenData, err := util.ExtractTokenMetadata(c.Request)
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, err)
	}
	username := tokenData.Username
	projectID := form.ProjectID

	err = user_service.AddChosenProject(username, projectID)
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, err)
		return
	}
	appG.Response(http.StatusAccepted, e.SUCCESS, nil)

}

func GetUsersChosenProjects(c *gin.Context) {
	appG := app.Gin{C: c}
	tokenData, err := util.ExtractTokenMetadata(c.Request)
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, err)
	}
	username := tokenData.Username
	projects, err := user_service.GetUsersChosenProjects(username)
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, err)
		return
	}
	appG.Response(http.StatusOK, e.SUCCESS, projects)
}
