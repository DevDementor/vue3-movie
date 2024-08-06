<template>
  <RouterLink to="/" class="logo">
    <span>OMDbApi</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.logo {
  font-family: "East Sea Dokdo", sans-serif;
  font-size: 20px;
  color: $black;
  &:hover{
    color:$black;
  }
  span{
    color:$primary;
  }
}
</style>