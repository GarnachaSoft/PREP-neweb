<template>
    <div class="wrap">
        <section class="first section-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 order-md-last">
                        <img class="img-fluid mt-neg" src="../assets/ciudad2.svg" alt="">
                    </div>
                    <div class="col-md-6">
                        <h4 class="mt-100">Un PREP hecho por y para ciudadanos</h4>
                        <p class="mt-4">El PREP ciudadano es un sistema autónomo, hecho para demostrar que el elctorado es capaz de participar de manera más activa en las decisione spolíticas de México</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="what-work section-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>¿Como funciona?</h2>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <carousel
                                :per-page-custom="[[320, 1], [1199, 4]]"
                                paginationActiveColor="#0CCC8A"
                                paginationColor="#fff">
                                <slide>
                                    <img class="img-fluid" src="../assets/cel.svg" alt="">
                                </slide>
                                <slide>
                                    <img class="img-fluid" src="../assets/cel.svg" alt="">
                                </slide>
                                <slide>
                                    <img class="img-fluid" src="../assets/cel.svg" alt="">
                                </slide>
                                <slide>
                                    <img class="img-fluid" src="../assets/cel.svg" alt="">
                                </slide>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="about-us section-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>¿Quienes Somos?</h2>
                    </div>
                    <div class="col-md-12">
                        <carousel
                            :per-page-custom="[[320, 1], [1199, 4]]"
                            paginationActiveColor="#0CCC8A"
                            paginationColor="#fff">
                            <slide>
                                <img class="img-fluid p-20" src="../assets/account-man.svg" alt="">
                            </slide>
                            <slide>
                                <img class="img-fluid p-20" src="../assets/account-man.svg" alt="">
                            </slide>
                            <slide>
                                <img class="img-fluid p-20" src="../assets/account-man.svg" alt="">
                            </slide>
                            <slide>
                                <img class="img-fluid p-20" src="../assets/account-man.svg" alt="">
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueCarousel from 'vue-carousel';

    Vue.use (VueCarousel)

    export default {
    };
</script>
