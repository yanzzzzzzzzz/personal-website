<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <h1 class="text-5xl font-bold tracking-tight">👋 Hey, I'm Jack</h1>
        <h2 class="text-xl font-semibold pt-2">👨‍💻 A passionate backend developer from Taiwan</h2>
        <p class="py-2">
          With a deep passion for backend development, I specialize in creating robust and scalable
          web applications. My expertise lies in modern web technologies, and I am currently
          contributing as a backend developer. I am eager to collaborate on innovative projects and
          continuously expand my skill set.
        </p>
        <h2 class="text-2xl font-semibold">📚 My Skills</h2>
        <ul v-for="(skill, index) in skills" :key="index" class="list-disc">
          <li>{{ skill }}</li>
        </ul>
      </div>
      <div class="right">
        <img
          src="https://avatars.githubusercontent.com/u/22338002?v=4"
          alt="Profile Picture"
          class="profile-picture"
        />
        <ul class="social-icons">
          <li>
            <a href="mailto:yentsai777@gmail.com" target="_blank">
              <i class="fas fa-envelope" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jack-tsai-1033721a5/" target="_blank">
              <i class="fab fa-linkedin text-blue-700 text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yanzzzzzzzzz" target="_blank">
              <i class="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const skills = ['C#', 'Vue.js', 'Node.js', 'MSSQL', 'Git', 'RESTful APIs']
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    max-width: 1200px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    max-width: 1000px;
    width: 100%;
  }

  .left {
    flex: 1;
    padding-right: 2rem;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-picture {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons li {
    list-style: none;
  }

  .social-icons a {
    font-size: 3rem;
    color: #666;
    transition: all 0.3s ease;
  }

  .social-icons a:hover {
    transform: scale(1.1);
  }

  .social-icons .fa-envelope:hover {
    color: #ea4335;
  }

  .social-icons .fa-linkedin:hover {
    color: #0077b5;
  }

  .social-icons .fa-github:hover {
    color: #333;
  }

  .contact-info i {
    margin-right: 0.5rem;
  }
  .list-disc {
    list-style: disc;
    margin-left: 1.5em;
  }
</style>
