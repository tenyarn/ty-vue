<script setup lang="ts">



const time = 'is ok'


</script>
<template>
<div>
    {{time}}
<hr>
  <slot name="top"></slot>
  <hr>
  <slot name="bottom"></slot>
</div>
</template>