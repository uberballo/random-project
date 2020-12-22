package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/uberballo/random-project/cmd/database"
	"github.com/uberballo/random-project/cmd/models"
	"github.com/uberballo/random-project/cmd/routes"
)

func init() {
	if err := godotenv.Load(".env"); err != nil {
		log.Print("No .env file found")
	}
	database.Setup()
	models.Setup()
}
func main() {
	router := gin.Default()
	routes.Routes(router)
	log.Fatal(router.Run(":3001"))
}
