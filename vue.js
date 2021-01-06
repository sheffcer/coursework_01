// вы можете как угодно изменять программу и код
// доавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шиг,
      steps: [{
        title: 'Основы',
        text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.',
        isActive: true,
        isDone: false
      },
      {
        title: 'Компоненты',
        text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
        isActive: false,
        isDone: false
      },
      {
        title: 'Роутер',
        text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
        isActive: false,
        isDone: false
      },
      {
        title: 'Vuex',
        text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
        isActive: false,
        isDone: false
      },
      {
        title: 'Composition',
        text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.',
        isActive: false,
        isDone: false
      },
      ]
    }
  },
  methods: {
    prev() {
      this.steps[this.activeIndex].isActive = false
      this.steps[this.activeIndex - 1].isActive = true
      this.activeIndex = this.activeIndex - 1
      this.steps.forEach((item, i) => {
        if (i < this.activeIndex) {
          return item.isDone = true
        } else if (i > this.activeIndex) {
          return item.isDone = false
        }
      })
    },
    reset() {
      if (this.activeIndex === this.last) {
        document.querySelector('.btn--prev').hidden = false
        document.querySelector('.btn--next').hidden = false
        document.querySelector('.btn--reset').hidden = true
        this.activeIndex = 0
        let done = this.steps.forEach((item, i) => {
          if (i > 0) {
            item.isActive = false
            item.isDone = false
          } else if (i === 0) {
            item.isActive = true
          }
          return item
        })
      }
    },
    nextOfFinish() {
      this.steps[this.activeIndex].isActive = false
      this.steps[this.activeIndex + 1].isActive = true
      this.activeIndex = this.activeIndex + 1
      this.steps.forEach((item, i) => {
        if (i < this.activeIndex) {
          return item.isDone = true
        } else if (i > this.activeIndex) {
          return item.isDone = false
        }
      })
    },
    setActive(index) {
      this.steps[this.activeIndex].isActive = false
      this.steps[index].isActive = true
      this.activeIndex = index
      this.steps.forEach((item, i) => {
        if (i < this.activeIndex) {
          return item.isDone = true
        } else if (i > this.activeIndex) {
          return item.isDone = false
        }
      })

    },
    continueStep() {
      document.querySelector('.btn--prev').hidden = true
      document.querySelector('.btn--next').hidden = true
      document.querySelector('.btn--continue').hidden = true
      document.querySelector('.btn--reset').hidden = false
    }
  },
  computed: {
    filteredStep() {
      let allSteps = this.steps
      let filtered = allSteps.filter((e) => {
        if (e.isActive === true) {
          return e
        }
      })
      return filtered
    },
    currentStep() {
      return this.activeIndex
    },
    last() {
      return this.steps.length - 1
    },

    islastStep() {
      if (this.currentStep === this.last) {
        return true
      } else {
        return false
      }
    },
    isButtonDisabled() {
      if (this.activeIndex != 0) {
        return false
      } else {
        return true
      }
    },
     // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  }
}

Vue.createApp(App).mount('#app')