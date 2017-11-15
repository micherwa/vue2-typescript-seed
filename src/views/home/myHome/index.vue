<template>
    <div class="home">
        {{sayHello}}
        <button @click="sayHi">hi</button>

        <p class="m-t-30">直接从mock中取到的user数据：</p>
        <div class="list" v-for="item in userList">
            <div class="item">
                <label class="item-label arrow" :id="'item-'+item.id">{{item.name}}</label>
            </div>
        </div>

        <p class="m-t-30">间接从vuex中取到的product数据：</p>
        <div class="list" v-for="item in productList">
            <div class="item">
                <label class="item-label arrow" :id="'item-'+item.id">{{item.name}}</label>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./script.ts" lang="ts"></script>
