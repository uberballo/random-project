package models

import (
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Model
	Username     string `json:"username`
	HashPassword string `json:"password`
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
