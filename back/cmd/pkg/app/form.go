package app

import (
	"net/http"

	"github.com/uberballo/random-project/cmd/pkg/e"

	"github.com/astaxie/beego/validation"
	"github.com/gin-gonic/gin"
)

func BindAndValid(c *gin.Context, form interface{}) (int, int) {
	err := c.Bind(form)

	if err != nil {
		return http.StatusBadRequest, e.ERROR
	}

	valid := validation.Validation{}
	check, err := valid.Valid(form)

	if err != nil {
		return http.StatusInternalServerError, e.ERROR
	}
	if !check {
		return http.StatusBadRequest, e.ERROR
	}

	return http.StatusOK, e.SUCCESS
}
