import PUI from "cd-platform-ui";
import antd from "ant-design-vue";
import Base from "./components/basic";
import "cd-platform-ui/dist/index.css";
import "ant-design-vue/dist/antd.css";

export default ({ Vue }) => {
  Vue.use(PUI);
  Vue.use(antd);
  Vue.use(Base);
};
