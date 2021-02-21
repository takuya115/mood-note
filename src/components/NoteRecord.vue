<template>
  <div>
    <v-card v-for="record in records" :key="record.date" class="mb-3">
      <v-card-text>
        <v-row>
          <v-col cols="auto" sm="12" md="3" class="text-center">
            <!-- 日付 -->
            <div>{{ record.date }}</div>
            <!-- ムードアイコン -->
            <div>
              <v-icon v-if="record.mood === 'excited'">mdi-emoticon-excited</v-icon>
              <v-icon v-if="record.mood === 'happy'">mdi-emoticon-happy</v-icon>
              <v-icon v-if="record.mood === 'angry'">mdi-emoticon-angry</v-icon>
              <v-icon v-if="record.mood === 'sad'">mdi-emoticon-sad</v-icon>
            </div>
          </v-col>
          <v-col cols="auto" sm="12" md="9">
            <div>{{ record.text }}</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
  
</template>

<script>
export default {
  name: "NoneInput",
  data() {
    return {
      records: [
        { date: '2021/2/21 11:34:18', mood: 'happy', text: 'ハッピー'},
        { date: '2021/2/20 11:34:18', mood: 'excited', text: 'いいかんじ'},
        { date: '2021/2/19 11:34:18', mood: 'angry', text: 'アカーーーン'},
        { date: '2021/2/18 11:34:18', mood: 'sad', text: 'ぴえん'},
      ]
    };
  },
};
</script>

<style scoped>
  input[name="mood"]:checked + label * {
    background: orange;
  }
</style>