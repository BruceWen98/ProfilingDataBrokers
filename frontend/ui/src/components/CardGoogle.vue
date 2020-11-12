<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
    <p class="title is-4">
      {{ title }}
    </p>
    <p class="subtitle is-link is-6">
      <a :href="link">{{ link }}</a>
    </p>
    <div class="content">
      {{ content }}
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
   },

  components: {
    BaseCard,
  },

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style>

</style>