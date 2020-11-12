<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
      <p class="title is-4">
        {{ title }}
      </p>

      <div class="media">
        <div class="media-content">
          <p class="subtitle is-8">{{ content }}</p>
          <p class="subtitle is-8">{{ address }}</p>
        </div>
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
    name_in_search:{
      type:String,
      required: true,
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

    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: false
    }

  },
  components: {
    BaseCard,
  },
}
</script>

<style>

</style>