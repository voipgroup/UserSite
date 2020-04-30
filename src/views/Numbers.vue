<template>
  <div>
    <div class="grayOne">
      <v-container class="d-flex align-center">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <TitleSubAppBar title="Mis números"></TitleSubAppBar>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="search" @input="searchItems" hide-details dense outlined label="Buscar" prepend-inner-icon="search"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-data-table :headers="headers" :items="myNumbers" sort-by="numbers" class="elevation-1">
        <template v-slot:item.numbers="{ item }">
          <v-chip
            label
            outlined
            small
            x-small
            :color="getColor(item.company)"
            dark
          >{{ item.numbers }}</v-chip>
        </template>

        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field dense outlined v-model="editedItem.name" label="Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field dense outlined v-model="editedItem.numbers" label="Numbers"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field dense outlined v-model="editedItem.company" label="Company"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
          <!-- <v-icon small @click="deleteItem(item)">delete</v-icon> -->
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Numbers", value: "numbers" },
      { text: "Company", value: "company" },
      { text: "Minutes min.", value: "minutes" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    myNumbers: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      numbers: 0,
      minutes: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      numbers: 0,
      minutes: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.myNumbers = [
        {
          name: "Frozen Yogurt",
          numbers: 351240095,
          minutes: 69,
          company: "personal"
        },
        {
          name: "Ice cream sandwich",
          numbers: 351240095,
          minutes: 99,
          company: "claro"
        },
        {
          name: "Eclair",
          numbers: 351240095,
          minutes: 169,
          company: "personal"
        },
        {
          name: "Cupcake",
          numbers: 351240095,
          minutes: 30,
          company: "tuenti"
        },
        {
          name: "Gingerbread",
          numbers: 351240095,
          minutes: 16.0,
          company: "tuenti"
        },
        {
          name: "Jelly bean",
          numbers: 351240095,
          minutes: 0.0,
          company: "personal"
        },
        {
          name: "Lollipop",
          numbers: 351240095,
          minutes: 0.2,
          company: "personal"
        },
        {
          name: "Honeycomb",
          numbers: 351240095,
          minutes: 3.2,
          company: "personal"
        },
        {
          name: "Donut",
          numbers: 351240095,
          minutes: 25.0,
          company: "claro"
        },
        {
          name: "KitKat",
          numbers: 351240095,
          minutes: 26.0,
          company: "personal"
        }
      ];
       this.myNumbersCopy = [
        {
          name: "Frozen Yogurt",
          numbers: 351240095,
          minutes: 69,
          company: "personal"
        },
        {
          name: "Ice cream sandwich",
          numbers: 351240095,
          minutes: 99,
          company: "claro"
        },
        {
          name: "Eclair",
          numbers: 351240095,
          minutes: 169,
          company: "personal"
        },
        {
          name: "Cupcake",
          numbers: 351240095,
          minutes: 30,
          company: "tuenti"
        },
        {
          name: "Gingerbread",
          numbers: 351240095,
          minutes: 16.0,
          company: "tuenti"
        },
        {
          name: "Jelly bean",
          numbers: 351240095,
          minutes: 0.0,
          company: "personal"
        },
        {
          name: "Lollipop",
          numbers: 351240095,
          minutes: 0.2,
          company: "personal"
        },
        {
          name: "Honeycomb",
          numbers: 351240095,
          minutes: 3.2,
          company: "personal"
        },
        {
          name: "Donut",
          numbers: 351240095,
          minutes: 25.0,
          company: "claro"
        },
        {
          name: "KitKat",
          numbers: 351240095,
          minutes: 26.0,
          company: "personal"
        }
      ];
    },

    searchItems(value) {
      const list = this.myNumbersCopy.filter((item) => {
         if(item.name.toUpperCase().includes(value.toUpperCase()) || `${item.numbers}`.includes(value) || `${item.minutes}`.includes(value) || item.company.toUpperCase().includes(value.toUpperCase())) return true
         return false
      })
      this.myNumbers = list
    },

    editItem(item) {
      this.editedIndex = this.myNumbers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.myNumbers.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.myNumbers.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.myNumbers[this.editedIndex], this.editedItem);
      } else {
        this.myNumbers.push(this.editedItem);
      }
      this.close();
    },

    getColor(company) {
      if (company === "personal") return "primary";
      else if (company === "claro") return "accent";
      else if (company === "tuenti") return "info";
      else return "success";
    }
  }
};
</script>
