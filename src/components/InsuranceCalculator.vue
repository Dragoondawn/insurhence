<template>
  <nav class="navbar navbar-main">
    <div class="navbar-logo">
      <img src="../../src/logo.png" alt="Logo" />
    </div>
    <ul class="navbar-menu">
      <li><a href="#">Domov</a></li>
      <li><a href="#">Vozidlá</a></li>
      <li><a href="#">Majetok</a></li>
      <li><a href="#">O insurHence</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>
  <div class="heading-wrapper">
    <div class="container text-center">
      <h1>Agent s povolením porovnávať</h1>
      <h4>Porovnajte si ceny nezáväzne a ušetrite. Jednoducho a rýchlo s insurhence.sk.</h4>
    </div>
  </div>
  <div class="calc-wrapper p-5">
    <div class="container">
      <form id="insurhenceForm" ref="insurhenceForm">
        <div class="card">
          <div class="row">
            <div class="col-xl-7 p-5">
              <h2 class="text-center font-weight-bold fs-2 mb-3">Základné údaje</h2>
              <div class="form-row row">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="yearly">Celoročné poistenie</label>
                </div>
                <div class="col-3 col-sm-7">
                  <input type="checkbox" id="yearly-insurance" v-model="yearlyInsurance">
                </div>
              </div>

              <div class="form-row row">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="start-date">Dátum odchodu:</label>
                </div>
                <div class="col-3 col-sm-7">
                  <input type="date" id="start-date" v-model="startDate">
                </div>
              </div>
              <div class="form-row row" v-show="!yearlyInsurance">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="end-date">Dátum návratu:</label>
                </div>
                <div class="col-3 col-sm-7">
                  <input type="date" id="end-date" v-model="endDate">
                </div>
              </div>

              <div class="form-row row">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="coverage">Balík poistenia:</label>
                </div>
                <div class="col-3 col-sm-7">
                  <span class="me-4">
                    <input type="radio" id="coverage1" class="me-1" name="coverage" value="basic" v-model="coverage">
                    <label for="coverage1">Základný</label>
                  </span>

                  <span class="me-4">
                    <input type="radio" id="coverage2" class="me-1" name="coverage" value="extended" v-model="coverage">
                    <label for="coverage2">Rozšíreny</label>
                  </span>

                  <span class="me-4">
                    <input type="radio" id="coverage3" class="me-1" name="coverage" value="extra" v-model="coverage">
                    <label for="coverage3">Extra</label>
                  </span>
                </div>
              </div>

              <div class="form-row row mb-3">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="peopleCount">Počet poistencov:</label>
                </div>
                <div class="col-3 col-sm-7">
                  <span class="me-4">
                    <input type="radio" id="peopleCount1" class="me-1" name="peopleCount" value="peopleCount1" v-model="peopleCount">
                    <label for="peopleCount1">1</label>
                  </span>

                  <span class="me-4">
                    <input type="radio" id="peopleCount2" class="me-1" name="peopleCount" value="peopleCount2" v-model="peopleCount">
                    <label for="peopleCount2">2</label>
                  </span>

                  <span class="me-4">
                    <input type="radio" id="peopleCount3" class="me-1" name="peopleCount" value="peopleCount3" v-model="peopleCount">
                    <label for="peopleCount3">3</label>
                  </span>
                </div>
              </div>

              <div class="fs-5">Zvoľte si rozsah poistného kritia:</div>
              <div class="form-row row">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="cancelInsurance">Storno poistenia</label>
                </div>
                <div class="col-3 col-sm-7">
                  <input type="checkbox" id="cancelInsurance" value="Storno poistenia"  v-model="cancelInsurance">
                </div>
              </div>
              <div class="form-row row">
                <div class="col-9 col-sm-5 text-sm-end col-form-label">
                  <label for="sport">Športové aktivity</label>
                </div>
                <div class="col-3 col-sm-7">
                  <input type="checkbox" id="sport" value="Športové aktivity" v-model="sportAddInsurance">
                </div>
              </div>

              <div class="text-end">
                <button type="button" class="btn btn-primary me-2" id="insurSubmit" @click="calculate">Vypočítať</button>
                <button type="button" class="btn btn-dark" id="insurReset" @click="resetForm">Reset</button>
              </div>
            </div>
            <div class="col-xl-5 d-flex flex-column justify-content-evenly p-0">
              <div class="d-flex flex-column text-center fs-4 border-bottom p-3">
                <div class="fs-6">
                  <font-awesome-icon icon="fa-solid fa-flag" />
                  Spolu: 
                </div>
                <div class="fs-2">
                  {{ cost }} €
                </div>
              </div>
              <div v-show="!yearlyInsurance">
                <div class="d-flex flex-column text-center fs-4 border-bottom p-3">
                  <div class="fs-6">
                    <font-awesome-icon icon="fa-solid fa-calendar-week" />
                    Počet dni celkovo: 
                  </div>
                  <div class="fs-4">
                    {{ diffInDays }}
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column text-center border-bottom p-3">
                <div class="fs-6">
                  <font-awesome-icon icon="fa-solid fa-stopwatch-20" />
                  Tarifa poistného v balíku {{ coverage }}: 
                </div>
                <div class="fs-4">
                  {{ coverageAmount }} € / <span v-show="!yearlyInsurance">deň</span><span v-show="yearlyInsurance">rok</span>
                </div>
              </div>
              <div class="text-center p-3">
                <button class="btn" id="contactBtn">Zajednať</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverage: "",
      coverageTotal: 0,
      coverageAmount: 0,
      yearlyInsurance: "",
      startDate: "",
      endDate: "",
      peopleCount: "",
      cancelInsurance: "",
      sportAddInsurance: "",
      diffInDays: 0,
      cost: 0,
    };
  },
  methods: {
    calculate() {
      let baseCost = 0;
      console.log(baseCost);
      const oneDay = 1000 * 60 * 60 * 24; // One day in milliseconds

      const startDateString = this.startDate.toString();
      const startDateObject = new Date(startDateString);

      const endDateString = this.endDate.toString();
      const endDateObject = new Date(endDateString);

      const diffInTime = endDateObject.getTime() - startDateObject.getTime(); // Difference in time in milliseconds
      const diffInDays = Math.floor(diffInTime / oneDay);
      this.diffInDays = diffInDays; // Difference in days

      if(this.yearlyInsurance == true) {
        if (this.coverage == "basic") {
          this.coverageTotal = baseCost;
          this.coverageAmount = 39;
          baseCost += 39;
        } else if (this.coverage == "extended") {
          this.coverageTotal = baseCost;
          this.coverageAmount = 49;
          baseCost += 49;
        } else if (this.coverage == "extra") {
          this.coverageTotal = baseCost;
          this.coverageAmount = 59;
          baseCost += 59;
        }

        if (this.cancelInsurance == true) {
          baseCost *= 1.2;
        }

        if (this.sportAddInsurance == true) {
          baseCost *= 1.1;
        }
      } else {
        if (this.coverage == "basic") {
          baseCost += diffInDays * 1.2;
          this.coverageAmount = 1.2;
          this.coverageTotal = baseCost;
        } else if (this.coverage == "extended") {
          baseCost += diffInDays * 1.8;
          this.coverageAmount = 1.8;
          this.coverageTotal = baseCost;
        } else if (this.coverage == "extra") {
          baseCost += diffInDays * 2.4;
          this.coverageAmount = 2.4;
          this.coverageTotal = baseCost;
        }

        if (this.cancelInsurance == true) {
          baseCost *= 1.5;
        }

        if (this.sportAddInsurance == true) {
          baseCost *= 1.3;
        }
      }

      if (this.peopleCount === "peopleCount1") {
        baseCost *= 1;
      } else if (this.peopleCount === "peopleCount2") {
        baseCost *= 2;
      } else if (this.peopleCount === "peopleCount3") {
        baseCost *= 3;
      }

      this.cost = baseCost.toFixed(2);
    },
    resetForm() {
      this.cost = 0;
      this.$refs.insurhenceForm.reset();
    },
  },
};
</script>
