**Register User (POST)**
- Endpoint `/api/auth/register`
- Header `Content-Type: application/json`
- Request Body
```JSON 
{
	"name": "John Doe", // required
 	"email": "johndoe@mail.com", // required
	"phone": "089912341234", //required
	"password": "secret123" //required
}
```

- Response Body
```JSON
{
	"message": "Success create users",
	"data": {
		"id": "",
		"name": "",
		"phone": "",
		"email": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```

**Login User (POST)**
- Endpoint `/api/auth/login`
- Header `Content-Type: application/json`
- Request Body
```JSON
{
	"email": "johndoe@mail.com", // required
	"password": "secret1234" // required
}
```

- Response Body
```JSON
{
	"message": "Success",
	"data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMxOWUyMTE1LTdjNDEtNDUxNi1hZDkzLTdmZWM1NGQ0MjQ1YSIsInVzZXJFbWFpbCI6ImFkZXByaXlhbnRvd2lkaWVzQGdtYWlsLmNvbSIsImlhdCI6MTcxODc2NTk3OCwiZXhwIjoxNzE4Nzk0Nzc4fQ.qK2rSDZACQpJFZtreGS6MOo1djHObZrp6XYy-PyQbO4"
}
```

**Add New Travel (POST)**
- Endpoint `/api/travels`
- Header `Content-Type: application/json`
- Request Body
```JSON
{

	"name": "Pantai pandawa", // required
	"price": 25000, // required
	"imageUrl": "https://cdn.idntimes.com/content-images/post/20230919/2020-01-15-6553f4a7a1c350d36b248ce5e0db2513_600x400.jpg", // required
	"description": "Pantai Pandawa adalah salah satu tempat wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia (Secret Beach). Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa[1] dan Kunti. Keenam patung tersebut secarara berurutan (dari posisi tertinggi) diberi penejasan nama Dewi Kunti, Dharma Wangsa, Bima, Arjuna, Nakula, dan Sadewa. Selain untuk tujuan wisata dan olahraga air, pantai ini juga dimanfaatkan untuk budidaya rumput laut karena kontur pantai yang landai dan ombak yang tidak sampai ke garis pantai. Cukup banyak wisatawan yang melakukan paralayang dari Bukit Timbis hingga ke Pantai Pandawa.", // required
	"location": "Kabupaten Badung, Bali." // required
}
```

- Response Body
```JSON
{
	"message": "Success create travel",
	"data": {
		"id": "eb1ce1ff-7695-4813-80fd-5207e8246044",
		"name": "Pantai pandawa",
		"price": 25000,
		"imageUrl": "https://cdn.idntimes.com/content-images/post/20230919/2020-01-15-6553f4a7a1c350d36b248ce5e0db2513_600x400.jpg",
		"description": "Pantai Pandawa adalah salah satu tempat wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia (Secret Beach). Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa[1] dan Kunti. Keenam patung tersebut secarara berurutan (dari posisi tertinggi) diberi penejasan nama Dewi Kunti, Dharma Wangsa, Bima, Arjuna, Nakula, dan Sadewa. Selain untuk tujuan wisata dan olahraga air, pantai ini juga dimanfaatkan untuk budidaya rumput laut karena kontur pantai yang landai dan ombak yang tidak sampai ke garis pantai. Cukup banyak wisatawan yang melakukan paralayang dari Bukit Timbis hingga ke Pantai Pandawa.",
		"location": "Kabupaten Badung, Bali.",
		"createdAt": "2024-06-19T06:28:23.572Z",
		"updatedAt": "2024-06-19T06:28:23.572Z"
	}
}
```

**Get All Travel (GET)**
- Endpoint `/api/travels`
- Header `Content-Type: application/json`
- Response Body
```JSON
{
	"message": "Success",
	"data": [
		{
			"id": "d419d7df-f577-4792-b831-80869fbd7c3d",
			"name": "Pantai pandawa",
			"price": 100000,
			"description": "Deskripsi travel",
			"location": "Bali",
			"createdAt": "2024-06-19T05:36:26.918Z",
			"updatedAt": "2024-06-19T05:36:26.918Z"
		},
		{
			"id": "eb1ce1ff-7695-4813-80fd-5207e8246044",
			"name": "Pantai pandawa",
			"price": 25000,
			"description": "Pantai Pandawa adalah salah satu tempat wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia (Secret Beach). Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa[1] dan Kunti. Keenam patung tersebut secarara berurutan (dari posisi tertinggi) diberi penejasan nama Dewi Kunti, Dharma Wangsa, Bima, Arjuna, Nakula, dan Sadewa. Selain untuk tujuan wisata dan olahraga air, pantai ini juga dimanfaatkan untuk budidaya rumput laut karena kontur pantai yang landai dan ombak yang tidak sampai ke garis pantai. Cukup banyak wisatawan yang melakukan paralayang dari Bukit Timbis hingga ke Pantai Pandawa.",
			"location": "Kabupaten Badung, Bali.",
			"createdAt": "2024-06-19T06:28:23.572Z",
			"updatedAt": "2024-06-19T06:28:23.572Z"
		}
	]
}
```


**Get Travel By Id (GET)**
- Endpoint `/api/travels/{id}`
- Header `Content-Type: application/json`
- Request parameter `id`
- Response Body
```JSON
{
	"message": "Success get travel",
	"data": {
		"id": "53e0307b-4d60-4a5e-8a3e-dc730487d53e",
		"name": "Pantai pandawa",
		"price": 25000,
		"description": "Pantai Pandawa adalah salah satu tempat wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia (Secret Beach). Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa[1] dan Kunti. Keenam patung tersebut secarara berurutan (dari posisi tertinggi) diberi penejasan nama Dewi Kunti, Dharma Wangsa, Bima, Arjuna, Nakula, dan Sadewa. Selain untuk tujuan wisata dan olahraga air, pantai ini juga dimanfaatkan untuk budidaya rumput laut karena kontur pantai yang landai dan ombak yang tidak sampai ke garis pantai. Cukup banyak wisatawan yang melakukan paralayang dari Bukit Timbis hingga ke Pantai Pandawa.",
		"location": "Kabupaten Badung, Bali.",
		"createdAt": "2024-06-19T06:46:41.412Z",
		"updatedAt": "2024-06-19T06:46:41.412Z"
	}
}
```


**Update Travel (PUT)**
- Endpoint `/api/travels/{id}`
- Request parameter `id`
- Request Body
```JSON
{
	"name": "Pantai pandawa", // required
	"price": 25000, // required
	"imageUrl": "https://cdn.idntimes.com/content-images/post/20230919/2020-01-15-6553f4a7a1c350d36b248ce5e0db2513_600x400.jpg", // required
	"description": "Update description", // required
	"location": "Kabupaten Badung, Bali." // required
}
```

- Response Body
```JSON
{
	"message": "Success update travel",
	"data": {
		"id": "53e0307b-4d60-4a5e-8a3e-dc730487d53e",
		"name": "Pantai pandawa",
		"price": 25000,
		"description": "Update description",
		"location": "Kabupaten Badung, Bali.",
		"createdAt": "2024-06-19T06:46:41.412Z",
		"updatedAt": "2024-06-19T06:46:41.412Z"
	}
}
```
