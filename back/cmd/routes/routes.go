package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/stockservice/cmd/controllers"
)

func Routes(router *gin.Engine) {
	router.GET("/", hello)
	router.GET("/asd", hello)
	router.GET("/projects", controllers.GetAllProjects)
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
