<template>
    <div>
        <span v-if="showInitContent">{{initContent}}</span>
        <span v-if="showCountDown">{{time}}秒后获取</span>
        <span v-if="showAfterContent">{{afterContent}}</span>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component ({})
export default class CountDown extends Vue {
    showInitContent: Boolean = true;
    showAfterContent: Boolean = false;
    showCountDown: Boolean = false;
    time: number = 0;
    timeInterval: number = 0;

    @Prop() isStart: boolean;
    @Prop() seconds: number;
    @Prop() initContent: string;
    @Prop() afterContent: string;
    @Prop() onCountEnd: Function;

    created () {
        this.time = this.seconds;
    }

    handleStart () {
        this.showInitContent = false;
        this.showAfterContent = false;
        this.countDown();
    }

    showContent () {
        this.showAfterContent = true;
        this.showCountDown = false;
        this.time = this.seconds;
    }

    countDown () {
        this.showCountDown = true;
        this.timeInterval = setInterval(() => {
            if (this.time <= 0) {
                this.time = 0;
                clearInterval(this.timeInterval);
                this.showContent();
                this.onCountEnd(true, 'countDown end');
                return;
            }
            this.time--;
        }, 1000);
    }

    @Watch('isStart')
    onIsStartChanged() {
        if (this.isStart) {
            this.handleStart();
            return;
        }
        this.timeInterval && clearInterval(this.timeInterval);
    }
};
</script>
