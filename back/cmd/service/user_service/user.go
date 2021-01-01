package user_service

import (
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/uberballo/random-project/cmd/models"
	"github.com/uberballo/random-project/cmd/pkg/util"
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

func createUserToken(username string) (*string, error) {
	password, err := util.CreateToken(username)
	if err != nil {
		return nil, err
	}
	return &password, nil
}

func AddChosenProject(username string, projectId int) error {
	err := models.AddChosenProjectToUser(username, projectId)
	return err
}

func (u *User) Login() (*string, error) {
	foundUser, err := models.GetUserWithUsername(u.Username)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(foundUser.HashPassword), []byte(u.Password))
	passwordMatches := (err == nil)
	if passwordMatches {
		return createUserToken(u.Username)
	}
	return nil, nil
}

func GetUsersChosenProjects(username string) ([]*models.Project, error) {
	user, err := models.GetUserWithUsername(username)

	if err != nil {
		return nil, err
	}

	projects, err := models.GetUsersChosenProjects(user)
	if err != nil {
		return nil, err
	}
	return projects, nil
}
