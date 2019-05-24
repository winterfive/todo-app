<template>
  <div class="home">
    <h1>Homepage</h1>
    <p class="red white--text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      veniam molestias numquam aliquam porro aut fugit nobis sit veritatis
      officia quos, animi ipsum! Ducimus nihil libero aperiam iure! Sed,
      asperiores.
    </p>
    <p class="pink darken-4 red--text text--lighten-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque
      perspiciatis aliquam voluptatem voluptates? Reiciendis commodi molestiae
      dolorum rem, animi modi reprehenderit, iusto quos distinctio odio nobis
      omnis quaerat velit.
    </p>
    <p class="cyan accent-4 cyan--text text--lighten-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim distinctio
      eaque veritatis asperiores, dolor aut officia quod? Hic perferendis omnis
      aliquam repudiandae illo. Reiciendis, cumque corporis! Excepturi similique
      blanditiis voluptas?
    </p>
    <p class="amber green--text text--darken-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere
      quisquam inventore adipisci dolore atque commodi consequatur quibusdam,
      quas suscipit veritatis, velit, esse aliquid iste quo voluptates numquam
      fugit non!
    </p>
    <h1 class="display-4">Massive</h1>
    <h1>h1 size</h1>
    <h4 class="diaply-1">Small</h4>
    <h4>h4 size</h4>
    <p class="headline">This is a headline.</p>
    <p class="display-4 font-weight-light font-italic green--text">a thing!</p>
    <p class="caption pink--text">I'm a caption.</p>
    <v-btn class="green white--text">click me</v-btn>
    <v-btn depressed color="pink">click me!</v-btn>
    <v-btn flat color="pink">click me!</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <h4>Email me!</h4>
    </v-btn>
    <v-btn class="blue"><v-icon left>language</v-icon>World</v-btn>
    <v-btn class="red">Shield<v-icon dark right>security</v-icon></v-btn>

    <div>
      <v-btn color="yellow lighten-3" small>
        <v-icon color="red darken-3" small left>email</v-icon>
        Email me
      </v-btn>
      <v-btn color="yellow lighten-3" large>
        Email me
        <v-icon color="red darken-3" large right>email</v-icon>
      </v-btn>
      <v-btn color="purple" dark fab small><v-icon>favorite</v-icon></v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>
