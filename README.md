# AngularParkingClient

Aplikasi client untuk parkir berbasis angular versi 10.0.0

## Install library NodeJS

Jalankan `node install`

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

Jalankan `ng serve` pada terminal console (command prompt).

## Build aplikasi

Jalankan `ng build` untuk membuild project. Hasil build project akan disimpan pada folder `dist/`. Gunakan flag `--prod` untuk build production.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

