<template>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

.navbar.navbar-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #f8f8f8;
}

.navbar-logo img {
  height: 40px;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  column-gap: 15px;
}

.navbar-menu li {
  margin-left: 20px;
}

.navbar-menu li:first-child {
  margin-left: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a:hover {
  color: #19af81;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.heading-wrapper {
  background: url(./bg3.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  padding-top: 5rem;
}
.calc-wrapper {
  margin-top: -301px;
}
#insurhenceForm .card {
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  border: none!important;
  border-radius: .5rem!important;
}
#insurhenceForm #col-result.col-xl-5 {
  background: rgb(12,37,106);
  background: linear-gradient(0deg, rgba(12,37,106,1) 0%, rgba(53,160,240,1) 100%);
  border-top-right-radius: .5rem!important;
  border-bottom-right-radius: .5rem!important;
  gap: 0rem;
}

#insurhenceForm #col-result.col-xl-5 div,
#insurhenceForm #col-result.col-xl-5 p {
  color: white;
}

@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
      max-width: 1140px!important;
  }
}

.form-row.row {
  align-items: center;
}

.form-row.row .col-xl-6 {
  padding-right: 2rem;
}
.form-row.row .col-xl-6 label {
  color: #444e56;
}
.border-bottom {
  border-bottom: 1px solid lightgray;
}
input[type=date]:hover, input[type=checkbox]:hover, input[type=radio]:hover {
  cursor: pointer;
  border: 1px solid #3192e1;
}
input[type=date] {
  padding: .2rem .6rem;
  border-radius: .2rem;
  border: 1px solid #cacaca;
}

#contactBtn {
  width: 22rem;
  background-color: #02d18e;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
#insurSubmit {
  background-color: #3192e1;
}
#insurSubmit:hover {
  background-color: #103076;
}
@media (max-width: 768px) {
  .navbar.navbar-main {
    padding-bottom: 1rem;
    height: 80px;
  }
}
@media (max-width: 576px) {
  .calc-wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
