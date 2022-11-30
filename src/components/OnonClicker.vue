<template>
  <div class="ononclicker">
    <h1>onon-clicker</h1>
    <img src="../assets/img/ononbag.gif" @click=onon()>
    <!--    <span>{{ sound }}</span>-->
    <!--    <audio id="on" hidden="hidden" src="../assets/music/on.mp3"></audio>-->
    <!--    <audio id="ssb" hidden="hidden" src=../assets/music/ssb.mp3></audio>-->
    <audio hidden="hidden" controls id="player">
      <source v-bind:src={sound}>
    </audio>
  </div>
</template>

<script>
import on from "../assets/media/on.mp3"
import ssb from "../assets/media/ssb.mp3"


export default {
  name: 'OnonClicker',
  data() {
    return {
      on: on,
      ssb: ssb,
      sound: ""
    };
  },
  methods: {
    onon() {
      if (Math.round(Math.random() * 100) <= 3) {
        this.sound = this.ssb;
      } else {
        this.sound = this.on;
      }
      let player = document.getElementById("player");
      player.setAttribute("src", this.sound);
      player.play();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ononclicker {
  width: 100%;
  padding: 30px 0;
}

img {
  width: 100%;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  padding: 0 10px;
}

a {
  color: #42b983;
}
</style>
