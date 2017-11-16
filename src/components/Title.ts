import Vue from 'vue';

export default {
    name: 'Title',
    template: '<div></div>',
    props: {
        name: String
    },
    created () {
        // 设置title
        document.title = this.name || 'vue2-typescript';
    },
    watch: {
        // 处理异步返回的title数据
        name () {
            if (this.name) {
                document.title = this.name;
            }
        }
    }
};
