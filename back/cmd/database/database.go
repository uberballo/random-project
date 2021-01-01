package database

import (
	"fmt"
	"log"

	"github.com/go-ini/ini"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Database struct {
	Type        string
	User        string
	Password    string
	Host        string
	Name        string
	TablePrefix string
}

var DatabaseSetting = &Database{}
var DB *gorm.DB
var cfg *ini.File

func Setup() {
	var err error
	file := "database.ini"
	path := "cmd/database/"
	fmt.Println("not Here")
	filepath := fmt.Sprintf("%s%s", path, file)
	cfg, err = ini.Load(filepath)
	if err != nil {
		log.Fatalf("setting.Setup, fail to parse '%s': %v", file, err)
	}

	mapTo("database", DatabaseSetting)

}

func CreateDB() {
	var err error
	var db *gorm.DB

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		DatabaseSetting.Host,
		5432,
		DatabaseSetting.User,
		DatabaseSetting.Password,
		DatabaseSetting.Name)

	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("models.Setup  errr: %v", err)
	}
	DB = db
}

func GetDB() *gorm.DB {
	return DB
}

func mapTo(section string, v interface{}) {
	err := cfg.Section(section).MapTo(v)
	if err != nil {
		log.Fatalf("Cfg.MapTo %s err: %v", section, err)
	}
}
