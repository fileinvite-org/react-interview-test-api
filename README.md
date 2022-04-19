## React Technical test
This is a REST API backend required for the React test, this api doesn't require any authentication.

### API Endpoints 
- **GET** `/rooms`<br/> 
 Returns an array of all current rooms
- **GET** `/room/{id}`<br/> 
Returns the room info  with the given id
- **PUT** `/rooms`<br/> 
Updates the room. Returns the updated room
- **PATCH** `/room/{id}`<br/> 
Update the room info  with the given id

Sample JSON response from `GET /rooms`

```json
{
"id": 1,
"roomName": "Room3",
"hostName": "Host 1",
"guests": [
"Guest 1"
],
"bookingDate": "2022-04-11T11:00:00.000Z",
"bookingTimeStart": "2022-04-18T12:00:00.000Z",
"duration": 1
}
```

### Installation

1. Install dependencies

```
npm install
```

3. Start 

```
npm start
```

The proxy will running at port 5000 by default. 


