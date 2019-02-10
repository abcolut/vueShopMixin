<template>
    <section>
        <input  
        :value="count" 
        @input="updateCounter"
        size = "2" 
        type = "number" 
        min = "0" 
        class = "width100"
        >        
        </input> 
        <br>
        <button 
            @click = "removeProductFromBasket(i)" 
            class = "width100"
        >
            Remove product
        </button>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';  
    export default {
        props: {
            i:Number,
            count:Number
        },
        data () {
            return{}
        },
        methods:{   
            // to change the value of amount
            updateCounter(e){
                var count = e.target.value
                this.$emit("changeAmount",{i:this.i, count:count})
            },

            // remove this product
            removeProductFromBasket(i){
                this.$emit("removeThis",i)
            }
        },
    }
</script>

<style scoped>
button{
    margin:3px;
}
input{
    margin:3px;
}
.width100{
    width:100%
}

</style>