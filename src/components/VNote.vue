<template>
  <div>
    <NoteInputForm class="mb-5" />
    <NoteRecord />
  </div>
</template>

<script>
import NoteInputForm from './NoteInputForm';
import NoteRecord from './NoteRecord';

export default {
  name: 'Note',
  components: { NoteInputForm, NoteRecord }
  
}
</script>

<style>

</style>