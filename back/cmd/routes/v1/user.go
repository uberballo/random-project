package v1

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/pkg/app"
	"github.com/uberballo/random-project/cmd/pkg/e"
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
	fmt.Println("Hello route, ", userService)
	createdUser, err := userService.Create()
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, nil)
		return
	}
	fmt.Println()
	appG.Response(http.StatusOK, e.SUCCESS, createdUser)
}
