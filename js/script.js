let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Asrii";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/zal.zip/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Halooo Asriiiiii!',
    html: `Sebelum masuk ke pointnya ada yg ingin aku sampaikan dulu nih`,
    timer: 7000,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Pertama, makasih yaa karena kamu udah pakai sepatu yg aku kasih wkwk').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Kirain gegara longgar kmu ga bakal pake, eh kmrn pas kegiatan pameran ternyata kamu pakai`,
          timer: 7000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Senang banget aku pas liat, makasih yaa`,
              timer: 7000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('udah sebulan sejak aku menjauh dari kamu, ntah knp sampai sekarang aku blm bisa membiasakan diri dengan keadaan kita yang baru (Alhamdulillah kalo kamu udah)').then((result) => {
                  Swal.fire(
                    'aku ngerasa saat kita bertemu kek canggung banget, padahal sblmnya kita enjoyable dengan suasana',
                    '',
                    ''
                  ).then((result) => {
                    Swal.fire(
                      'trus kamu yang tiap butuh apa apa selalu larinya ke aku, skrng udah gak lagi. bahkan aku yang tipe orangnya susah cemburu, jujur banget kali ini aku ngerasa cemburu',
                      '',
                      ''
                    ).then((result) => {
                      Swal.fire('saat liat kmu yang lagi butuh bantuan tapi mintanya ke orang lain padahal aku ada disitu, perasaan aku kek ga nyaman liat itu (jadi kadang kalo udah kek gini aku ngilang)').then((result) => {
                        Swal.fire({
                          title: ' ',
                          text: 'kamu ga salah sih untuk ini, yaa mungkin ini gegara sebelumnya selalu apa apa sama aku. makanya aku cemburu untuk ini',
                          showDenyButton: true,
                          confirmButtonText: `Jangan klik ini`,
                          denyButtonText: `Lanjut`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau apa?',
                              input: 'text',
                              inputPlaceholder: 'ex: Seblacc, boba, or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu dong by'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okey by', 'Nanti aku kabulin kemauan kamu yaa', 'success').then((result) => {
                                Swal.fire("See ya! Aku kangen ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('jadi yang aku mau tanya ke kamu, apakah caraku kemarin itu salah? cara aku putusin komunikasi kita berdua biar kamu ga terus terusan ngerasa bersalah sama hubungan kemarin').then((result) => {
                              Swal.fire("oke itu aja, lanjut respon di wa yaa. see you").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
