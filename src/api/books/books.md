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