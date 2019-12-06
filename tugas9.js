function tugas9() {
  var dummy = {
    nama: "Andika Andriana",
    umur: "24 tahun",
    hobi: {
      hobi1: "Belajar Coding",
      hobi2: "Mendengarkan Podcast",
      hobi3: "Ngopi"
    }
  }
  for (let ulang in dummy) {
    console.log(dummy[ulang]);
  }
}

tugas9();