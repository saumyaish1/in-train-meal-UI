<template>
<div>
    <b-card-group deck>
<FoodItem :item="Meals[0]" />
<FoodItem :item="Meals[1]" />
<FoodItem :item="Meals[0]" />
<FoodItem :item="Meals[1]" />

</b-card-group>

</div>
</template>

<script>
import FoodItem from "./FoodItem.vue"
import Meals from "../../public/data/data"
export default {
 
    name: 'MealMenu',

   components : {
    FoodItem
   }
};
</script>

<style scoped>

</style>