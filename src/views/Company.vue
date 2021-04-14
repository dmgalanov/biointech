<template>
    <MainContainer>
        <div class="navigation-container">
            <div>
                <div class="navigation-container__left-navigation">
                    <navigation-button :color="active === 'one' ? 'bgColor' : ''" @action="active = 'one'">История создания и развития компании</navigation-button>
                    <navigation-button :color="active === 'two' ? 'bgColor' : ''" @action="active = 'two'">Информация о сфере и направлении деятельности компании</navigation-button>
                    <navigation-button :color="active === 'three' ? 'bgColor' : ''" @action="active = 'three'">Планы и задачи компании</navigation-button>
                </div>
                <div class="button"><a href="/products"><span class="button__container">Каталог</span></a></div>
            </div>
            <div class="navigation-container__right navigation-container-right">
                <component :is="componentName"></component>
            </div>
        </div>
    </MainContainer>
</template>

<script>
  import MainContainer from "../components/MainContainer";
  import NavigationButton from "../components/NavigationButton";
  import History from "./company/History";
  import Information from "./company/Information";
  import Plans from "./company/Plans";
  export default{
    name: 'Company',
    data() {
      return {
        active: 'one'
      }
    },
    computed: {
      componentName() {
        if (this.active === 'one') {
          return 'History'
        }
        else if (this.active === 'two') {
          return 'Information'
        }
        return 'Plans'
      }
    },
    components: {
      MainContainer,
      NavigationButton,
      History,
      Information,
      Plans,
    },
  }
</script>

<style lang="scss">
  .navigation-container {
    display: flex;

    &__left-navigation {
      background: #F0EEEE;
      margin: 30px 45px 30px 0;
      padding: 5px 0;
    }

    &__right {
      margin: 30px 0 50px 0;
    }
  }
  .bgColor {
    color: #818CEB;
  }

  .button__container {
    background: #818CEB;

  }
</style>