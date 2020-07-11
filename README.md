# AngularParkingClient

Aplikasi client untuk parkir berbasis angular versi 10.0.0

## Install library NodeJS

Jalankan `npm install`

## Setting environment variable

edit file "environments/environment.ts", sesuaikan parameter "apiUrl" pada file tersebut.
misalnya :

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  tokenKey: 'token',
  userKey: 'user',
  tokenHeaderKey: 'Authorization'
};

## Running aplikasi

Jalankan `ng serve --open` pada terminal console (command prompt) untuk menjalankan aplikasi dan membuka layar browser otomatis.


## Build aplikasi

Jalankan `ng build` untuk membuild project. Hasil build project akan disimpan pada folder `dist/`. Gunakan flag `--prod` untuk build production.

## Account demo
- level admin :
username: admin
password: admin

- level petugas :
username: user
password: petugas

