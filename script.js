// 1. Mengubah teks header menggunakan getElementById
const header = document.getElementById('header-utama');
header.textContent = "Seleksi ID Berhasil";

// 2. Iterasi class menggunakan getElementsByClassName
const produkElements = document.getElementsByClassName('produk-item');
// Diubah ke Array agar bisa menggunakan forEach
Array.from(produkElements).forEach((el) => {
    el.classList.add('tebal'); // Menambahkan class 'tebal'
    el.textContent = "[UPDATED] " + el.textContent; // Menambahkan prefix
});

// 3. Mengubah warna latar elemen data-status menggunakan querySelector
const statusPending = document.querySelector('[data-status="pending"]');
if (statusPending) {
    statusPending.style.backgroundColor = "kuning"; 
    // Catatan: Jika ingin warna kuning standar CSS gunakan "yellow"
    statusPending.style.backgroundColor = "yellow";
}

// 4. Mengganti isi semua <li> menggunakan querySelectorAll
const listItems = document.querySelectorAll('ul li');
listItems.forEach((li) => {
    li.innerHTML = '<span>Konten Baru dari JS</span>';
});