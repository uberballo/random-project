package e

var messageFlags = map[int]string{
	SUCCESS:                   "ok",
	ERROR:                     "fail",
	ERROR_USER_ALREADY_EXISTS: "User already exists",
	ERROR_USER_DOESNT_EXIST:   "User doesn't exist",
	ERROR_INVALID_PASSWORD:    "Invalid password",
}

func GetMessage(code int) string {
	msg, ok := messageFlags[code]
	if ok {
		return msg
	}
	return messageFlags[ERROR]
}
