# Menggunakan image Node.js sebagai base image
FROM node:14

# Mengatur direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin seluruh kode aplikasi
COPY . .

# Mengatur port aplikasi
EXPOSE 3000

# Menjalankan aplikasi
CMD [ "npm", "start" ]
