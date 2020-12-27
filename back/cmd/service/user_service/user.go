package user_service

import (
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/uberballo/random-project/cmd/models"
)

type User struct {
	Username string `gorm:unique`
	Password string
}

func (u *User) CheckIfUserExists() error {
	if models.CheckIfUserExists(u.Username) {
		return errors.New("User already exists")
	}
	return nil
}

func (u *User) Create() (*models.User, error) {
	user := map[string]interface{}{
		"username": u.Username,
		"password": u.Password,
	}
	createdUser, err := models.CreateUser(user)
	return createdUser, err
}

func (u *User) Login() (bool, error) {
	foundUser, err := models.GetUser(u.Username)
	if err != nil {
		return false, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(foundUser.HashPassword), []byte(u.Password))
	passwordMatches := (err == nil)

	return passwordMatches, nil
}
