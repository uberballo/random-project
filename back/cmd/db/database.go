package db

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/uberballo/stockservice/cmd/controllers"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var colelction *mongo.Collection
var ctx = context.TODO()

func Connect() {
	fmt.Println("init")
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
	client, err := mongo.NewClient(clientOptions)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	err = client.Connect(ctx)
	defer cancel()

	err = client.Ping(context.Background(), readpref.Primary())
	if err != nil {
		log.Fatal("Couldn't connect to the database", err)
	} else {
		log.Println("Connected!")
	}
	db := client.Database("go_mongo")
	controllers.ProjectCollection(db)
	return
}
