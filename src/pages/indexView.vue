<template>
    <div class="index-page">
    <div @click="passwordAll=true" class="show-pop">调出密码弹窗</div>
        <pop v-if="passwordAll" v-on:setPwd="toNext()" v-on:close="hidePsw"
                     :txnPassword="txnPassword" ></pop>
        <keyboard @numClick="getPsw" v-if="passwordAll" :lowerLeftBtn="''"></keyboard>
    </div>
</template>
<script>
    import keyboard from "./../components/keyBoard.vue"
    import pop from "./../components/pop.vue"

    export default {
        data() {
            return {
                passwordAll:false,
                txnPassword:""
            }
        },
        route: {
            data: function () {
            }
        },
        name: 'index-view',
        components:{
            keyboard,
            pop
        },
        filters: {
        },
        computed: {
        },
        created() {
        },
        methods: {
            getPsw(password){
                this.txnPassword = password;
            },
            toNext(){
                console.log(this.txnPassword)
                //在此处发送请求或其他操作
                this.passwordAll=false
                this.txnPassword = "" //使用完后将txnPassword置为空，以免调用组件时始终有值
            },
            hidePsw(){
                this.passwordAll=false
            }
        }
    }
</script>
<style>
.show-pop{
    display: inline-block;
    padding: .3rem;
    background: #dadada;
    border-radius: .3rem;
    margin:1rem 1rem;
    font-size: .4rem;
}
</style>
