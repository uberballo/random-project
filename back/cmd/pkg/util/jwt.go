package util

import (
	"fmt"
	"net/http"
	"strings"
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
		username,
		jwt.StandardClaims{
			ExpiresAt: expireTime.Unix(),
			Issuer:    "Random-project",
		},
	}
	tokenClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenClaims.SignedString(jwtSecret)
	fmt.Println("secret", jwtSecret)
	return token, err
}

func DecodeToken(r *http.Request) (*jwt.Token, error) {
	tokenString := extractToken(r)
	fmt.Println(tokenString)

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(jwtSecret), nil
	})

	if err != nil {
		return nil, err
	}
	return token, nil
}

func extractToken(r *http.Request) string {
	bearToken := r.Header.Get("Authorization")
	authString := strings.Split(bearToken, " ")
	if len(authString) == 2 {
		return authString[1]
	}
	return ""
}

func ValidateToken(r *http.Request) error {
	token, err := DecodeToken(r)
	if err != nil {
		return err
	}
	if _, ok := token.Claims.(jwt.Claims); !ok && !token.Valid {
		return err
	}
	return nil
}

type TokenMetadata struct {
	Username string
}

func ExtractTokenMetadata(r *http.Request) (*TokenMetadata, error) {
	token, err := DecodeToken(r)
	if err != nil {
		return nil, err
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		username, ok := claims["Username"].(string)
		if !ok {
			return nil, err
		}
		return &TokenMetadata{
			Username: username,
		}, nil
	}
	return nil, err
}
