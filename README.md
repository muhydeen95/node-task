# Zuri-Task

## To start the app
*Run npm install*

## To serve the  app

*Run nodemon server*


## To test the app using heroku link on postman

Create: https://zuri-project.herokuapp.com/create

#### Payload is 
{ "message" : "string here",
			 data":{ "name" : "string here",
									"email" :"string here",
									"country": "string here"
			}
}

GET: https://zuri-project.herokuapp.com/

Update: https://zuri-project.herokuapp.com/update/_id
#### Payload is 
{
	data":{ 
        "name" : "string here",
		"email" :"string here",
		"country": "string here"
	}
}

Delete: https://zuri-project.herokuapp.com/delete/_id