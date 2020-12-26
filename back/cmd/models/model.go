package models

import (
	"fmt"
	"log"
	"time"

	"github.com/uberballo/random-project/cmd/database"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

type Model struct {
	ID         int `gorm:"primary_key"`
	CreatedOn  time.Time
	ModifiedOn time.Time
	DeletedOn  gorm.DeletedAt `gorm:"index"`
}

// Setup initializes the database instance
func Setup() {
	var err error
	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		database.DatabaseSetting.Host,
		5432,
		database.DatabaseSetting.User,
		database.DatabaseSetting.Password,
		database.DatabaseSetting.Name)

	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalf("models.Setup  errr: %v", err)
	}

	db.AutoMigrate(&Project{})
	db.AutoMigrate(&User{})

}
