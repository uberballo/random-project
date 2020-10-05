package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/uberballo/stockservice/cmd/db"
	"github.com/uberballo/stockservice/cmd/routes"
)

func init() {
	if err := godotenv.Load(".env"); err != nil {
		log.Print("No .env file found")
	}
}
func main() {
	db.Connect()
	router := gin.Default()
	routes.Routes(router)
	log.Fatal(router.Run(":3001"))
}
