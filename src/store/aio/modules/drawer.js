const USER_ROLE = {
  USER: 1,
  ADMIN: 0
}
export default {
  namespaced: true,
  state: {
    selectedMainMenuIndex: 0,
    drawer: {
      parmanet: true,
      expandOnHover: false,
      handler: true,
      items: [
        {
          icon: '$vuetify.icons.AoRw',
          text: '착수',
          model: false,
          authority: USER_ROLE.USER,
          active: false,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/receivingAlgorithm',
              authority: USER_ROLE.USER,
              active: false
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoCg',
          text: '약품',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/cgAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '시뮬레이션',
              route: '/cgSimulation',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoMtcc',
          text: '혼화/응집',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/mtccAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoSb',
          text: '침전',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/sedimentationAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoFb',
          text: '여과',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/filterAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoOz',
          text: '오존',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/ozoneAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoGfb',
          text: 'GAC여과',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/gacAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoDs',
          text: '소독',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '세부현황',
              route: '/disinfectionAlgorithm',
              model: false,
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoSending',
          text: '송수',
          model: false,
          route: '/analysis',
          authority: USER_ROLE.USER,
        },
      ],
      itemsEMS: [
        {
          icon: '$vuetify.icons.EMSDashboard',
          text: '대시보드',
          model: false,
          route: '/',
          // authority: USER_ROLE.USER,
        },
        {
          icon: '$vuetify.icons.EMSAI',
          text: 'AI분석',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '송수펌프 제어',
              // route: '/analysis',
              authority: USER_ROLE.USER,
              children: [
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '제어 분석',
                  route: '/analysis',
                  authority: USER_ROLE.USER,
                },
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '제어 세부 현황',
                  route: '/songsu',
                  authority: USER_ROLE.USER,
                },
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '제어 트렌드',
                  route: '/sujiSelect',
                  authority: USER_ROLE.USER,
                },
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '가동이력',
                  route: '/pumpPerform',
                  authority: USER_ROLE.USER,
                },
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '배수지 수위 현황',
                  route: '/sujiSelect_2',
                  authority: USER_ROLE.USER,
                }
              ]
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '전력피크',
              // route: '/analysis',
              authority: USER_ROLE.USER,
              children: [
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '분석',
                  route: '/peakcontrol',
                  authority: USER_ROLE.USER,
                },
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '세부 현황',
                  route: '/peak',
                  authority: USER_ROLE.USER,
                }
              ]
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: 'DR참여',
              // route: '/analysis',
              authority: USER_ROLE.USER,
              children: [
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '분석',
                  route: '/DRparti',
                  authority: USER_ROLE.USER,
                },
                {
                  icon: '$vuetify.icons.WhiteCircle',
                  text: '세부현황',
                  route: '/dmm',
                  authority: USER_ROLE.USER,
                }
              ]
            }
          ]
        },
        {
          icon: '$vuetify.icons.EMSSpend',
          text: '에너지 사용 현황',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '시설별 사용량',
              route: '/zoneUse',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '설비별 사용량',
              route: '/facUse',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '사용량 트렌드',
              route: '/useTrand',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.EMSReduce',
          text: '에너지 절감 관리',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '최적요금제 분석',
              route: '/cost',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '절감목표 달성 현황',
              route: '/reduction',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.EMSSetting',
          text: '설정',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '태그 정보',
              route: '/tagSetting',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '송수펌프 운영',
              route: '/pumpOperation',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '전력요금제',
              route: '/costSetting',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '절감목표',
              route: '/goalSetting',
              authority: USER_ROLE.USER,
            }
          ]
        }
      ],
      itemsPMS: [
        {
          icon: '$vuetify.icons.AoDashboard',
          text: '대시보드',
          model: false,
          route: '/pms',
          // authority: USER_ROLE.USER,
        },
        {
          icon: '$vuetify.icons.AoRw',
          text: '착수',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '유입밸브',
              route: '/monitor3',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoCg',
          text: '약품',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '약품펌프',
              route: '/monitor4',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '자동급수펌프',
              route: '/monitor6',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoMtcc',
          text: '혼화응집',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '급속분사교반기',
              route: '/monitor7',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '응집기',
              route: '/monitor8',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoSb',
          text: '침전',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '슬러지수집기',
              route: '/monitor9',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoFb',
          text: '여과',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '역세펌프',
              route: '/monitor10',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '역세송풍기',
              route: '/monitor11',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoGfb',
          text: 'GAC',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '역세펌프',
              route: '/monitor12',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoGfb',
          text: '오존',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '오존발생기',
              route: '/monitor15',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '모티브펌프',
              route: '/monitor13',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '냉각수펌프',
              route: '/monitor14',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoDs',
          text: '소독',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '차염발생기',
              route: '/monitor16',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoSending',
          text: '송수',
          model: false,
          authority: USER_ROLE.USER,
          children: [
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '송수관펌프',
              route: '/monitor1',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '펌프기동반',
              route: '/monitor2',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: '변압기반',
              route: '/monitor17',
              authority: USER_ROLE.USER,
            },
            {
              icon: '$vuetify.icons.WhiteCircle',
              text: 'VCB반',
              route: '/monitor18',
              authority: USER_ROLE.USER,
            }
          ]
        },
        {
          icon: '$vuetify.icons.AoDashboard',
          text: '통계/이력',
          model: false,
          route: '/history',
          authority: USER_ROLE.USER,
        },
      ]
    },
    drawerSystem: {
      parmanet: true,
      expandOnHover: false,
      handler: true,
      items: [
        {
          icon: '$vuetify.icons.SysAlarmHistory',
          text: '알람이력',
          model: false,
          route: '/alarmHistory',
          authority: USER_ROLE.USER,
        },
        {
          icon: '$vuetify.icons.SysPerformance',
          text: '성능 모니터링',
          model: false,
          route: '/performanceMonitoring',
          authority: USER_ROLE.USER,
        },
        // {
        //   icon: '$vuetify.icons.SysDashboardManagement',
        //   text: '대시보드 관리',
        //   model: false,
        //   route: '/dashboardManagement',
        //   authority: USER_ROLE.ADMIN,
        // },
        {
          icon: '$vuetify.icons.SysAlarmManagement',
          text: '알람 관리',
          model: false,
          route: '/alarmManagement',
          authority: USER_ROLE.ADMIN,
        },
        {
          icon: '$vuetify.icons.SysUserManagement',
          text: '사용자 관리',
          model: false,
          route: '/userManagement',
          authority: USER_ROLE.ADMIN,
        },
        {
          icon: '$vuetify.icons.SysLoginHistory',
          text: '로그인 이력',
          model: false,
          route: '/loginHistory',
          authority: USER_ROLE.ADMIN,
        },
        {
          icon: '$vuetify.icons.SysConfig',
          text: '네트워크 설정',
          model: false,
          route: '/configNetwork',
          authority: USER_ROLE.ADMIN,
        }
      ]
    },
    mainLeftMenuWidth: '15px',
    mainRightMenuWidth: '0px'
  }
}