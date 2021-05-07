# Zuri-Task

This project was generated with [Nodejs](https://nodejs.org/en/) version 14.15.5.

## Development server
Run `nodemon server` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## To test the app using heroku link on postman

### Base url: `https://zuri-project.herokuapp.com/`

1. Create  
	POST - `/create`  
	* payload  
		`{  
			"name": "string here",  
			"email":"string here",  
			"country": "string here"  
		}`

2. Read
	* findAll  
		GET - `/users`
	* FindOne  
		GET - `/user/_id`

3. Update  
	PUT - `/update/_id`
	* payload (N:B You can upload one or all keys)
		`{   
            "name": "string here",  
			"email":"string here",  
			"country": "string here"  
		}`

4. Delete  
	DELETE - `/delete/_id`
