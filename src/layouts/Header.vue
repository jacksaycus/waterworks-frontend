<template>
    <div class="header">
        <div class="top-bar">
            <!-- <img
                src="@/assets/logo.svg"
                alt=""
                class="logo"
                @click="goSite('/', 3)"
            /> -->
            <img
                src="@/assets/pms/evironment.png"
                alt=""
                class="logo"
                @click="goRouter('/')"
            />
            <span class="title" @click="goRouter('/')"
                >AI 스마트 정수장 운영 시스템</span
            >
            <img
                src="@/assets/pms/kwater.png"
                alt=""
                class="logo"
                @click="goRouter('/')"
            />
            <div class="top-line"><img src="@/assets/pms/topbar.png" alt="" /></div>
            <!-- <div class="top-line">
                <img src="@/assets/topbar.png" alt="" @click="goSite('/', 3)" />
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
      select: 0,
      toggleLeftDrawer :  this.$store.state.PmsMoudule.leftDrawerOpen = !this.$store.state.PmsModule.leftDrawerOpen,
      thumbStyle: {
                right: '4px',
                borderRadius: '5px',
                backgroundColor: '#ffffff55',
                width: '5px',
                opacity: 0.75,
            },
    })
    ,
    methods: {
       goRouter(value, idx) {
        this.$router.push({
            value
       });
       this.select = idx
      }
        ,
        goSite(value){
            window.location.href = value;
        }
    },

}

</script>
