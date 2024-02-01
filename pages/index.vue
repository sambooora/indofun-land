<script lang="ts" setup>

const products = [{
  id: 1,
  name: 'Tongkat AM Putih',
  img: '/assets/am-2.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 2,
  name: 'Tongkat AM Putih',
  img: '/assets/am-4.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 3,
  name: 'Tongkat AM Putih',
  img: '/assets/am-7.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
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
          <span class="text-xl font-semibold text-gray-600 py-5">HERBAL | ORIGINAL | AMPUH</span>
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
                <h2 class="card-title">{{ item.name }} <span></span></h2>
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
            <span class="text-3xl font-semibold">Manfaat Tongkat AM</span>
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
      <!-- <div class="w-full flex justify-center items-center">
        <button class="btn btn-outline text-white text-2xl border-white mt-12 px-8">Lebih Banyak Testimoni</button>
      </div> -->
    </section>
    <section class="container mx-auto px-8 md:px-0 h-full flex flex-col gap-3 items-center mt-10">
      <span class="text-2xl">Cara Pemakaian, Tongkat AM Madura</span>
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
              Pehatian : Ibu Hamil, Menyusui dan yg sedang Menstulasi dilarang menggunakan produk ini
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
    <div>

    </div>
  </div>
</template>
