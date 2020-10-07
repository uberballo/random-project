package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/controllers"
)

func Routes(router *gin.Engine) {
	router.GET("/", hello)
	router.GET("/asd", hello)
	router.GET("/projects", controllers.GetAllProjects)
	router.GET("/projects/:projectID", controllers.GetProject)
	router.DELETE("/projects/:projectID", controllers.DeleteProject)
	router.POST("/projects", controllers.CreateProject)
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
