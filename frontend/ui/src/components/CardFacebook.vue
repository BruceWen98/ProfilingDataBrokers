<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="is-rounded" :src="avatar" alt=""/>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <a :href=" link ">{{ name }}</a>
          </p>
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
    avatar: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    }
  },
   components: {
    BaseCard,
  },
}
</script>

<style>

</style>