curl -X 'GET' \
  'https://api.hsabook.vn/users?sort_type=DESC&role=teacher' \
  -H 'accept: */*'

// response

{
  "messages": "Success",
  "data": {
    "pagination": {
      "current_page": 1,
      "total_pages": 1,
      "take": 10,
      "total": 10
    },
    "data": [
      {
        "id": "3ead6a72-8afa-4d36-9155-efb0470db5ba",
        "created_at": "2024-11-24T15:48:26.720Z",
        "updated_at": "2024-11-24T15:49:02.643Z",
        "deleted_at": null,
        "hash_password": "6939b06f19351ae65b534108577cffdf",
        "username": "Test1",
        "email": "thuy210499@gmail.com",
        "phone_number": "0374357435",
        "full_name": "Lê Thị Thủy",
        "avatar": "https://api.hsabook.vn/uploads/2024-11-24/1732463340578.png",
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "37940275-1853-4d04-affa-e9415d360a81",
        "created_at": "2024-11-23T16:40:56.307Z",
        "updated_at": "2024-11-24T03:38:01.552Z",
        "deleted_at": null,
        "hash_password": "c20ad4d76fe97759aa27a0c99bff6710",
        "username": "2atccnode",
        "email": "atccnode21@gmail.com",
        "phone_number": "0234242233",
        "full_name": "Testb213",
        "avatar": "https://api.hsabook.vn/uploads/2024-11-24/1732381904855.png",
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "670c8c4e-0dd1-43ed-b1ae-596b8b40cdf8",
        "created_at": "2024-11-23T06:09:00.669Z",
        "updated_at": "2024-11-23T06:09:00.669Z",
        "deleted_at": null,
        "hash_password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "test",
        "email": "test@gmail.com",
        "phone_number": "0234242234",
        "full_name": "Test",
        "avatar": null,
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "44940508-4c38-48cd-82cc-188fa4fb871f",
        "created_at": "2024-11-22T14:06:22.737Z",
        "updated_at": "2024-11-22T14:06:22.737Z",
        "deleted_at": null,
        "hash_password": "0c8abdb962f042d1857c66dd26b0c87b",
        "username": "tungpv03",
        "email": "tungpv03.work@gmail.com",
        "phone_number": "0345498163",
        "full_name": "Pham Viet Tung",
        "avatar": "https://api.hsabook.vn/uploads/2024-11-22/1732284378888.jpg",
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "18e5eba9-e6f2-4580-9658-212a441a8d73",
        "created_at": "2024-11-17T14:09:27.093Z",
        "updated_at": "2024-11-17T14:09:27.093Z",
        "deleted_at": null,
        "hash_password": "81dc9bdb52d04dc20036dbd8313ed055",
        "username": "toantran0512",
        "email": "atccnode@gmail.com",
        "phone_number": "093424223",
        "full_name": "at",
        "avatar": "https://api.hsabook.vn/uploads/2024-11-17/1731852523068.svg",
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "084d1377-e8b5-4170-b2ac-f0e05db844bf",
        "created_at": "2024-11-03T15:09:30.148Z",
        "updated_at": "2024-11-03T15:09:30.148Z",
        "deleted_at": null,
        "hash_password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "teacher5",
        "email": "teacher5@example.com",
        "phone_number": "09904195115",
        "full_name": "teacher5",
        "avatar": null,
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "de8e7d87-2a76-4fd3-959e-057dc1d2b727",
        "created_at": "2024-11-03T14:30:43.317Z",
        "updated_at": "2024-11-03T14:30:43.317Z",
        "deleted_at": null,
        "hash_password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "teacher4",
        "email": "teacher4@example.com",
        "phone_number": "09904195114",
        "full_name": "teacher4",
        "avatar": null,
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "19dd3d86-6db4-4288-b513-09c7be9a9379",
        "created_at": "2024-11-03T14:30:23.859Z",
        "updated_at": "2024-11-03T14:30:23.859Z",
        "deleted_at": null,
        "hash_password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "teacher3",
        "email": "teacher3@example.com",
        "phone_number": "09904195113",
        "full_name": "teacher3",
        "avatar": null,
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "74750f4c-97c5-449c-b947-050e17823751",
        "created_at": "2024-11-03T14:30:06.811Z",
        "updated_at": "2024-11-03T14:30:06.811Z",
        "deleted_at": null,
        "hash_password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "teacher2",
        "email": "teacher2@example.com",
        "phone_number": "09904195112",
        "full_name": "teacher2",
        "avatar": null,
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      },
      {
        "id": "35c7942e-3ad4-4826-a067-94e2a8a8f0ee",
        "created_at": "2024-11-03T14:27:26.101Z",
        "updated_at": "2024-11-03T14:27:26.101Z",
        "deleted_at": null,
        "hash_password": "e10adc3949ba59abbe56e057f20f883e",
        "username": "tearcher1",
        "email": "tearcher1@example.com",
        "phone_number": "09904195111",
        "full_name": "teacher1",
        "avatar": null,
        "description": null,
        "role": "teacher",
        "rank": null,
        "status": "active",
        "book_visits": [],
        "_constructor-name_": "UserEntity"
      }
    ]
  },
  "status_code": 200
}