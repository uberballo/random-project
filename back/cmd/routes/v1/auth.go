package v1

import (
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
	if errCode != e.SUCCESS {
		appG.Response(httpCode, errCode, nil)
		return
	}

	userService := user_service.User{
		Username: form.Username,
		Password: form.Password,
	}
	exists := userService.CheckIfUserExists()

	if exists == nil {
		appG.Response(http.StatusOK, e.ERROR_USER_DOESNT_EXIST, nil)
		return
	}

	token, err := userService.Login()
	if err != nil {
		appG.Response(http.StatusInternalServerError, e.ERROR, nil)
		return
	}

	if token == nil {
		appG.Response(http.StatusInternalServerError, e.ERROR_INVALID_PASSWORD, nil)
		return

	}
	appG.Response(http.StatusCreated, e.SUCCESS, map[string]string{
		"token":    *token,
		"username": form.Username,
	})
}
