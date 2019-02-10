export const basketMixin = {
  data() {
    return {
      basketMixin:[]
    }
  },
  methods: {
    //add new product. when it is the same product then summed
    addToBasketMixin(id){
      this.basketMixin.unshift({id:id,count:1})
      var flag = false;
      for (var i = 1; i < this.basketMixin.length; i++){
        if (this.basketMixin[i].id == this.basketMixin[0].id){
          flag=true    
          break                    
        }
      }
      if (flag == true){
        this.basketMixin[0].count = this.basketMixin[0].count + this.basketMixin[i].count
        this.basketMixin.splice(i,1)
      }
      this.saveSessionMixin()
    },
    //to change the amount of product
    changeAmountFromTheBasketMixin(data){
      var i = data.i
      var count = data.count
      this.basketMixin[i].count = +count      
      this.saveSessionMixin()
    },
    // remove this product from basket
    removeFromTheBasketMixin(i){
      this.basketMixin.splice(i, 1)    
      this.saveSessionMixin()
    },
    // to empty the basket
    clearBasketMixin(){
      this.basketMixin = []       
      this.saveSessionMixin()
    },
    // save data to session
    saveSessionMixin(){
      var d = JSON.stringify(this.basketMixin)
      this.$session.set("basket", d)
    }
  },
  created() {
    // restore session data
    if (!this.$session.exists()) {
      this.$session.start()
      this.basketMixin = []
      return
    }
    else {
      var  basket = this.$session.get("basket")
      this.basketMixin = JSON.parse(basket)
    }
  },
}

