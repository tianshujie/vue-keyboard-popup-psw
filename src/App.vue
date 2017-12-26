<template>
    <div id="app">
            <router-view class="view"></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>

<style lang="scss">
    $bg:#fff;
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -weokit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;

       /* /*初始状态*/
        .slide-left-enter,
        .slide-left-leave-to {
            transform: translate(-100%, 0);
            opacity: 0;
        }
        /*显示时的样子*/
        .slide-left-enter-active {
            transition: all .8s ease;
        }
        /*初始状态*/
        .slide-right-enter,
        .slide-right-leave-to {
            transform: translate(100%, 0);
            opacity: 0;
        }
        /*显示时的样子*/
        .slide-right-enter-active {
            transition: all .8s ease;
        }
    }

    html,
    body,
    div,
    span,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    abbr,
    address,
    big,
    em,
    img,
    q,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    i,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    form,
    fieldset,
    label,
    table,
    caption,
    tbody,
    thead,
    tfoot,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    figure,
    figcaption,
    header,
    footer,
    hgroup,
    menu,
    nav,
    output,
    section,
    time,
    mark,
    audio,
    video,
    input,
    select,
    button {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: '微软雅黑', Arial;
    }

    /*去除默认样式*/
    html {
        background: #fff;
    }

    ul,
    ol,
    li {
        list-style: none;
    }

    /*表格边框合并，边框距零*/

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /*继承父元素的字体系列样式*/

    input,
    select,
    textarea,
    button {
        font-family: inherit;
    }

    /*清除浮动*/

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .cf {
        zoom: 1;
        clear: both;
    }

    .cf:after {
        content: "";
        display: table;
        clear: both;
        overflow: hidden;
    }

    /*a链接*/

    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        text-decoration: none;
    }

    /*去除点击高亮效果*/

    a,
    button,
    input,
    select,
    img,
    label,
    div,
    span {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        outline: medium none;
    }

    input::-moz-focus-inner {
        border: none;
        padding: 0;
    }

    select,
    input {
        vertical-align: initial;
        line-height: normal;
    }

    /*去掉苹果的默认UIa来渲染按钮*/

    input[type="submit"],
    input[type="reset"],
    input[type="button"],
    button,
    select {
        -webkit-appearance: none;
    }

    /*placeholder文本颜色*/

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #a3a7b0;
        font-size: .3rem;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
        color: #a3a7b0;
        font-size: .3rem;
    }

    /*html5标签*/

    header,
    footer,
    section,
    article,
    aside,
    nav,
    figure {
        display: block;
    }

    /*长英文字母 数字 换行*/

    p {
        word-break: break-all;
        word-wrap: break-word;
    }

    /*去除默认样式*/

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong,
    i,
    em,
    address,
    caption,
    cite,
    code,
    dfn,
    th,
    var {
        font-weight: normal;
        font-style: normal;
    }

    fieldset,
    img {
        border: none;
        display: block;
    }

    /*去除长按a链接弹框*/

    html,
    body {
        -webkit-touch-callout: none;
        width: 100%;
        height: 100%;
        min-height: 1rem;
        word-break : normal;
        font-size: .32rem;
    }

    .ui-loader-default {
        display: none
    }
    .ui-mobile-viewport {
        border: none;
    }

    .ui-page {
        padding: 0;
        margin: 0;
        outline: 0
    }

    .t_back {
        display: inline-block;
        position: fixed;
        bottom: 1.3rem;
        left: .5rem;
        z-index: 2;
    }

    .t_back img {
        width: .9rem;
        height: .9rem;
        border-radius: 50%;
    }
    .public_bottom {
        position: relative;
    }

    .public_bottom:after {
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        bottom: 0;
        height: 1px;
        background-color: #d2d2d2;
        -webkit-transform: scale(1, .5);
        transform: scale(1, .5);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
    }

    .public_top {
        position: relative;
    }

    .public_top:after {
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        top: 0;
        height: 1px;
        background-color: #bbb;
        -webkit-transform: scale(1, .5);
        transform: scale(1, .5);
        -webkit-transform-origin: center top;
        transform-origin: center top;
    }
    .public_topbottom {
        position: relative;
    }

    .public_topbottom:before {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        border: 1px solid #d2d2d2;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5, 0.5);
        -ms-transform: scale(0.5, 0.5);
        -o-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-right: none;
        border-left: none;
    }

    .public_border {
        position: relative;
    }

    .public_border:before {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        border: 1px solid #d2d2d2;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5, 0.5);
        -ms-transform: scale(0.5, 0.5);
        -o-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .public_border1 {
        position: relative;
    }

    .public_border1:before {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        border: 1px solid #d2d2d2;
        border-radius: 10px;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5, 0.5);
        -ms-transform: scale(0.5, 0.5);
        -o-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>