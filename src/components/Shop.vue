<template>
    <section>
        <h2>SHOP - MIXIN & SESSION</h2>
        <div>
            You select <b> <span> {{basketCount()}} </span> </b> goods
        </div>
        <div class="otstup">
            <router-link :to="{name: 'basket'}" >Go to basket</router-link>
        </div>
        <br>
        <div v-for="g, i of goods" class="elements"> 
            <div class="good">
                <b> {{g.name}} </b>
                <br>
                <img 
                :src = "srcGood(i)"
                height = "50"
                >
                <br><i>price: {{g.price}}</i>
                <br>
                <button 
                @click = "addGood(i)" 
                class = "addGood"
                >
                +
            </button>
        </div>
    </div>


</section>
</template>

<script>    
    import {mapGetters} from 'vuex';    
    import { basketMixin } from '../mixins/basketMixin.js'
    export default {
        mixins: [basketMixin],
        data () {
            return{        
            }
        },
        computed:{          
            ...mapGetters('goods', {goods:'getGoods'}),     
            ...mapGetters({serverDir:'getServerDir'}),
        },
        methods:{	

            // Get image code
            srcGood(i){
                return this.serverDir + this.goods[i].src
            },

            // add product to VUES store
            addGood(id){
                this.addToBasketMixin(id)
            },

            //Counting the quantity of goods
            basketCount(){
                var count = 0;
                for(var i = 0; i < this.basketMixin.length; i++){
                    count = count + this.basketMixin[i].count
                }
                return count
            },
        },	
    }

</script>

<style scoped>
.elements{
    display: inline-block;
}
.good{
    border: 1px solid #def5ae;
    margin: 10px;
    padding: 10px;
    text-align:center;    
}
.addGood{
    margin-top:5px;
    width:100%;
}

</style>