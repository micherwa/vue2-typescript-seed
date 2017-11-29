<template>
    <div class="home">
        <Title name="vue-ts-demo"></Title>
        {{sayHello}}
        <mt-button @click="sayHi">say hi</mt-button>

        <button class="btn btn-default m-t-15" @click="startCountDown" :disabled="countDown.isStart">
            <CountDown :is-start="countDown.isStart" :seconds="5"
             :on-count-end="handleCountEnd" initContent="免费获取" afterContent="再次获取">
            </CountDown>
        </button>

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
