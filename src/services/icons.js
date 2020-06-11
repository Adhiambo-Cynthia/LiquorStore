import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTruck,
  faHandHoldingUsd,
  faPhoneAlt,
  faTty,
  faEnvelope,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";

library.add(
  faTruck,
  faHandHoldingUsd,
  faPhoneAlt,
  faTty,
  faEnvelope,
  faInfoCircle,
  faFacebook,
  faTwitter,
  faInstagramSquare
);

Vue.component("fa-icon", FontAwesomeIcon);
Vue.component('fa-layers', FontAwesomeLayers);
