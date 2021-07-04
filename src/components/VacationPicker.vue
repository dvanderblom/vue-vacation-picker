<template>
  <div
    style="border: 2px solid rgb(212, 190, 156); background-color: rgb(212, 190, 156)
    width: 1000px; height: 650px; margin-top: 55px"
    class="main-container p-3 rounded"
  >
    <div class="row">
      <div class="col-md-6">
        <h1>{{ header }}</h1>
        <div class="countries">
          <ul class="list-group">
            <li
              style="cursor: pointer; user-select: none; margin-bottom: 23px"
              class="list-group-item rounded"
              v-for="(country, index) in countryData.countries"
              :key="country.id"
              @click="selectCountry(index)"
            >
              <span :id="country.id" :title="country.details"
                >{{ country.id }} - {{ country.name }}</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <h2 style="margin-top: 56px"></h2>
        <ul class="list-group">
          <li class="list-group-item">{{ selectedCountry.name }}</li>
          <li class="list-group-item">
            Capital: {{ selectedCountry.capital }}
          </li>
          <li class="list-group-item">{{ selectedCountry.details }}</li>
          <li class="list-group-item">
            Estimated vacation cost: (1 week, 1 person) €{{
              selectedCountry.cost
            }}
          </li>
          <li class="list-group-item">
            <img
              style="max-height: 325px; width: 600px; height: 400px"
              class="img-fluid rounded"
              :src="getImgUrl(selectedCountry.img)"
              :alt="selectedCountry.img"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import countryData from "../data/countryData";
import mixins from "../mixins/mixins";

export default {
  name: "VacationPicker",
  mixins: [mixins],
  data() {
    return {
      countryData,
      header: "Vue Vacation Picker",
      selectedCountryIndex: 0,
      newCountry: "",
      newCountries: [],
      selectedCost: 1000,
      costs: [1000, 2000, 3000, 4000, 5000, 6000],
      filteredCountries: [],
    };
  },
  methods: {
    selectCountry(index) {
      this.selectedCountryIndex = index;
    },
  },
  computed: {
    selectedCountry() {
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },
  },
};
</script>




