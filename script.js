// File: script.js (Pastikan kode ini ada)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBIChk3UzndLZJPqBZqsM_64crAmqkSxeA", 
  authDomain: "websitescript-cfd0b.firebaseapp.com",
  projectId: "websitescript-cfd0b",
  storageBucket: "websitescript-cfd0b.firebasestorage.app",
  messagingSenderId: "407456156819",
  appId: "1:407456156819:web:f46b794241e385c3b71166",
  measurementId: "G-CZXZNQSVLZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

// Lanjutan dari script.js

import { collection, addDoc } from "firebase/firestore"; // <-- Import fungsi ini

// Fungsi asinkron untuk menambahkan data baru
async function addTask(taskText) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), { // Ganti "tasks" dengan nama koleksi Anda
            text: taskText,
            timestamp: new Date(),
            completed: false
        });
        
        console.log("Dokumen berhasil ditulis dengan ID: ", docRef.id);
        alert(`Tugas '${taskText}' berhasil ditambahkan!`);
        
    } catch (e) {
        console.error("Error saat menambahkan dokumen: ", e);
        alert("Gagal menambahkan tugas. Cek konsol browser.");
    }
}

// PANGGILAN UJI COBA: Panggil fungsi untuk menguji penyimpanan data
// Panggil fungsi ini sekali (atau hubungkan ke tombol)
addTask("Beli bahan makanan dan cek status Firestore."); 
