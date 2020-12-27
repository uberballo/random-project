package models

import (
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Model
	Username     string `json:"username`
	HashPassword string `json:"password`
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

func GetUser(username string) (*User, error) {
	var user User
	err := db.Where("username = ?", username).First(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}
