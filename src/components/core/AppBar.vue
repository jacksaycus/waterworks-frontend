<template>
  <!-- vuetify v-app-bar로 Flat한 형태 -->
  <v-app-bar
    app
    flat
    height="85"
    style="margin:0px; padding:0px; background-color:rgba(255,255,255,0);"
  >
    <!-- 상단바 내용 -->
    <div class="top-bar">
      <div class="top-bar--clock"><span>현재시간 </span>{{ this.timestamp | moment('YYYY-MM-DD HH:mm:ss') }}</div>
      <!-- 환경부 로고 -->
      <div class="logo--environment"></div>
      <span class="title-waio2" @click="$routingByIndex(0)">{{ this.$store.state.currentDashboardTitle }}</span>
      <!-- K-water 로고 -->
      <div class="logo--kwater"></div>
    </div>
    <!-- 로그인 관련 박스 -->
<!--    <div class="right-box">-->
<!--      <div v-if="$store.state.login.user.accessToken !== null" class="login-extention-btn" @click="extendLoginExpiration">-->
<!--        <div>{{ getLoginLeftTime }} 로그인 연장</div>-->
<!--      </div>-->
<!--      &lt;!&ndash; 개인정보 수정 및 로그아웃 메뉴 &ndash;&gt;-->
<!--      <div v-if="$store.state.login.user.accessToken === null" class="login-btn" @click="openLoginDialog"><div>로그인</div></div>-->
<!--      <v-menu-->
<!--        v-else-->
<!--        offset-y-->
<!--        style="z-index: 200;"-->
<!--      >-->
<!--        <template v-slot:activator="{ on }">-->
<!--          <div-->
<!--            v-on="on"-->
<!--            class="user-icon-appber">-->
<!--          </div>-->
<!--        </template>-->
<!--        <div class="appbar-menu">-->
<!--          <div class="appbar-menu-inner">-->
<!--            <div class="info-layout">-->
<!--              <div class="user-icon"></div>-->
<!--              <div class="user-id-part">-->
<!--                <div><div>{{ this.$store.state.login.user.userid }}</div></div>-->
<!--                <div><div>{{ this.$store.state.login.user.partname }}</div></div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="func-layout">-->
<!--              <div @click="clickReviseBtn($store.state.login.user.userid, $store.state.login.user.name, $store.state.login.user.partname)">-->
<!--                <v-icon class="info-icon mr-3"></v-icon>-->
<!--                정보수정-->
<!--                <v-icon class="arrow-icon"></v-icon>-->
<!--              </div>-->
<!--              <div @click="clickPwResetBtn($store.state.login.user.userid)">-->
<!--                <v-icon class="pw-icon mr-2"></v-icon>-->
<!--                비밀번호 초기화-->
<!--                <v-icon class="arrow-icon"></v-icon>-->
<!--              </div>-->
<!--              <div class='logout-layout' @click="logout">-->
<!--                <v-icon class="logout-icon mr-4"></v-icon>-->
<!--                로그아웃-->
<!--                <v-icon class="arrow-icon"></v-icon>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </v-menu>-->
<!--    </div>-->
    <!-- 하단 구분선 -->
    <div class="divider-waio2"></div>
  </v-app-bar>
</template>

<script>
import { util } from '@/service/utils'
import { SET_OVERLAY } from '@/store'

export default {
  name: 'AppBar',
  mixins: [util],
  components: {
  },
  data: () => ({
    timer: null, // 로그인 타이머
    currentTimestamp: null, // 로그인 유지 시간
    counter: -1, // 로그인 유지 시간 카운터
    clockTimer: null, // 현재시간 타이머
    timestamp: null, // 현재시간 표시
  }),
  watch: {
    /**
     * $store.state.login.user.expiration이 변화될 때마다 실행
     * 로그인 연장을 했을 경우 타이머를 새롭게 시작
     *
     * @param oldVal 이전 값
     * @param newVal 새로운 값
     */
    '$store.state.login.user.expiration': function (oldVal, newVal) {
      if (oldVal !== newVal) {
        clearInterval(this.timer)
        this.counter = -1
        this.currentTimestamp = new Date().getTime()
        this.timer = setInterval(() => {
          this.counter ++
        }, 1000)
      }
    }
  },
  computed: {
    /**
     * 로그인 만료 예정 시간과 현재 시간을 비교하여 남은 시간을 반환
     *
     * @returns 시간 반환(MM:SS)
     */
    getLoginLeftTime: function () {
      const timeLeft = Math.floor((this.$store.state.login.user.expiration - this.currentTimestamp - this.counter * 1000) / 1000)
      if (timeLeft <=0 ) {
        clearInterval(this.timer)
        this.$store.dispatch('login/logout', { status: 0 })
      }
      return this.toMMSS(timeLeft)
    }
  },
  methods: {
    // 로그인 Dialog 오픈
    openLoginDialog: function () {
      this.$store.dispatch('loginDialog/OPEN_DIALOG')
    },
    /**
     * 로그인 연장 버튼 클릭시
     * 로그인 연장 API 요청
     */
    extendLoginExpiration: function () {
      this.$store.commit(SET_OVERLAY, true)
      Promise.all([
        this.$store.dispatch('login/LOGIN_PUT')
      ]).finally(() => {
        this.$store.commit(SET_OVERLAY, false)
      })
    },
    /**
     * 로그아웃 버튼 클릭시
     * 로그아웃 API 요청
     */
    logout: function () {
      this.$store.commit(SET_OVERLAY, true)
      Promise.all([
        this.$store.dispatch('login/logout', { status: 1 })
      ]).finally(() => {
        this.$store.commit(SET_OVERLAY, false)
      })
    },
    /**
     * 유저 정보 수정 클릭시
     * 유저 정보 수정 Dialog 오픈
     *
     * @param userid 유저 아이디
     * @param name 유저 이름
     * @param partname 부서명
     */
    clickReviseBtn: function (userid, name, partname) {
      this.$store.dispatch('modifyUserDialog/OPEN_DIALOG', { userid: userid, name: name, partname: partname })
    },
    /**
     * 유저 비밀번호 수정 클릭시
     * 유저 비밀번호 수정 Dialog 오픈
     *
     * @param userid 유저 아이디
     */
    clickPwResetBtn: function (userid) {
      this.$store.dispatch('modifyPasswordDialog/OPEN_DIALOG', { userid: userid })
    }
  },
  /**
   * AppBar.vue가 마운트 됐을 때
   * 현재 시간 타이머 시작
   */
  mounted: function () {
    console.log(this.$options.name + ' mounted')
    this.clockTimer = setInterval(() => {
      this.timestamp = new Date().getTime()
    }, 1000)
  },
  /**
   * AppBar.vue가 파괴될 때
   * 타이머 제거
   */
  destroyed: function () {
    console.log(this.$options.name + ' destroyed')
    clearInterval(this.timer)
    clearInterval(this.clockTimer)
  }
}
</script>

<style lang="scss" scoped>
// 최상위 엘리먼트
.top-bar{
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  // 현재 시간
  &--clock {
    position: absolute;
    left: 50px;
    bottom: 10px;
    font-family: "LAB디지털" !important;
    font-size: 24px;
    color: #b4dffa;
  }
  // 환경부, K-water 로고
  .logo {
    &--environment {
      width:104px;
      height:51px;
      background-image: url('../../assets/appbar/logo_environment.png');
    }
    &--kwater {
      width: 96px;
      height: 53px;
      background-image: url('../../assets/appbar/logo_kwater.png');
    }
  }
  // 제목
  .title-waio2 {
    font-size: 35px;
    font-weight: bold;
    color: white;
    padding: 0 12px;
    cursor: pointer;
  }
}

// 구분선
.divider-waio2 {
  position:absolute;
  width:100%;
  height:32.9px;
  bottom: -10px;
  background-image:url('../../assets/appbar/top_title_background.png');
  background-position-x: right;
}

// 로그인 박스
.right-box {
  position: absolute;
  right: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  // 남은 시간
  .remain-time {
    margin:auto;
  }
  // 로그인 연장 버튼
  .login-extention-btn {
    display: flex;
    width: 135px;
    align-items: center;
    height: 25px;
    margin-left: auto;
    margin-right: 8px;
    padding: 0 10px;
    font-size: 13px;
    color: #ffffff;
    border-radius: 16px;
    border: solid 1px #ffffff;
    background-color: rgba(255, 255, 255, 0.25);
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: rgba(18, 53, 119, 0.25);
    }
    div {
      margin: auto;
    }
  }

  // 로그인 버튼
  .login-btn {
    display: flex;
    width: 90px;
    height: 34px;
    margin-left: auto;
    font-size: 15px;
    color: #ffffff;
    background-color: #4486de;
    font-weight: bold;
    cursor: pointer;
    div {
      margin:auto;
    }
  }
  // 로그인시 유저 아이콘
  .user-icon-appber {
    width: 18px;
    height: 18px;
    background-image: url('../../assets/appbar/icon_appbar_user2.png');
    background-size: 100% 100%;
    cursor: pointer;
  }
}
// 로그인 앱바 메뉴
.appbar-menu {
  width: 353px;
  height: 302px;
  display: flex;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(14, 38, 90, 0.64);
  background-color: rgb(9, 87, 142, 0.8);
  // 로그인 앱바 inner 메뉴(배경색 구분)
  .appbar-menu-inner {
    width: 319px;
    height: 272px;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 24px 26px;
    border-radius: 3px;
    box-shadow: 0 3px 10px 0 rgba(14, 38, 90, 0.64);
    background-color: rgb(12, 104, 168);
    // 사용자 정보(아이디, 부서)
    .info-layout {
      width: 100%;
      height: 101px;
      // 유저 아이콘
      .user-icon {
        width: 92px;
        height: 92px;
        float: left;
        background-image: url('../../assets/appbar/user_icon.png');
        background-size: 100% 100%;
      }
      // 유저 아이디 & 유저 부서
      .user-id-part {
        width:145px;
        height:101px;
        float:right;
        padding: 5px 0px;
        font-size: 13px;
        div {
          background-color: rgba(217, 236, 255, 0.15);
          padding: 5px;
          div {
            color: #8cc4fc;
            border: solid 1px #8cc4fc;
          }
        }
      }
    }
    // 기능 레이아웃
    .func-layout {
      width: 100%;
      height: 120px;
      margin-top: 10px;
      // 정보수정, 비밀번호 초기화, 로그아웃 버튼
      div {
        width: 100%;
        height: 35px;
        position: relative;
        color: white;
        font-size: 13px;
        font-weight: bold;
        padding: 8px;
        margin-bottom: 5px;
        cursor: pointer;
        border: solid 1px #ffffff;
        &:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
      }
      // 로그아웃 버튼
      .logout-layout {
        background-color: #1d84d5;
        &:hover{
          background-color: #128ebc;
        }
      }
      // 유저 정보 아이콘
      .info-icon {
        width: 15px;
        height: 15px;
        margin-left: 5px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../assets/appbar/info_icon.png');
      }
      // 비밀번호 아이콘
      .pw-icon {
        width: 19px;
        height: 15px;
        margin-left: 4px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../assets/appbar/pw_icon.png');
      }
      // 로그아웃 아이콘
      .logout-icon {
        width: 10px;
        height: 15px;
        margin-left: 8px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../assets/appbar/logout_icon.png');
      }
      // 화살표 아이콘
      .arrow-icon {
        width: 7px;
        height: 13px;
        float: right;
        margin-top: 5px;
        margin-right: 5px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../../assets/appbar/arrow_icon.png');
      }
    }
  }
}







</style>
