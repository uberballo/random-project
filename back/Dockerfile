FROM golang:latest


WORKDIR /app/back

copy ./ /app 


EXPOSE 3001

RUN go mod download

RUN ["go", "get", "github.com/githubnemo/CompileDaemon"]


ENTRYPOINT CompileDaemon -log-prefix=true --build="go build main.go"  --command=./main
