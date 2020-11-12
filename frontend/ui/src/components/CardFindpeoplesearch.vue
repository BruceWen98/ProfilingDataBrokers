<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
    <p class="title is-size-4">
      {{ name }}
    </p>
    <p class="subtitle is-size-6">
      {{ address }}
    </p>
    <br/>
    <div class="container" v-for="(val_array, key) in details" :key="key">
      <p class="has-text-weight-bold">{{ key }} </p>
      <ul class="left-margined">
        <li v-for="val in val_array.filter((v, i, a) => a.indexOf(v) === i)" :key=" key+ '_' + val"> 
          <span >{{ val }}</span>
        </li>
      </ul>
      <br/>
      </div>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  props: {
    index: {
      type: String,
      required: true,
    },
    name_in_search: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true,
    },
    validated: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: false,
    },
    details: {
      type: Object,
      required: false
    },
  },
  components: {
    BaseCard,
  },
  data(){
    return {

    }
  }
}
</script>

<style>
  .left-margined {
    margin-left: 2em;
  }
</style>