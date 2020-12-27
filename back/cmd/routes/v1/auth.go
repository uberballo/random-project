package v1

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/pkg/app"
	"github.com/uberballo/random-project/cmd/pkg/e"
	"github.com/uberballo/random-project/cmd/service/user_service"
)

type LoginUserForm struct {
	Username string `form:"username" valid:"Required;MaxSize(100)"`
	Password string `form:"password" valid:"Required;MaxSize(255)"`
}

func Login(c *gin.Context) {
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
	fmt.Println("Käyttäjä: ", exists)
	if exists == nil {
		appG.Response(http.StatusOK, e.ERROR_USER_DOESNT_EXIST, nil)
		return
	}
	fmt.Println("1")
	token, err := userService.Login()
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, nil)
		return
	}
	if token == nil {
		appG.Response(http.StatusInternalServerError, e.ERROR_INVALID_PASSWORD, nil)
		return

	}
	appG.Response(http.StatusCreated, e.SUCCESS, token)
}
