//Soal 3
function biji(jumlah){
    const hasil = jumlah.map(el =>{
        const arrayBaru = ""
        
        return el += arrayBaru
    })
    const split = hasil[3].split(',')
    hasil.pop()
    console.log(hasil,split.join(' '));
}
biji(['hallo','nama','saya',['lucky','fauzi', ['kelas',['11', ['rpl','2']]]]])




//Soal 4
const obj = {
    nama: "lucky",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
      nama: "Xiaomi Redmi note 9 pro",
      spesifikasiHp: {
          chipset: "Snapdragon 720G",
          ram: "6 GB",
          rom: "128 GB",
          camera: "64mp"
          }
      }
    
    }
    console.log(obj.Hp);