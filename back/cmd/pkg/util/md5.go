package util

import (
	"crypto/md5"
	"encoding/hex"
)

func EncodeMD5(value string) string {
	md5 := md5.New()
	md5.Write([]byte(value))

	return hex.EncodeToString(md5.Sum(nil))
}
