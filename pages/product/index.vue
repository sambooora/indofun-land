<script lang="ts" setup>

const products = [{
  id: 1,
  name: 'Tongkat AM Putih',
  img: '/assets/am-4.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 2,
  name: 'Tongkat AM Putih',
  img: '/assets/am-2.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 3,
  name: 'Tongkat AM Putih',
  img: '/assets/am-3.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 4,
  name: 'Tongkat AM Putih',
  img: '/assets/am-4.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 5,
  name: 'Tongkat AM Putih',
  img: '/assets/am-5.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
{
  id: 6,
  name: 'Tongkat AM Putih',
  img: '/assets/am-7.jpeg',
  price: '65000,00',
  desc: 'Menyembuhkan Keputihan, merapatkan Miss V dan mengurangi lendir yang berlebihan. membuat hubungan suami istri semakin harmonis',
  best: true
},
]
</script>
<template>
    <div class="mt-24 container mx-auto px-8 md:px-0">
        <span class="text-3xl mb-10">List Produk</span>
        <div class="grid grid-cols-1 md:grid-cols-3  gap-5 mt-5">
            <div v-for="item in products"
                :key="products.id" class="card w-full md:-1/3 bg-base-300 shadow-xl">
              <figure><img :src="item.img" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">{{ item.name }} <span></span></h2>
                <span class="text-xl  font-light"> {{ item.desc }}</span>
                <span class="text-2xl text-end font-semibold mt-10"> {{ item.price }}</span>
              </div>
            </div>
        </div>
    </div>
</template>