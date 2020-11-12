<template>
  <div class="card">
    <div class="card-content">
      <slot></slot>
      <div class="content">
        <span v-if="itsme" class="tag is-success">Yes, It's me</span>
        <span v-if="itsnotme" class="tag is-danger">No, It's not me</span>
      </div>
      <br/>
      <div v-if="hasComment" class="field">
        <div class="control">
          <textarea class="textarea" placeholder="comment on the result" v-model="commentUpdated" :disabled="!edittingComment">
          </textarea>
          <div v-if="edittingComment && !commentSubmited" class="button" v-on:click="submitComment()">submit</div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" v-on:click="me()">Yes, it is me</a>
      <a class="card-footer-item" v-on:click="notme()">No, it isn't me</a>
      <a v-if="!hasComment" class="card-footer-item" v-on:click="addComment()">Add Comment</a>
      <a v-if="hasComment && !edittingComment " class="card-footer-item" v-on:click="editComment()">Edit Comment</a>
      <a v-if="hasComment" class="card-footer-item" v-on:click="removeComment()">Remove Comment</a>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      itsme: this.validate_itsme(),
      itsnotme: this.validate_itsnotme(),
      hasComment: this.check_comment(),
      edittingComment: false,
      commentUpdated: this.comment,
      commentSubmited: false,
    }
  },

  props:{
    index: {
      type: String,
      required: true,
    },
    nameInSearch: {
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
  },

  methods: {
    validate_itsme(){
      if(this.$props.validated === "validated as positive") {
        return true
      }else{
        return false
      }
    },
    validate_itsnotme(){
      if(this.$props.validated === "validated as negative") {
        return true
      }else{
        return false
      }
    },
    check_comment(){
      //no comment at all
      if(typeof this.$props.comment==="undefined"){
        return false
      }

      //empty comment, consider no comment also
      if (this.$props.comment===""){
        return false
      }
      return true
    },

    me(){
      this.itsme = true
      this.itsnotme = false
      
      //could not use this.$props.name!!!
      axios.post("/api/person/" + this.$props.nameInSearch + "/itsme", {
        from: this.$props.from,
        index: this.$props.index,
        itsme: true,
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })

    },
    notme(){
      this.itsnotme = true
      this.itsme = false
      axios.post("/api/person/" + this.$props.nameInSearch + "/itsme", {
        from: this.$props.from,
        index: this.$props.index,
        itsme: false,
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })

    },

    editComment(){
      this.edittingComment = true
      this.commentSubmited = false
      this.hasComment = true
    },
    addComment(){
      this.edittingComment = true
      this.hasComment = true
      this.commentSubmited = false
    },

    postComment(){
      axios.post("/api/person/" + this.$props.nameInSearch + "/comment", {
        from: this.$props.from,
        index: this.$props.index,
        comment: this.commentUpdated,
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    removeComment(){
      this.hasComment = false
      this.commentUpdated = ""
      this.postComment()
    },

    submitComment(){
      this.postComment()
      this.commentSubmited=true
    },



  }
}
</script>

<style>

</style>