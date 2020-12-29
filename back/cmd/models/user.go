package models

import (
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Model
	Username       string    `json:"username`
	HashPassword   string    `json:"password`
	ChosenProjects []Project `gorm:"many2many:user_chosenProjects;"`
}

func CheckIfUserExists(username string) bool {
	var count int64
	db.Table("users").Where("username = ?", username).Count(&count)
	exists := (count != 0)
	return exists
}

func CreateUser(data map[string]interface{}) (*User, error) {
	givenPassword := data["password"].(string)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(givenPassword), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}

	user := User{
		Username:     data["username"].(string),
		HashPassword: string(hashedPassword),
	}
	if err := db.Create(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

func AddChosenProjectToUser(username, projectId string) error {
	user, err := GetUserWithUsername(username)
	if err != nil {
		return err
	}
	project, err := GetProject(projectId)
	if err != nil {
		return err
	}
	err = db.Model(&user).Association("ChosenProjects").Append([]Project{*project})
	if err != nil {
		return err
	}
	return nil
}

func AddChosenProjectToUserWithId(userId, projectId string) error {
	user, err := GetUserWithID(userId)
	if err != nil {
		return err
	}
	project, err := GetProject(projectId)
	if err != nil {
		return err
	}
	err = db.Model(&user).Association("ChosenProjects").Append(&project)
	if err != nil {
		return err
	}
	return nil
}

func GetUserWithID(id string) (*User, error) {
	var user User
	err := db.Where("id = ?", id).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func GetUserWithUsername(username string) (*User, error) {
	var user User
	err := db.Where("username = ?", username).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}
