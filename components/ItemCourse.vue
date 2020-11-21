<template>
    <div class="w-full md:w-1/4 px-4 mb-4">
        <div class="item relative">
            <figure class="item-image">
                <IconPlay/>
                <client-only>
                  <img :src="item.thumbnail" :alt="item.name" class="mb-2"/>
                </client-only>
            </figure>
            <div class="item-meta">
                <h4 class="text-lg text-gray-900 item-title">{{item.name.toUpperCase()}}</h4>
                <h5 class="text-sm text-gray-600">{{item.level}}</h5>
            </div>
            <nuxt-link :to="'/skill/'+ item.id" class="link-wrapped"></nuxt-link>
        </div>
    </div>
</template>

<script>
import IconPlay from '~/assets/icon-play.svg?inline';
import imagePlaceholder from 'vuejs-image-placeholder'
export default {
  data(){
    return {
      borderColour: '#fff',
      backgroundColour: '#dcdee8',
      fontFamily: 'Poppins, sans-serif'
    }
  },
  components: {
    IconPlay,
    imagePlaceholder,
  },
  props : {
    item : {
      type : Object
    }
  }
}
</script>

<style>
/*courses part */
.item-title {
  min-height: 25px;
}
.item figure.item-image {
  position: relative;
  perspective: 10000px;
}
.item figure.item-image:before {
  content: "";
  @apply absolute inset-0 bg-indigo-900 opacity-0 transition-all duration-200;
}
.item:hover figure.item-image:before {
  @apply opacity-75;
}
.item figure.item-image svg.icon {
  content: "";
  position: absolute;
  width: 46px;
  height: 46px;
  top: 50%;
  left: 50%;
  transform-origin: bottom;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) rotateX(-45deg);
  @apply transition-all duration-300;
}
.item figure.item-image svg.icon circle {
  @apply fill-orange-500;
}
.item:hover figure.item-image svg.icon {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) rotateX(0deg);
}
.link-wrapped:before {
  @apply cursor-pointer z-10 inset-0 absolute;
  content: "";
}
</style>