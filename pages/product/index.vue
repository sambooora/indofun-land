<script lang="ts" setup>

const products = [
{
  id: 6,
  name: 'Tongkat Ajimat Madura Pink',
  img: '/assets/am-9.jpeg',
  price: '110000,00',
  desc: 'Best Seller Kami, Lebih halus dan beraroma Mawar',
  best: true
},{
  id: 1,
  name: 'Tongkat Ajimat Madura Jumbo',
  img: '/assets/am-4.jpeg',
  price: '110000,00',
  desc: 'Ukuran lebih besar dan awet dalam pemakaian',
  best: false
},
{
  id: 2,
  name: 'Tongkat Ajimat Madura Putih Kecil',
  img: '/assets/am-2.jpeg',
  price: '45000,00',
  desc: 'kemasan ekonomis',
  best: false
},
{
  id: 3,
  name: 'Tongkat Ajimat Madura Putih Sedang',
  img: '/assets/am-3.jpeg',
  price: '55000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 5,
  name: 'Tongkat Ajimat Madura Coklat Besar',
  img: '/assets/am-5.jpeg',
  price: '60000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 5,
  name: 'Tongkat Ajimat Madura Coklat Sedang',
  img: '/assets/am-8.jpeg',
  price: '45000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 7,
  name: 'Tongkat Ajimat Madura Hitam',
  img: '/assets/am-7.jpeg',
  price: '45000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
{
  id: 8,
  name: 'Tongkat Ajimat Madura Kecil',
  img: '/assets/am-10.png',
  price: '25000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: false
},
]
</script>
<template>
    <div class="mt-24 container mx-auto px-8 md:px-0">
        <span class="text-3xl mb-10">List Produk</span>
        <div class="grid grid-cols-1 md:grid-cols-3  gap-5 mt-5">
          <div v-for="item in products"
                :key="products.id" class="card w-full bg-slate-100 shadow-md">
              <figure><img :src="item.img" alt=""  class=" w-full h-[660px]"/></figure>
              <div class="card-body">
                <h2 class="card-title flex flex-col md:flex-row justify-between items-start md:items-center"> <span> {{ item.name }} </span> <div v-if="item.best === true" class="badge badge-secondary">Best Seller</div> <span></span></h2>
                <span v-if="item.id === 6">{{ item.desc }}</span>
                <span class="text-2xl text-end font-semibold mt-10"> {{ item.price }}</span>
              </div>
            </div>
        </div>
    </div>
</template>