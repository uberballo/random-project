package util

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

type Claims struct {
	Username string `json:"username`
	jwt.StandardClaims
}

var jwtSecret []byte

func CreateToken(username string) (string, error) {
	now := time.Now()
	expireTime := now.Add(2 * time.Hour)

	claims := Claims{
		EncodeMD5(username),
		jwt.StandardClaims{
			ExpiresAt: expireTime.Unix(),
			Issuer:    "Random-project",
		},
	}
	tokenClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenClaims.SignedString(jwtSecret)
	return token, err
}
