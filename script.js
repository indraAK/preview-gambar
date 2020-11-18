// Elements
const inputFile = document.getElementById('inputFile');
const previewText = document.querySelector('.preview-text');
const img = document.querySelector('.preview-img');
const loading = document.querySelector('.loading');

function previewGambar() {
   // ambil file gambar yg diupload
   const fileList = this.files[0];
   // ambil ekstensi file gambar yg diupload
   const fileExt = fileList.name.slice(fileList.name.lastIndexOf('.') + 1).toLowerCase();
   // ekstensi file gambar yang diperbolehkan
   const allowedExt = ['jpg', 'jpeg', 'png'];

   // cek ekstensi file yg diupload
   if (allowedExt.includes(fileExt)) {
      // jika yg diupload adalah gambar
      // sembunyikan text preview
      previewText.style.display = 'none';
      // sembunyikan gambar
      img.style.display = 'none';
      // tampilkan loading
      loading.hidden = false;

      // instansiasi object FileReader
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
         // tampilkan gambar
         img.src = e.target.result;
         img.title = fileList.name.slice(0, fileList.name.lastIndexOf('.'));
         img.style.display = 'block'
         // sembunyikan loading
         loading.hidden = true;
      }
      fileReader.readAsDataURL(fileList)
   } else {
      // jika file yang diupload bukan gambar
      alert('File yang kamu upload bukan gambar!');
   }
}

// event listener
inputFile.addEventListener('change', previewGambar);



