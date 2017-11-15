<template>
    <div class="home">
        {{sayHello}}
        <button @click="sayHi">hi</button>

        <div class="list m-t-30" v-for="item in userList">
            <div class="item">
                <label class="item-label arrow" :id="'item-'+item.id">{{item.name}}</label>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./script.ts" lang="ts"></script>
