<template>
  <BaseCard :index="index.toString()+''" :nameInSearch="name_in_search" :from="from" :validated="validated" :comment="comment">
    <p class="title is-4">
      <a :href=" 'https://twitter.com/'+ screen_name">@{{ screen_name }}</a>
    </p>
    <p class="subtitle is-6">
      {{ description }}
    </p>
    <p class="subtitle is-6">
      {{ address }}
    </p>

    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="avatar" alt=""/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-6">{{ latest_twitter }}</p>
        <p class="subtitle is-6">{{ latest_twitter_at }}</p>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  props: {
    index: {
      type: String, //could not choose as Number? or compile error?
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

    screen_name: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
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
    },
    latest_twitter: {
      type: String,
      required: false
    },
    latest_twitter_at: {
      type: String,
      required: false,
    }

  },
  components: {
    BaseCard,
  },
}
</script>

<style>

</style>