package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/controllers"
)

func Routes(router *gin.Engine) {

	router.GET("/", hello)
	api := router.Group("/api/projects")
	{
		api.GET("/", controllers.GetAllProjects)
		api.GET("/:projectID", controllers.GetProject)
		api.DELETE("/:projectID", controllers.DeleteProject)
		api.POST("/", controllers.CreateProject)
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
