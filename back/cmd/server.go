package cmd

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/uberballo/random-project/cmd/database"
	"github.com/uberballo/random-project/cmd/models"
	"github.com/uberballo/random-project/cmd/pkg/util"
	"github.com/uberballo/random-project/cmd/routes"
)

func init() {
	database.Setup()
	database.CreateDB()
	models.Setup()
	util.Setup()
}

func SetupRouter() *gin.Engine {
	router := gin.Default()
	routes.Routes(router)
	return router
}

func Run() {
	router := SetupRouter()
	log.Fatal(router.Run(":3001"))
}
