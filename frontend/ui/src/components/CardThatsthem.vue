<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
    <p class="title is-size-4">
      {{ name }}
    </p>
    <p class="subtitle is-size-6">
      {{ address }}
    </p>

    <article class="panel is-primary">
      <p class="panel-heading">
        Details
      </p>
      <div class="panel-block" v-if="age">
        <span is-size-6>Age: {{ age }}</span>
      </div>
      <div class="panel-block" v-for="(val, key) in details" :key="key">
        <span is-size-6>{{ key }}: {{ val}}</span>
      </div>
    </article>
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
    name: {
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

    address: {
      type: String,
      required: false
    },
    age: {
      type: String,
      required: false
    },
    details: {
      type: Object,
      required: false
    },

  },
  components: {
    BaseCard,
  },
}
</script>

<style>

</style>