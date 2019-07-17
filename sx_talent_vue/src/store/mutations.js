/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  /*RECEIVE_TANLENS,
  RECEIVE_MESSAGES,
  RECEIVE_TALENT_DYNAMIC,
  RECEIVE_INTERNATIONAL_TALENT,
  RECEIVE_EXPERTS,
  RECEIVE_ITEM_SHOW,
  RECEIVE_ACHIEVEMENT,*/
  // RECEIVE_BUILDING,
  // RECEIVE_ENGINEERING,
  RECEIVE_NOTICE,
  RECEIVE_TANLENS,
  RECEIVE_INTERNATIONAL_TALENT,
  RECEIVE_EXPERTS
} from './mutation-types'

export default {

  /*[RECEIVE_MESSAGES] (state, messages) {
    state.messages = messages
  },
  [RECEIVE_TALENT_DYNAMIC] (state, talentDynamic) {
    state.talentDynamic = talentDynamic
  },

  [RECEIVE_INTERNATIONAL_TALENT] (state, internationalTalent) {
    state.internationalTalent = internationalTalent
  },
  [RECEIVE_EXPERTS] (state, experts) {
    state.experts = experts
  },
  [RECEIVE_ITEM_SHOW] (state, itemShow) {
    state.engineering = itemShow
  },
  [RECEIVE_ACHIEVEMENT] (state, achievement) {
    state.achievement = achievement
  },*/

  [RECEIVE_NOTICE] (state, notice) {
    state.notice = notice
  },
  [RECEIVE_TANLENS] (state, talents) {
    state.talents = talents
  },
  [RECEIVE_INTERNATIONAL_TALENT] (state, internationalTalent) {
    state.internationalTalent = internationalTalent
  },
  [RECEIVE_EXPERTS] (state, experts) {
    state.experts = experts
  },
}
