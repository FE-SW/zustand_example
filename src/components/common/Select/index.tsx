import { useId } from "react";

import * as CSS from "csstype";
import Select, {
  components,
  DropdownIndicatorProps,
  GroupBase,
  StylesConfig,
} from "react-select";

import theme from "@styles/theme";

export interface Option {
  value: number;
  label: React.ReactNode;
}

interface Props {
  name: string;
  options: Option[];
  value: any;
  fontSize?: string;
  textStyles?: CSS.Properties;
  onChange?: (value: any) => void;
}

export default function SelectBox({
  name,
  options,
  value,
  textStyles,
  onChange,
}: Props) {
  const styles: StylesConfig<Option, boolean, GroupBase<Option>> = {
    container: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "46px",
      borderRadius: "0",
      outline: "none",
      letterSpacing: "0",
      color: "black",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0",
      ...textStyles,
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      height: "46px",
      lineHeight: "46px",
      color: "black",
      fontSize: "14px",
      paddingLeft: textStyles?.paddingLeft ? "0" : "10px",
    }),
    control: (provided) => ({
      ...provided,
      width: "100%",
      height: "46px",
      minHeight: "30px",
      border: `1px solid ${theme.color.borderGray}`,
      borderRadius: "0",
      outline: "none",
    }),
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      height: "46px",
    }),
    menu: (provided) => ({
      ...provided,
      left: "1px",
      zIndex: 2,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "5px 12px 5px 5px",
      transition: "all .5s ease",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "left",
      paddingLeft: "5px",
    }),
  };
  return (
    <Select
      isSearchable={false}
      options={options}
      value={value}
      components={{
        IndicatorSeparator: null,
        DropdownIndicator,
      }}
      styles={styles}
      onChange={onChange}
      instanceId={useId()}
    />
  );
}

const DropdownIndicator = (
  props: DropdownIndicatorProps<Option, boolean, GroupBase<Option>>
) => <components.DropdownIndicator {...props} />;
