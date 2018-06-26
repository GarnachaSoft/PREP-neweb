<template>

</template>

<style>
    @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css";
    @import url('https://fonts.googleapis.com/css?family=Kanit');
    header{
        padding: 10px 0;
    }
    .site-title{
        font-family: Kanit;
        font-size: 32px;
    }
    nav {
        text-align: right;
    }
    nav ul li{
        display: inline-block
    }
    nav ul li a{
        display: block;
        padding: 10px;
    }
    .mt-100{
        margin-top: 50px
    }
    .what-work{
        background: #eff2f5;
    }
    .mt-neg{
        margin-top: -50px;
    }
    .section-content{
        padding: 60px 0;
    }
    .section-content h2{
        text-align: center;
        margin-bottom: 60px;
    }
    .p-20{
        padding: 20px;
    }
    @media (max-width: 780px) {
        .site-title{
            text-align: center
        }
        .mt-100{
            margin-top: 0;
        }
        nav{
            display: none;
        }
    }
</style>

<script>
    export default{

    };
</script>
