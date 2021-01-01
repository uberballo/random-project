package models

import (
	"time"

	"github.com/uberballo/random-project/cmd/database"
	"gorm.io/gorm"
)

var db *gorm.DB

type Model struct {
	ID         int `gorm:"primary_key"`
	CreatedOn  time.Time
	ModifiedOn time.Time
	DeletedOn  gorm.DeletedAt `gorm:"index"`
}

func Setup() {
	db = database.GetDB()

	db.AutoMigrate(&Project{})
	db.AutoMigrate(&User{})

}
