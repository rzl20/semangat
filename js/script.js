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
    html: `${time()} Ooo, udah ${makan() belum}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalo belum, ntar b samperin ke sekolah loh').then((result) => {
        Swal.fire({
          title: ' ',
          html: `hemmm, aku udah denger dari rahmaa sih`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `maafin aku yaa udah keceplosan terkait alasan kamu suka sama aku`,
              timer: 4000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus:)').then((result) => {
                  Swal.fire(
                    'Jangan ngambek yaaa',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan jauh dari tuhan jugaa ya',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('aaaaaaaa intinya aku mo minta maaf karena keteledoran aku').then((result) => {
                        Swal.fire({
                          title: 'kalo misal aku ga di maafin',
                          text: 'apa ada yang harus aku lakukan?',
                          showDenyButton: true,
                          confirmButtonText: `Ada`,
                          denyButtonText: `Sonde ada kok`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'apa tuh?',
                              input: 'text',
                              inputPlaceholder: 'apa ajaaaa terserah kamuuuu',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu dong'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okeeee', 'okeee ntar aku coba lakuin itu', 'success').then((result) => {
                                Swal.fire("See ya! Semangatttt ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('hmm okedeh kalo ga ada').then((result) => {
                              Swal.fire("See ya! Semangatttt ^^").then((result) => {
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
