<template>
  <div class="container">
  <div class="row">
    <div class="col-xl-12">
       <h1>RSS Feeds</h1> 
    </div> 
  </div>

  <div class="row">
    <div class="col-xl-12">
      <form class="form" @submit.prevent="Search">
      <div class="form-group">
          <input type="text" v-model="rssUrl" class="form-control" :disabled="inProgress" placeholder="Enter RSS URL" />
      </div>
      <div class="form-group">
          <input type="submit" class="btn btn-primary btn-block" :disabled="inProgress" value="Search" />
      </div>
      </form>
      <hr />
    </div>
  </div>
  
  <div class="row">
    <div class="col-xl-12">
       <h1>Articles</h1> 
         
        <div class="card" v-for="item in items" :key="item.id">
            <img class="card-img-top" :src="item.image" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.description}}}</p>
              <a :href="item.articleUrl" target="_blank" class="btn btn-primary">Go to article</a>
            </div>
            <hr/>
        </div>
    </div> 
  </div>
  
</div>
</template>

<script>
import api from '@/api'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'RssFeedViewer',
  data () {
    return {
      rssUrl: '',
      inProgress: false,
      items: []
    }
  },
  methods:{
      async Search() {
        this.inProgress = true;
        let data = await api.getRssFeed(this.rssUrl);
        this.parseFeed(data);
        this.inProgress = false;
      },
      parseFeed(data) {
        _(data).get("items")
        .map((item, index) => {
            this.items.push({
              id: index,
              image: item.thumbnail,
              title: item.title,
              description: item.description,
              articleUrl: item.link
            })
        })
      }
  }
}
</script>
