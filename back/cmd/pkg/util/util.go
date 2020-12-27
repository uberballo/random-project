package util

import "os"

func Setup() {
	LoadEnv()
	jwtSecret = []byte(os.Getenv("JwtSecret"))
}
