package server

import (
	"fmt"
	"net/http"
	"os"

	"github.com/uberballo/web-scraper/cmd/scraper"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "hello\n")
}

func stock(w http.ResponseWriter, req *http.Request) {
	url := os.Getenv("MAIN_URL")

	res := scraper.ScrapeAsJSON(url)
	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}

func StartServer() {
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/stock", stock)

	http.ListenAndServe(":3001", nil)
}
