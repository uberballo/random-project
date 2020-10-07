package controllers

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	guuid "github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Project struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

var collection *mongo.Collection

func ProjectCollection(c *mongo.Database) {
	collection = c.Collection("projects")
}

func GetAllProjects(c *gin.Context) {
	projects := []Project{}
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	cursor, err := collection.Find(ctx, bson.M{})
	defer cursor.Close(ctx)

	if err != nil {
		log.Printf("Error while getting all projects, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}

	for cursor.Next(ctx) {
		var project Project
		cursor.Decode(&project)
		projects = append(projects, project)
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "All projects",
		"data":    projects,
	})
	return
}

func CreateProject(c *gin.Context) {
	var project Project
	c.BindJSON(&project)
	title := project.Title
	body := project.Body
	id := guuid.New().String()
	newProject := Project{
		ID:        id,
		Title:     title,
		Body:      body,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
	_, err := collection.InsertOne(context.TODO(), newProject)

	if err != nil {
		log.Printf("Error while inserting new project into db, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusCreated,
		"message": "Project created successfully",
	})
	return
}
