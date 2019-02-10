<template>
    <section>
        <h2>Basket</h2>
        <div class="otstup">
            <router-link :to="{name: 'shop'}">Go to shop</router-link>
        </div>
        <div v-for="b,i of basketMixin" class="elements"> 
            <div class=good>
                {{goods[basketMixin[i].id].name}}
                <br><img :src='srcGood(i)' height=50>
                <br><i>Price:  {{goods[basketMixin[i].id].price}} </i>
                <editCount
                :count="basketMixin[i].count"
                @removeThis="removeThis"
                @changeAmount="changeAmount"
                :i="i"
                ></editCount>
            </div>
        </div>
        <div class="otstup">
            <button @click="removeBasket()">Clear basket</button>
        </div>
        <div class="otstup">
            Basket amount: <b>{{basketSum()}}</b>$
        </div>

    </section>
</template>

<script>    
    import {mapGetters} from 'vuex';  
    import editCount from "./EditCount.vue";
    import { basketMixin } from '../mixins/basketMixin.js'

    export default {
        components:{editCount}, 
        mixins: [basketMixin],
        data () {
            return{       
            }
        },
        computed:{
            ...mapGetters('goods', {goods: 'getGoods'}),    
            ...mapGetters({serverDir:'getServerDir'}),
        },
        methods:{	
            // get image src
            srcGood(i){
                return this.serverDir + this.goods[this.basketMixin[i].id].src
            },
            // to remove this product from the basket
            removeThis(i){
                this.removeFromTheBasketMixin(i)
            },
            // to change an amount in the basket
            changeAmount(data){
                this.changeAmountFromTheBasketMixin(data)
            },
            // calculate ste sum of goods
            basketSum(){
                var sum=0;
                for (var i = 0; i < this.basketMixin.length; i++){
                    sum = sum + this.basketMixin[i].count * this.goods[this.basketMixin[i].id].price
                }
                return sum
            },
            // to clear basket
            removeBasket(){   
                this.clearBasketMixin()
                this.$router.push({name:"shop"})
            },
        },	
    }

</script>

<style scoped>
.elements{
    display: inline-block;
}
.good{
    border: 1px solid #fee5fe;
    padding: 10px;
    text-align:center;    
}
.addGood{
    margin-top:5px;
    width:100%;
}

</style>