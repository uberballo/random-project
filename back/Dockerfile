FROM golang:latest


WORKDIR /app/back

copy ./ /app 




RUN go mod download

RUN ["go", "get", "github.com/githubnemo/CompileDaemon"]


ENTRYPOINT CompileDaemon -log-prefix=true --build="go build cmd/main.go"  --command=./main
