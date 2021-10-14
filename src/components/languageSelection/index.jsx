import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";

const LanguageSelection = () => {
  const { local } = useSelector(({ app }) => app);
  const dispatch = useDispatch();
  const setLanguage = local => {
    if (local) {
      localStorage.setItem("local", local);
      dispatch({
        type: "app/setState",
        payload: { local }
      });
    }
  };
  return (
    <Select
      onChange={setLanguage}
      value={local}
      className="w-32"
      options={[
        {
          label: "简体中文",
          value: "zh"
        },
        {
          label: "English",
          value: "en"
        }
      ]}
    />
  );
};

export default LanguageSelection;
