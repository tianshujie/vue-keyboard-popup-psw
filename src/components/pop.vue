<template>
    <div class="pop-container" >
        <div class="pop-nav">
            <div class="pop-title">验证交易密码</div>
            <span class="closePop" @click.self="close">×</span>
          <ul class="pop-list">
                <li v-for="item in passArr">{{item}}</li>
            </ul>
            <!--<router-link :to="{name: 'resetPasswordView'}">-->
                <div class="pop-bottom">忘记密码</div>
            <!--</router-link>-->
        </div>
    </div>
</template>
<script>
    export default {
        props: ["txnPassword"], //接收父组件传来的密码
        name: 'pop',
        data() {
            return {}
        },
        methods: {
            close() {
                this.$emit('close');
            }
        },
        computed: {
            passArr(){
                let txnPassword = this.txnPassword
                let arr = ["-", "-", "-", "-", "-", "-"]//显示位“-”
               // let arr = ["", "", "", "", "", ""]  //或显示位空
                txnPassword.split('').forEach((item, index) => {
                    if (!isNaN(item)) {
                        arr[index] = "●"
                    }
                })
                if (txnPassword.length == 6) {
                    this.$emit('setPwd', txnPassword)
                }
                console.log(arr)
                return arr
            }
        },
    };
</script>

<style lang="scss">
    .pop-container {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        font-size: .5rem;
        background-color: rgba(0, 0, 0, 0.1);
        .pop-nav {
            background: #fff;
            border-radius:99px;
            position: absolute;
            left: 50%;
            top: 40%;
            width: 80%;
            height: 4.373rem;
            margin-left: -40%;
            margin-top: -1.5rem;
            .pop-title {
                height:2rem;
                line-height: 2rem;
                text-align: center;
                font-weight: 600;
            }
            .closePop{
                position: absolute;
                font-size: .7rem;
               font-weight: lighter;
                color: #aaaaab;
               top: 0;
                right: 0.04rem;
                padding: .53rem;
            }
            .pop-list {
                position: absolute;
                top: 2rem;
                left: 6.5%;
                width: 87%;
                height: 1.12rem;
                z-index: 4;
                border: 1px solid #bbb;
                display: flex;
                li {
                    float: left;
                    width: 16.2%;
                    height: 1.12rem;
                    line-height:1.12rem;
                    text-align: center;
                    border-right: 1px solid #bbb;
                    flex-grow: 1;
                }
                li:nth-child(6) {
                    border: 0;
                }
            }
            .pop-bottom {
                position: absolute;
                bottom: 8%;
                left: 40%;
                color: red;
                font-size: .37rem;
                display: block;
            }
        }
    }
</style>