<template>
    <!--<transition name="fade">-->
    <ul class="keyboard">
        <li class="" v-for="item in text" @touchend="numClick(item)">{{item}}</li>
    </ul>
</template>
<script type="text/ecmascript-6">
    export default {
        props: ["lowerLeftBtn"], //根据需要可在父组件中指定左下按钮的显示内容，为空，或为“.”
        data() {
            return {
                text: ["1", "2", "3", "4", "5", "6", "7", "8", "9", this.lowerLeftBtn, "0", "del"],
                keyboard: "",
            }
        },
        methods: {
            numClick(key){
                let kbt = this.keyboard;
                switch (key) {
                    case ("del"):
                        this.keyboard = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt;
                        break;
                    default:
                        this.keyboard += key.toString();
                        break;
                }
                this.$emit("numClick", this.keyboard);
            }
        },
    }
</script>
<style lang="scss">
    .keyboard {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        z-index: 3;
        li {
            display: inline-block;
            text-align: center;
            flex-grow: 1;
            width: 32%;
            border: 1px solid #ccc;
            background: #fff;
            font-size: .7rem;
            padding: .18rem 0;
            justify-content: space-between;
        }
        li:active {
            background: #e0e1e5;
        }
        li:nth-child(10), li:nth-child(12) {
            background: #e0e1e5;
        }
        li:nth-child(10):active, li:nth-child(12):active {
            background: #fff;
        }
        li:nth-child(1), li:nth-child(2), li:nth-child(3){
            border-top: none;
            border-bottom: none;
        }
        li:nth-child(7), li:nth-child(8), li:nth-child(9){
            border-top: none;
            border-bottom: none;
        }
        li:nth-child(1), li:nth-child(4), li:nth-child(7), li:nth-child(10) {
            border-left: none;
            border-right: none;
        }
        li:nth-child(3), li:nth-child(6), li:nth-child(9), li:nth-child(12) {
            border-right: none;
            border-left: none;
        }
        li:nth-child(12) {
            color: transparent;
            background: url("../assets/img/del.png") no-repeat;
            background-size: 100% 100%;
        }
        li:nth-child(12):active{
            background: url("../assets/img/del3.png") no-repeat;
            background-size: 100% 100%;
        }


    }

    li.bg_white {
        background: #fff;
    }

    li.bg_gray {
        background: #d8d8d8;
    }
</style>