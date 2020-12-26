package user_service

import (
	"github.com/uberballo/random-project/cmd/models"
)

type User struct {
	Username string
	Password string
}

func (u *User) Create() (*models.User, error) {
	user := map[string]interface{}{
		"username": u.Username,
		"password": u.Password,
	}
	createdUser, err := models.CreateUser(user)
	return createdUser, err
}
