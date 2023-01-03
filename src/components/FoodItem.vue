<template>
  <div>
    <b-card class="card-style">
      <b-button v-b-modal.modal-1>

        <b-card-img top="true" alt="PICTURE of meal" :src="item.itemImage" height="250px" width="250px" />
      </b-button>
      <b-card title={{item.itemName}}>
        <hr />

        <b-card-text>
          <b-row>
            <b-col md="6">
            </b-col>
            <b-col md="6">
              <h6>Quantity</h6>

            </b-col>
          </b-row>
        </b-card-text>
        <b-row>
          <b-col md="6">Price :{{ item.itemPrice }} /-RS</b-col>
          <b-col md="6">
            <Button onClick={addToCartHandler} className="bg-warning text-white">
              Add to cart
            </Button>
          </b-col>
        </b-row>

      </b-card>
    </b-card>

    <b-modal id="modal-1">
      <b-modal-header closeButton>
        <b-modal-title>{{ item.itemName }}</b-modal-title>
      </b-modal-header>
      <b-container>
        <div>
          <b-card-img top="true" :src="item.itemImage" height="250px" />

        </div>
        <div>
          <h3>{{ item.itemName }}</h3>
          <h6>{{ item.itemDescription }}</h6>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    item :{
    itemName: String,
    itemImage: String,
    itemDescription: String,
    itemPrice: Number}
  },

  name: 'FoodItem',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped>
.card-style {
  display: inline-block;
  box-sizing: content-box;

}

.card-img-top {
  width: auto;
  height: 15vw;
  object-fit: cover;
}
</style>