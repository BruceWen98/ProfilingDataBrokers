<template>
  <div class="section">
    <p class="title">People Search System with Various Data Brokers</p>

    <div class="field  has-addons">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Full Name, Case Sensitive, e.g. Donald Trump" v-model="nameToSearch" v-on:keyup.enter="search()">
      </p>
      <p class="control">
        <button class="button" v-on:click="search()">
          Search
        </button>
      </p>
    </div>
    <b-tabs v-model="activeTab">
        <b-tab-item v-for="r in searchResult" :key="r._id" :label=" 'From ' + r.from">
          <div class="columns is-multiline">
            <div class="section" v-if="r.results.length == 0">
              <p class="content"> No Records </p>
            </div>

            <div class="column is-one-third" v-for="(p, index) in r.results" :key="p._id">
              <CardGoogle v-if="r.from === 'google.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" :validated="p.itsme | convert_validated" :comment="p.comment" 
                :title="p.title" :link="p.link" :content="p.summary">
              </CardGoogle>
              <CardLinkedin v-else-if=" r.from === 'linkedin.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" :validated="p.itsme | convert_validated" :comment="p.comment" 
                :title="p.title" :link="p.link" :content="p.line1" :address="p.line2" :avatar="p.img">
              </CardLinkedin>
              <CardPeekyou v-else-if=" r.from === 'peekyou.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" :validated="p.itsme | convert_validated" :comment="p.comment" 
                :title="p.name" :content="p.line1" :address="p.line2">
              </CardPeekyou>
              <CardTwitter v-else-if=" r.from === 'twitter.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" :validated="p.itsme | convert_validated" :comment="p.comment" 
                :name="p.name" :screen_name="p.screen_name" :description="p.description" :address="p.location" :avatar="p.profile_image_url_https" :latest_twitter="p.latest_twitter" :latest_twitter_at="p.latest_twitter_at">
              </CardTwitter>
              <CardThatsthem v-else-if=" r.from === 'thatsthem.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" :validated="p.itsme | convert_validated" :comment="p.comment" 
                :name="p.name" :address="p.address" :age="p.age" :details="p.details">
              </CardThatsthem>
              <CardFindpeoplesearch v-else-if=" r.from === 'findpeoplesearch.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" :validated="p.itsme | convert_validated" :comment="p.comment" 
                :name="p.name" :details="p.details">
              </CardFindpeoplesearch>
              <CardFacebook v-else-if=" r.from === 'facebook.com'" :index="index.toString()" :from="r.from" :name_in_search="r.name" 
                :name="p.name" :avatar="p.avatar" :link="p.link">
              </CardFacebook>
            </div>
          </div>
        </b-tab-item>

    </b-tabs>
  </div>
</template>

<script>
import CardGoogle from '@/components/CardGoogle.vue';
import CardLinkedin from '@/components/CardLinkedin.vue';
import CardPeekyou from '@/components/CardPeekyou.vue';
import CardTwitter from '@/components/CardTwitter.vue';
import CardThatsthem from '@/components/CardThatsthem.vue';
import CardFindpeoplesearch from '@/components/CardFindpeoplesearch.vue';
import CardFacebook from '@/components/CardFacebook.vue';
import axios from 'axios';

export default {
  components: {
    CardGoogle,
    CardLinkedin,
    CardPeekyou,
    CardTwitter,
    CardThatsthem,
    CardFindpeoplesearch,
    CardFacebook
  },

  data() {
    return {
      nameToSearch: "",
      searchResult: [],
      activeTab: 0
    }
  },
  methods: {
    testing() {
      return this.nameToSearch
    },
    search() {
      // this.searchResult=[]
      console.log("searching...", this.nameToSearch)
      axios.get("/api/person/" + this.nameToSearch).then(res => {
        console.log(res.data)
        this.searchResult = res.data
      }).catch(err => {
        console.log(err)
      })
    }

  },
  filters: {
    convert_validated: function(value){
      if(typeof value === "undefined") { 
        return "not validated"
      }
      if(value) {
        return "validated as positive"
      }else{
        return "validated as negative"
      }
    },
  }
}
</script>

<style>

</style>