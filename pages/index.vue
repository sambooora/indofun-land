<script lang="ts" setup>

const products = [
{
  id: 6,
  name: 'Tongkat Ajimat Madura Pink',
  img: '/assets/am-9.jpeg',
  price: '65000,00',
  desc: 'Best Seller Kami, Lebih halus dan beraroma Mawar',
  best: true
},{
  id: 1,
  name: 'Tongkat Ajimat Madura Extra Big',
  img: '/assets/am-4.jpeg',
  price: '110000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 2,
  name: 'Tongkat Ajimat Madura Putih SM',
  img: '/assets/am-2.jpeg',
  price: '45000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 3,
  name: 'Tongkat Ajimat Madura Putih middle',
  img: '/assets/am-3.jpeg',
  price: '55000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 4,
  name: 'Tongkat Ajimat Madura Putih',
  img: '/assets/am-4.jpeg',
  price: '55000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 5,
  name: 'Tongkat Ajimat Madura Coklat',
  img: '/assets/am-5.jpeg',
  price: '60000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 7,
  name: 'Tongkat Ajimat Madura Hitam',
  img: '/assets/am-7.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
]

const testimoni = [{
  id: 1,
  name: 'Sarah - Nama Samaran',
  desc: 'Sejak menggunakan produk-produk dari perawatan ayu indofun saya dan suami semakin mesra setiap harinya. terimakasih',
  source: 'Facebook'
},
{
  id: 2,
  name: 'Udin Petot - Nama Samaran',
  desc: 'Menyembuhkan Keputihan istri saya selama ini. membuat hubungan suami istri semakin harmonis',
  source: 'Facebook'
},
{
  id: 3,
  name: 'Gatot - Nama Samaran',
  desc: 'Barangnya Original dan ampuh, jos deh pokoknya',
  source: 'Facebook'
},
]
</script>
<template>
  <div>
    <section
      class="-mt-16 sm:-mt-20 md:-mt-24 flex flex-col h-[500px] md:h-screen !grayscale !brightness-70"
      style="
        background-image: url(/assets/bg-hero.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="container mx-auto px-8 md:px-0 pt-24 flex-1 flex flex-col items-start justify-center">
        <div class="text-3xl md:text-4xl xl:text-5xl max-w-lg lg:max-w-2xl flex flex-col justify-start">
          <p class="leading-normal text-gray-600">Perawatan Ayu Indofun</p>
          <p class="text-xl tracking-wide text-gray-600"> Menyediakan segala kebutuhan kecantikan dan kebutuhan keharmonisan keluarga anda.</p>
          <span class="text-xl font-semibold text-gray-600 py-5">HERBAL | ORIGINAL | Bergaransi</span>
        </div>
        <button class="btn btn-outline text-gray-600 border-gray-600 text-2xl mt-12 px-8">Pesan Sekarang</button>
      </div>
    </section>
    <section class="container mx-auto px-8 md:px-0 mt-10">
      <span class="text-2xl">Produk Unggulan</span>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5">
        <div v-for="item in products"
                :key="products.id" class="card w-full md:-1/3 bg-base-300 shadow-xl">
              <figure><img :src="item.img" alt="" /></figure>
              <div class="card-body">
                <h2 class="card-title">{{ item.name }} <div v-if="item.best === true" class="badge badge-secondary">Best Seller</div> <span></span></h2>
                <span v-if="item.id === 6">{{ item.desc }}</span>
                <span class="text-2xl text-end font-semibold mt-10"> {{ item.price }}</span>
              </div>
            </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <NuxtLink to="/product">
          <button class="btn btn-outline text-white text-2xl border-white mt-12 px-8" @click="">Lebih Banyak Produk</button>
        </NuxtLink>
      </div>
    </section>
    <section class="container mx-auto px-8 md:px-0 h-full flex flex-col items-center gap-3 mt-10">
      <span class="text-2xl">Cari tau tentang, Tongkat AM Madura</span>
      <div class="w-full flex flex-col md:flex-row justify-between items-center">
        <div class="w-full md:w-1/2  h-[600px] rounded"
        style="
        background-image: url(/assets/design-2.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      ">

        </div>
        <div class="w-full md:w-1/2 bg-base-300 h-full md:h-[600px] rounded p-10 flex flex-col justify-start gap-3">
          <div class="flex flex-col justify-start p-3 md:p-10 gap-3"> 
            <span class="text-3xl font-semibold">Manfaat Tongkat Ajimat Madura</span>
            <span class="text-xl tracking-wide prose font-semibold">
              Jaminan Original dan Uang Kembali, Rahasia di Cintai Suami
            </span>
            <p class="text-xl tracking-wide prose leading-8">
              Menghilangkan bau tak sedap di miss V, Mengencangkan Miss V, Menghilangkan Lendir yg berlebihan, Meningkatkan Kualitas Hubungan Suami Istri Miss V menjadi Kesat dan rapat
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class=" container mx-auto px-8 md:px-0 h-full flex flex-col items-center mt-10">
      <span class="text-2xl mb-10">Testimoni</span>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <figure v-for="val in testimoni"
                :key="testimoni.id" class=" w-full flex flex-row justify-start items-center bg-slate-100 rounded-xl p-8 dark:bg-base-300">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-xl  font-medium">
              {{ val.desc }}
            </p>
          </blockquote>
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star"  />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" checked/>
          </div>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400 text-xl">
              {{ val.name }}
            </div>
            <div class="text-slate-700 dark:text-slate-500 text-xl">
              {{ val.source }}
            </div>
          </figcaption>
        </div>
        </figure>
      </div>
    </section>
    <section class="container mx-auto px-8 md:px-0 h-full flex flex-col gap-3 items-center mt-10">
      <span class="text-2xl">Cara Pemakaian, Tongkat Ajimat Madura</span>
      <div class="w-full flex flex-col md:flex-row justify-between items-center">
        <div class="w-full md:w-1/2 bg-base-300 h-full md:h-[600px] rounded flex flex-col justify-center items-center p-10 gap-3 text-wrap">
          <div class="flex flex-col justify-start p-3 md:p-10 gap-3">
            <span class="text-3xl tracking-wide font-semibold mb-3">Caranya Cukup mudah</span>
            <ul class=" list-decimal text-xl tracking-wide p-0 md:p-6">
              <li>Pertama bersihkan miss V terlebih dahulu</li>
              <li>Masukan Tongkat AM 3/4 ke dalam Miss V</li>
              <li>Diamkan selama 1-2 Menit</li>
              <li>Bilas dengan bersih</li>
            </ul>
            <span class="text-xl tracking-wide">
              Pehatian : Ibu Hamil, Menyusui dan yg sedang menstruasi dilarang menggunakan produk ini
            </span>
          </div>
        </div>
        <div class="w-full md:w-1/2 h-[600px] rounded" style="
        background-image: url(/assets/Design.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      ">
        </div>
      </div>
    </section>
    <section class="container mx-auto px-8 md:px-0 h-full flex flex-col gap-3 items-center mt-10">
      <div class="flex flex-col justify-start w-full h-96 rounded gap-5 p-10">
        <span class="text-4xl font-semibold">Pemesanan</span>
        <span class="text-xl">Tak perlu bingung, tak perlu pusing tinggal klik link di bawah ini langsung di tangani admin profesional kami</span>
        <div class="flex flex-col md:flex-row  gap-3 mt-5">
          <button class="btn text-white text-2xl bg-green-500 px-24" @click="">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977c0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162l-2.824.741l.753-2.753l-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188a7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73c-.205-.075-.354-.112-.504.112s-.58.729-.711.879s-.262.168-.486.056s-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393c.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666c-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008a.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473c.537.171 1.026.146 1.413.089c.431-.064 1.327-.542 1.514-1.066c.187-.524.187-.973.131-1.067c-.056-.094-.207-.151-.43-.263" clip-rule="evenodd"/></svg> WhatsApp</button>
          <button class="btn bg-blue-500 text-white  text-2xl  px-24" @click=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"/></svg> Facebook</button>
          <button class="btn bg-red-400 text-white  text-2xl  px-24" @click=""> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/></svg> Gmail</button>
        </div>
      </div>
    </section>
  </div>
</template>
