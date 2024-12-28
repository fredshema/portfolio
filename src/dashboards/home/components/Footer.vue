<template>
  <div
    :class="{
      'bg-light': !nightMode,
      'bg-dark': nightMode,
      'text-light': nightMode,
    }"
    style="transition: all 0.5s"
  >
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow">
          <span
            >&copy; 2020 - {{ new Date().getFullYear() }} Copyright
            {{ name }}</span
          >
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              title="LinkedIn"
              class="btn mx-2"
              :class="{
                'btn-outline-light': nightMode,
                'btn-outline-dark': !nightMode,
                'text-dark': !nightMode,
              }"
              @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              title="GitHub"
              class="btn mx-2"
              :class="{
                'btn-outline-light': nightMode,
                'btn-outline-dark': !nightMode,
                'text-dark': !nightMode,
              }"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              title="Twitter"
              class="btn mx-2"
              :class="{
                'btn-outline-light': nightMode,
                'btn-outline-dark': !nightMode,
                'text-dark': !nightMode,
              }"
              @click="open('twitter')"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              title="Resume"
              class="btn mx-2"
              :class="{
                'btn-outline-light': nightMode,
                'btn-outline-dark': !nightMode,
                'text-dark': !nightMode,
              }"
              @click="open('resume')"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      twitter: info.links.twitter,
      resume: info.links.resume,
      name: info.name,
    };
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "twitter":
          window.open(this.twitter, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  color: white;
}

.btn:hover {
  background-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
