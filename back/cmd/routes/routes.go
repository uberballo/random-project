package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	v1 "github.com/uberballo/random-project/cmd/routes/v1"
)

func Routes(router *gin.Engine) {

	router.GET("/", hello)
	api := router.Group("/api")
	{
		api.GET("/projects", v1.GetProjects)
		api.POST("/projects/", v1.CreateProject)
	}
	router.NoRoute(notFound)
}

func hello(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":  200,
		"message": "Hello world",
	})
	return
}

func notFound(c *gin.Context) {
	c.JSON(http.StatusNotFound, gin.H{
		"status":  404,
		"message": "Route Not Found",
	})
	return
}
