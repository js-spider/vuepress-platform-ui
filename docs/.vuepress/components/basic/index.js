import Container from "./container";
import CurBr from "./cusBr";

const components = [Container, CurBr];

const install = (Vue) => {
  if (install.installed) return;
  components.forEach((Comp) => {
    Vue.component(Comp.name, Comp);
  });
};

export default {
  install,
};
