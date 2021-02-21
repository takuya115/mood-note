<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="auto" sm="12" md="3">
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              :return-value.sync="inputValue.date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="inputValue.date"
                  label="日付"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="inputValue.date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(inputValue.date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="auto" sm="12" md="9">
            <v-textarea
              name="input-text"
              label="今日の気分は？"
              no-resize
              v-model="inputValue.text"
            ></v-textarea>
          </v-col>
        </v-row>
        <div class="d-flex justify-space-between">
          <div>
            <input v-model="inputValue.mood" type="radio" value="excited" name="mood" id="excited" style="display:none;" />
            <label for="excited"><v-icon>mdi-emoticon-excited</v-icon></label>
          </div>
          <div>
            <input v-model="inputValue.mood" type="radio" value="happy" name="mood" id="happy" style="display:none;" />
            <label for="happy"><v-icon>mdi-emoticon-happy</v-icon></label>
          </div>
          <div>
            <input v-model="inputValue.mood" type="radio" value="angry" name="mood" id="angry" style="display:none;" />
            <label for="angry"><v-icon>mdi-emoticon-angry</v-icon></label>
          </div>
          <div>
            <input v-model="inputValue.mood" type="radio" value="sad" name="mood" id="sad" style="display:none;" />
            <label for="sad"><v-icon>mdi-emoticon-sad</v-icon></label>
          </div>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "NoneInput",
  data() {
    return {
      inputValue: {
        date: new Date().toISOString().substr(0, 10),
        text: "",
        mood: "",
      },
    };
  },
};
</script>

<style scoped>
  input[name="mood"]:checked + label * {
    background: orange;
  }
</style>