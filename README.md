# API dengan ketentuan sebagai berikut:
----

- User dapat Login (JWT otentifikasi)
- User dapat mencari dokter
- User dapat melihat profil dokter
- User dapat membuat janji dengan dokter
- User dapat membatalkan janji dengan dokter

----

**DOKTER CREATE**
----
  Membuat data dokter

* **URL**

  /api/dokter/create/dokter

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `nama=[string]`


   `spesialis=[string]`

* **Screenshot**

  ![DOKTER CREATE](/img/DOKTER_CREATE.png)


**VIEW DETAIL DOKTER**
----
  User melihat detail dari dokter berdasarkan id

* **URL**

  /api/user/detail/dokter

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`


* **Screenshot**

  ![DETAIL DOKTER](/img/USER_VIEW_DETAIL_DOKTER.png)

**CARI DOKTER**
----
  User mencari dokter berdasarkan nama

* **URL**

  /api/user/cari/dokter

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `nama=[string]`


* **Screenshot**

  ![CARI DOKTER](/img/USER_VIEW_CARI_DOKTER.png)

**VIEW ALL DOKTER**
----
  User melihat semua/list dokter

* **URL**

  /api/user/get/dokter

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `NONE`


* **Screenshot**

  ![VIEW ALL DOKTER](/img/USER_VIEW_ALL_DOKTER.png)

**USER REGISTER**
----
  Memasukkan data dari User

* **URL**

  /api/user/register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `username=[string]`


   `password=[string]`


* **Screenshot**

  ![USER REGISTER](/img/USER_REGISTER.png)

**USER LOGIN**
----
  Login User agar user bisa mendapatkan Token untuk bisa menggunakan URL yang dilindungi JWT

* **URL**

  /api/user/login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `username=[string]`
   
   
   `password=[string]`


* **Screenshot**

  ![USER LOGIN](/img/USER_LOGIN.png)

**VALIDASI USER**
----
  Validasi User setelah menerima token dari login

* **URL**

  /api/user/validate

* **Method:**

  `GET`
  
*  **URL Params**

   **Headers:**

   `Authrozation=Bearer-[token]`


   **Required:**
 
   `username=[string]`
   
   
   `password=[string]`


* **Screenshot**
  
  
  AUTH

  ![USER VALIDASI AUTH](/img/USER_VALIDASI_AUTH.png)

  NO AUTH

  ![USER VALIDASI NO AUTH](/img/USER_VALIDASI_NOAUTH.png)


**VIEW ALL USER**
----
  Melihat semua User

* **URL**

  /api/user/get/user

* **Method:**

  `GET`
  
*  **URL Params**


   **Required:**
 
   `NONE`


* **Screenshot**
  
  
  ![VIEW ALL USER](/img/USER_VIEW_ALL.png)

**USER MEMBUAT JANJI**
----
  User membuat Janji ke Dokter

* **URL**

  /api/user/create/janji

* **Method:**

  `POST`
  
*  **URL Params**

   **Headers:**

   `Authrozation=Bearer-[token]`


   **Required:**
 
   `nama_user=[string]`
   
   
   `nama_dokter=[string]`
   
   
   `tgl=[string]`


* **Screenshot**
  
  
  AUTH

  ![USER JANJI AUTH](/img/USER_JANJI_DOKTER_AUTH.png)

  NO AUTH

  ![USER JANJI NO AUTH](/img/USER_DELETE_JANJI_NOAUTH.png)


**USER DELETE JANJI**
----
  User membatalkan janji

* **URL**

  /api/user/delete/janji

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Headers:**

   `Authorization=Bearer-[token]`


   **Required:**
 
   `id=[string]`
   

* **Screenshot**
  
  
  AUTH

  ![USER DELETE JANJI AUTH](/img/USER_DELETE_JANJI_AUTH.png)

  NO AUTH

  ![USER DELETE JANJI NO AUTH](/img/USER_DELETE_JANJI_NOAUTH.png)

