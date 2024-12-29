curl -X 'POST' \
  'https://decf-2001-ee0-4001-801e-fd9b-3b81-f311-707.ngrok-free.app/books' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "avatar": "Test 1",
  "name": "Tesst 2",
  "tags": "",
  "authors": "",
  "expiration_date": 0,
  "description": "string",
  "publishing_house": "string",
  "subject": "Toán"
}'

// response
{
  "messages": "Success",
  "data": {
    "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
    "avatar": "Test 1",
    "name": "Tesst 2",
    "name_search": "Tesst 2",
    "description": "string",
    "expiration_date": 0,
    "code_id": 71394,
    "quantity": null,
    "active": false,
    "publishing_house": null,
    "subject": null,
    "is_file": false,
    "file_download": null,
    "xlsx_files": [],
    "id": "b458992e-7d3a-4d25-a3c3-91df6b3c5501",
    "created_at": "2024-12-29T08:01:34.584Z",
    "updated_at": "2024-12-29T08:01:34.584Z",
    "deleted_at": null
  },
  "status_code": 200
}
__________________________________________________________________________________________________________________________________

curl -X 'GET' \
  'https://api.hsabook.vn/books?take=100&page=1&sort_field=created_at&sort_type=DESC' \
  -H 'accept: */*'

{
  "messages": "Success",
  "data": {
    "pagination": {
      "current_page": 1,
      "total_pages": 2,
      "take": 10,
      "total": 13
    },
    "data": [
      {
        "id": "c9cb2f60-9aa3-49f5-94f4-770b0fc0776f",
        "created_at": "2024-12-29T11:55:22.489Z",
        "updated_at": "2024-12-29T11:55:22.489Z",
        "deleted_at": null,
        "code_id": 220897,
        "description": "222",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "Tesst ",
        "name_search": "Tesst ",
        "avatar": "https://api.hsabook.vn/uploads/2024-12-29/1735473322431.jpg",
        "quantity": 0,
        "expiration_date": 12,
        "active": false,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [],
        "book_tags": [
          {
            "id": "50abc3e9-1653-4ff2-9613-1e53781d0034",
            "created_at": "2024-12-29T11:55:22.517Z",
            "updated_at": "2024-12-29T11:55:22.517Z",
            "deleted_at": null,
            "book_id": "c9cb2f60-9aa3-49f5-94f4-770b0fc0776f",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "dc78a86e-7aac-4547-b837-fd11ba00474f",
            "created_at": "2024-12-29T11:55:22.517Z",
            "updated_at": "2024-12-29T11:55:22.517Z",
            "deleted_at": null,
            "book_id": "c9cb2f60-9aa3-49f5-94f4-770b0fc0776f",
            "user_id": "3ead6a72-8afa-4d36-9155-efb0470db5ba",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "0796469b-a285-4d57-8cca-5e32dbd462c8",
        "created_at": "2024-12-29T11:49:24.667Z",
        "updated_at": "2024-12-29T11:49:24.667Z",
        "deleted_at": null,
        "code_id": 103875,
        "description": "Toán ",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "HSA 234",
        "name_search": "HSA 234",
        "avatar": "https://api.hsabook.vn/uploads/2024-12-29/1735472964624.jpg",
        "quantity": 0,
        "expiration_date": 12,
        "active": false,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [],
        "book_tags": [
          {
            "id": "87ca4919-31f9-41e9-b8a2-5252ab00c401",
            "created_at": "2024-12-29T11:49:24.712Z",
            "updated_at": "2024-12-29T11:49:24.712Z",
            "deleted_at": null,
            "book_id": "0796469b-a285-4d57-8cca-5e32dbd462c8",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "1d8715ff-0401-4554-b240-e765ed6bf821",
            "created_at": "2024-12-29T11:49:24.712Z",
            "updated_at": "2024-12-29T11:49:24.712Z",
            "deleted_at": null,
            "book_id": "0796469b-a285-4d57-8cca-5e32dbd462c8",
            "user_id": "3ead6a72-8afa-4d36-9155-efb0470db5ba",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "7db2bf49-b432-4ad8-bce3-c89d560adae7",
        "created_at": "2024-12-29T11:47:13.700Z",
        "updated_at": "2024-12-29T11:47:13.700Z",
        "deleted_at": null,
        "code_id": 720701,
        "description": "1",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "Toán ",
        "name_search": "Toan ",
        "avatar": "https://api.hsabook.vn/uploads/2024-12-29/1735472833626.jpg",
        "quantity": 0,
        "expiration_date": 12,
        "active": false,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [],
        "book_tags": [
          {
            "id": "f81e13be-bbbd-446f-9b66-e162f80da700",
            "created_at": "2024-12-29T11:47:13.720Z",
            "updated_at": "2024-12-29T11:47:13.720Z",
            "deleted_at": null,
            "book_id": "7db2bf49-b432-4ad8-bce3-c89d560adae7",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "757ec243-dd6e-4fc4-acf3-d4e8060b087c",
            "created_at": "2024-12-29T11:47:13.720Z",
            "updated_at": "2024-12-29T11:47:13.720Z",
            "deleted_at": null,
            "book_id": "7db2bf49-b432-4ad8-bce3-c89d560adae7",
            "user_id": "19dd3d86-6db4-4288-b513-09c7be9a9379",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "c8231ec6-2300-4c4e-b3b2-2e3a8621ce90",
        "created_at": "2024-12-29T11:45:14.355Z",
        "updated_at": "2024-12-29T11:45:14.355Z",
        "deleted_at": null,
        "code_id": 572701,
        "description": "111",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "111",
        "name_search": "111",
        "avatar": "https://api.hsabook.vn/uploads/2024-12-29/1735472714218.jpg",
        "quantity": 0,
        "expiration_date": 12,
        "active": false,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [],
        "book_tags": [
          {
            "id": "22fcd1ac-6d7a-4c13-b42c-7bc547925868",
            "created_at": "2024-12-29T11:45:14.372Z",
            "updated_at": "2024-12-29T11:45:14.372Z",
            "deleted_at": null,
            "book_id": "c8231ec6-2300-4c4e-b3b2-2e3a8621ce90",
            "tag_id": "7f90a313-d4a5-4f30-9bb5-105bb38cf759",
            "user_id": null,
            "tag": {
              "id": "7f90a313-d4a5-4f30-9bb5-105bb38cf759",
              "created_at": "2024-11-23T18:09:36.510Z",
              "updated_at": "2024-11-23T18:09:36.510Z",
              "deleted_at": null,
              "description": "xzxxxx",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "category [Mong test nghiệm thu]",
              "name_search": "category [Mong test nghiem thu]",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "86569ad1-099d-496e-a122-b2cf6c2aedf5",
            "created_at": "2024-12-29T11:45:14.374Z",
            "updated_at": "2024-12-29T11:45:14.374Z",
            "deleted_at": null,
            "book_id": "c8231ec6-2300-4c4e-b3b2-2e3a8621ce90",
            "user_id": "19dd3d86-6db4-4288-b513-09c7be9a9379",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "244157b0-b363-411b-b56d-60c8102f0e94",
        "created_at": "2024-12-29T11:41:33.467Z",
        "updated_at": "2024-12-29T11:41:33.467Z",
        "deleted_at": null,
        "code_id": 225677,
        "description": "111",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "mongker",
        "name_search": "mongker",
        "avatar": "",
        "quantity": 0,
        "expiration_date": 12,
        "active": false,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [],
        "book_tags": [
          {
            "id": "d6569b25-bca1-4c2a-8d76-09a779a065d3",
            "created_at": "2024-12-29T11:41:33.494Z",
            "updated_at": "2024-12-29T11:41:33.494Z",
            "deleted_at": null,
            "book_id": "244157b0-b363-411b-b56d-60c8102f0e94",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          },
          {
            "id": "5b602092-9ec7-4934-a5d1-3e11ab846a49",
            "created_at": "2024-12-29T11:41:33.494Z",
            "updated_at": "2024-12-29T11:41:33.494Z",
            "deleted_at": null,
            "book_id": "244157b0-b363-411b-b56d-60c8102f0e94",
            "tag_id": "7f90a313-d4a5-4f30-9bb5-105bb38cf759",
            "user_id": null,
            "tag": {
              "id": "7f90a313-d4a5-4f30-9bb5-105bb38cf759",
              "created_at": "2024-11-23T18:09:36.510Z",
              "updated_at": "2024-11-23T18:09:36.510Z",
              "deleted_at": null,
              "description": "xzxxxx",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "category [Mong test nghiệm thu]",
              "name_search": "category [Mong test nghiem thu]",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "47d93e29-ca2c-4cc4-9582-f6efc08cbe0b",
            "created_at": "2024-12-29T11:41:33.506Z",
            "updated_at": "2024-12-29T11:41:33.506Z",
            "deleted_at": null,
            "book_id": "244157b0-b363-411b-b56d-60c8102f0e94",
            "user_id": "19dd3d86-6db4-4288-b513-09c7be9a9379",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "b458992e-7d3a-4d25-a3c3-91df6b3c5501",
        "created_at": "2024-12-29T08:01:34.584Z",
        "updated_at": "2024-12-29T08:01:34.584Z",
        "deleted_at": null,
        "code_id": 71394,
        "description": "string",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "Tesst 2",
        "name_search": "Tesst 2",
        "avatar": "Test 1",
        "quantity": 0,
        "expiration_date": 0,
        "active": false,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [],
        "book_tags": [],
        "authors": []
      },
      {
        "id": "a3a4f63d-afb4-443c-9660-e6bfcb36d4ab",
        "created_at": "2024-12-15T13:47:09.400Z",
        "updated_at": "2024-12-15T13:51:10.884Z",
        "deleted_at": null,
        "code_id": 115554,
        "description": "abcdderc",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "Tung Test",
        "name_search": "Tung Test",
        "avatar": "https://api.hsabook.vn/uploads/2024-12-15/1734270407738.png",
        "quantity": 10,
        "expiration_date": 1,
        "active": true,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [
          {
            "name": "Sách - Tung Test - Xuất lần 0 ngày 2024-12-15.xls",
            "url": "http://localhost:8346/uploads/book-115554/Sách - Tung Test - Xuất lần 0 ngày 2024-12-15.xls",
            "time": "2024-12-15",
            "amount": 10,
            "timestamp": 1734270670878
          }
        ],
        "book_tags": [
          {
            "id": "86ab20c4-9bc9-45f9-a4e6-a6d4022e3299",
            "created_at": "2024-12-15T13:47:09.464Z",
            "updated_at": "2024-12-15T13:47:09.464Z",
            "deleted_at": null,
            "book_id": "a3a4f63d-afb4-443c-9660-e6bfcb36d4ab",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "83125dea-bb7d-4852-8d59-0d00d0795373",
            "created_at": "2024-12-15T13:47:09.490Z",
            "updated_at": "2024-12-15T13:47:09.490Z",
            "deleted_at": null,
            "book_id": "a3a4f63d-afb4-443c-9660-e6bfcb36d4ab",
            "user_id": "44940508-4c38-48cd-82cc-188fa4fb871f",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "204b5ba3-32a6-4d6d-a9f2-1be52a7231d4",
        "created_at": "2024-12-04T00:12:32.482Z",
        "updated_at": "2024-12-08T13:10:24.133Z",
        "deleted_at": null,
        "code_id": 603246,
        "description": "",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "whales",
        "name_search": "whales",
        "avatar": "https://api.hsabook.vn/uploads/2024-12-08/1733658445455.png",
        "quantity": 1185,
        "expiration_date": 1,
        "active": true,
        "publishing_house": null,
        "subject": null,
        "is_file": true,
        "file_download": "http://localhost:8346/uploads/2024-12-08/1733646896980.docx",
        "xlsx_files": [
          {
            "name": "Sách - whales - Xuất lần 1 ngày 2024-12-05.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 1 ngày 2024-12-05.xls",
            "time": "2024-12-05"
          },
          {
            "name": "Sách - whales - Xuất lần 1 ngày 2024-12-05.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 1 ngày 2024-12-05.xls",
            "time": "2024-12-05"
          },
          {
            "name": "Sách - whales - Xuất lần 2 ngày 2024-12-05.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 2 ngày 2024-12-05.xls",
            "time": "2024-12-05"
          },
          {
            "name": "Sách - whales - Xuất lần 3 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 3 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "timestamp": 1733594058718
          },
          {
            "name": "Sách - whales - Xuất lần 4 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 4 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733594144463
          },
          {
            "name": "Sách - whales - Xuất lần 5 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 5 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 111,
            "timestamp": 1733598079893
          },
          {
            "name": "Sách - whales - Xuất lần 6 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 6 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 10,
            "timestamp": 1733598169221
          },
          {
            "name": "Sách - whales - Xuất lần 7 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 7 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 10,
            "timestamp": 1733598318961
          },
          {
            "name": "Sách - whales - Xuất lần 8 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 8 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598350335
          },
          {
            "name": "Sách - whales - Xuất lần 9 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 9 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598382762
          },
          {
            "name": "Sách - whales - Xuất lần 10 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 10 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598423248
          },
          {
            "name": "Sách - whales - Xuất lần 11 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 11 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598465329
          },
          {
            "name": "Sách - whales - Xuất lần 12 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 12 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598530366
          },
          {
            "name": "Sách - whales - Xuất lần 13 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 13 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598553096
          },
          {
            "name": "Sách - whales - Xuất lần 14 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 14 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598620531
          },
          {
            "name": "Sách - whales - Xuất lần 15 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 15 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598674182
          },
          {
            "name": "Sách - whales - Xuất lần 16 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 16 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598893221
          },
          {
            "name": "Sách - whales - Xuất lần 17 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 17 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733598956153
          },
          {
            "name": "Sách - whales - Xuất lần 18 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 18 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733599063479
          },
          {
            "name": "Sách - whales - Xuất lần 19 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 19 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733599247639
          },
          {
            "name": "Sách - whales - Xuất lần 20 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 20 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 1,
            "timestamp": 1733599309778
          },
          {
            "name": "Sách - whales - Xuất lần 21 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 21 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 10,
            "timestamp": 1733632576564
          },
          {
            "name": "Sách - whales - Xuất lần 22 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-603246/Sách - whales - Xuất lần 22 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 10,
            "timestamp": 1733663424131
          }
        ],
        "book_tags": [
          {
            "id": "e0217d19-ba67-4843-863a-ba9c140d8356",
            "created_at": "2024-12-08T11:47:34.112Z",
            "updated_at": "2024-12-08T11:47:34.112Z",
            "deleted_at": null,
            "book_id": "204b5ba3-32a6-4d6d-a9f2-1be52a7231d4",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "227360e2-d0e0-4896-a5a0-9b97994f3661",
            "created_at": "2024-12-08T11:47:34.156Z",
            "updated_at": "2024-12-08T11:47:34.156Z",
            "deleted_at": null,
            "book_id": "204b5ba3-32a6-4d6d-a9f2-1be52a7231d4",
            "user_id": "3ead6a72-8afa-4d36-9155-efb0470db5ba",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "61f2316c-0ab1-4552-8d66-3de4b002efb1",
        "created_at": "2024-11-25T15:12:45.658Z",
        "updated_at": "2024-12-07T20:22:49.095Z",
        "deleted_at": null,
        "code_id": 723916,
        "description": "##",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "mmon",
        "name_search": "mmon",
        "avatar": "https://api.hsabook.vn/uploads/2024-11-25/1732547552880.png",
        "quantity": 420,
        "expiration_date": 1,
        "active": true,
        "publishing_house": "Báo Kim Đồng ",
        "subject": "Toan",
        "is_file": true,
        "file_download": "https://api.hsabook.vn/uploads/2024-12-02/1733143040832.docx",
        "xlsx_files": [
          {
            "name": "Sách - mmon - Xuất lần 0 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-723916/Sách - mmon - Xuất lần 0 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 100,
            "timestamp": 1733602965655
          },
          {
            "name": "Sách - mmon - Xuất lần 1 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-723916/Sách - mmon - Xuất lần 1 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 100,
            "timestamp": 1733602967623
          },
          {
            "name": "Sách - mmon - Xuất lần 2 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-723916/Sách - mmon - Xuất lần 2 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 100,
            "timestamp": 1733602968037
          },
          {
            "name": "Sách - mmon - Xuất lần 3 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-723916/Sách - mmon - Xuất lần 3 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 100,
            "timestamp": 1733602969041
          }
        ],
        "book_tags": [
          {
            "id": "5d34d7fc-eaef-4cf6-bd2b-24db9f1b5523",
            "created_at": "2024-12-01T09:02:33.718Z",
            "updated_at": "2024-12-01T09:02:33.718Z",
            "deleted_at": null,
            "book_id": "61f2316c-0ab1-4552-8d66-3de4b002efb1",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "5424f7a3-5f6c-414f-8ae4-e748fdeab132",
            "created_at": "2024-12-01T09:02:33.723Z",
            "updated_at": "2024-12-01T09:02:33.723Z",
            "deleted_at": null,
            "book_id": "61f2316c-0ab1-4552-8d66-3de4b002efb1",
            "user_id": "37940275-1853-4d04-affa-e9415d360a81",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      },
      {
        "id": "e16938ba-f059-4ac4-8928-89eed724ff3a",
        "created_at": "2024-11-24T15:58:35.468Z",
        "updated_at": "2024-12-07T20:23:03.629Z",
        "deleted_at": null,
        "code_id": 219414,
        "description": "",
        "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
        "name": "[Thuy test] Sách Toán",
        "name_search": "[Thuy test] Sach Toan",
        "avatar": "",
        "quantity": 112,
        "expiration_date": 1,
        "active": true,
        "publishing_house": null,
        "subject": null,
        "is_file": false,
        "file_download": null,
        "xlsx_files": [
          {
            "name": "Sách - [Thuy test] Sách Toán - Xuất lần 0 ngày 2024-12-08.xls",
            "url": "http://localhost:8346/uploads/book-219414/Sách - [Thuy test] Sách Toán - Xuất lần 0 ngày 2024-12-08.xls",
            "time": "2024-12-08",
            "amount": 10,
            "timestamp": 1733602983575
          }
        ],
        "book_tags": [
          {
            "id": "bf6dbb15-6a5d-43bf-8a49-5e1722f15b6d",
            "created_at": "2024-11-24T16:09:41.437Z",
            "updated_at": "2024-11-24T16:09:41.437Z",
            "deleted_at": null,
            "book_id": "e16938ba-f059-4ac4-8928-89eed724ff3a",
            "tag_id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
            "user_id": null,
            "tag": {
              "id": "1fb337a2-fec8-49fd-a3dc-c3e7f7722123",
              "created_at": "2024-11-24T11:03:35.200Z",
              "updated_at": "2024-11-24T11:03:35.200Z",
              "deleted_at": null,
              "description": "IT Books",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "IT",
              "name_search": "IT",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          },
          {
            "id": "48dbc281-689c-4cb8-ab26-98a632066c72",
            "created_at": "2024-11-24T16:09:41.437Z",
            "updated_at": "2024-11-24T16:09:41.437Z",
            "deleted_at": null,
            "book_id": "e16938ba-f059-4ac4-8928-89eed724ff3a",
            "tag_id": "7f90a313-d4a5-4f30-9bb5-105bb38cf759",
            "user_id": null,
            "tag": {
              "id": "7f90a313-d4a5-4f30-9bb5-105bb38cf759",
              "created_at": "2024-11-23T18:09:36.510Z",
              "updated_at": "2024-11-23T18:09:36.510Z",
              "deleted_at": null,
              "description": "xzxxxx",
              "user_id": "2dcab833-7e42-498e-bebb-bd9da4a2e5b2",
              "updated_by": null,
              "deleted_by": null,
              "name": "category [Mong test nghiệm thu]",
              "name_search": "category [Mong test nghiem thu]",
              "avatar": null,
              "parent_id": null,
              "_constructor-name_": "CategoryEntity"
            },
            "_constructor-name_": "BookTagsEntity"
          }
        ],
        "authors": [
          {
            "id": "94c0742f-00ab-42a9-91bb-5934d3338d9f",
            "created_at": "2024-11-24T16:09:41.453Z",
            "updated_at": "2024-11-24T16:09:41.453Z",
            "deleted_at": null,
            "book_id": "e16938ba-f059-4ac4-8928-89eed724ff3a",
            "user_id": "19dd3d86-6db4-4288-b513-09c7be9a9379",
            "user": {
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
            "_constructor-name_": "AuthorEntity"
          }
        ]
      }
    ]
  },
  "status_code": 200
}