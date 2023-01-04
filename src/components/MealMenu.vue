<template>
<div>
    <b-card-group deck >
      <FoodItem v-for="meal in Meals" :key="meal.Item_id" :item="meal" />
    <!-- <FoodItem :item="Meals[0]"/>
    <FoodItem :item="Meals[1]" />
    <FoodItem :item="Meals[2]" />
    <FoodItem :item="Meals[3]" />
    <FoodItem :item="Meals[4]" />
    <FoodItem :item="Meals[5]" />
    <FoodItem :item="Meals[6]" />
    <FoodItem :item="Meals[7]" />
    <FoodItem :item="Meals[8]" /> -->

</b-card-group>

</div>
</template>

<script>
import FoodItem from "./FoodItem.vue"
import Meals from "../../public/data/data"
export default {
  data () {
    return {
        Meals: Meals
    }
  },
 
    name: 'MealMenu',

   components : {
    FoodItem
   }
};
</script>

<style scoped>

</style>