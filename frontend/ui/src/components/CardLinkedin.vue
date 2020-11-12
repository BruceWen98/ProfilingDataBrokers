<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
    <p class="title is-4">
      {{ title }}
    </p>
    <p class="subtitle is-6">
      <a :href=" 'https://linkedin.com/' + link">Linkedin profile</a>
    </p>

    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="avatar" alt=""/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-6">{{ content }}</p>
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
    name_in_search: {
      type: String,
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
    link: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
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