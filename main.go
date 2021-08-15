package main

import (
	_ "react-todo/routers"
	beego "github.com/beego/beego/v2/server/web"
)

func main() {
	beego.Run()
}

