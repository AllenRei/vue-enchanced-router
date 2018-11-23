<template>
    <div class="spinner"></div>
</template>
<script>
export default {
  name: 'default-spinner'
};
</script>
<style lang="scss" scoped>

.loader {
  -webkit-animation: loader-1 4.8s linear infinite;
  animation: loader-1 4.8s linear infinite;
}
@-webkit-keyframes loader-1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes loader-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 22px;
  width: 22px;
  clip: rect(0, 22px, 22px, 11px);
  -webkit-animation: loader-2 1.2s linear infinite;
  animation: loader-2 1.2s linear infinite;
}
@-webkit-keyframes loader-2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(220deg);
  }
}
@keyframes loader-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(220deg);
  }
}
.loader span::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 22px;
  width: 22px;
  clip: rect(0, 22px, 22px, 11px);
  border: 3px solid #fff;
  border-radius: 50%;
  -webkit-animation: loader-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  animation: loader-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
@-webkit-keyframes loader-3 {
  0% {
    -webkit-transform: rotate(-140deg);
  }
  50% {
    -webkit-transform: rotate(-160deg);
  }
  100% {
    -webkit-transform: rotate(140deg);
  }
}
@keyframes loader-3 {
  0% {
    transform: rotate(-140deg);
  }
  50% {
    transform: rotate(-160deg);
  }
  100% {
    transform: rotate(140deg);
  }
}

.spinner,
.spinner:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.spinner {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid $accent;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

