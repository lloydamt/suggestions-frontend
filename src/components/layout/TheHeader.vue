<template>
  <header>
    <nav>
      <router-link to="/" class="title"><h1>ScreenStash</h1></router-link>
      <ul>
        <li>Save a movie</li>
        <li>Search Movies</li>
        <li>User/Login</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #0077be;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  color: white;
}

a {
  text-decoration: none;
}

h1 a {
  color: white;
  margin: 0;
}

li {
  margin: 0 0.5rem;
}
</style>
