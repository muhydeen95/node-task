# Zuri-Task

This project was generated with [Nodejs](https://nodejs.org/en/) version 14.15.5.

## Development server
Run `nodemon server` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## To test the app using heroku link on postman

### Create: `https://zuri-project.herokuapp.com/create`

#### Payload is 
`{ "message" : "string here",
		data":{ 
            "name" : "string here",
			"email" :"string here",
			"country": "string here"
	    }
}`

### GET: `https://zuri-project.herokuapp.com/`

Update: `https://zuri-project.herokuapp.com/update/_id`
#### Payload is 
`{
	data":{ 
        "name" : "string here",
		"email" :"string here",
		"country": "string here"
	}
}`

### Delete: `https://zuri-project.herokuapp.com/delete/_id`