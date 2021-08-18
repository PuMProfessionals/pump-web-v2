import { useRef } from "react";
import Multiselect from "multiselect-react-dropdown";
import styled from "styled-components";
import { baseTheme } from "../theme";

/*
    params: 
    - options = available items to choose from
    - displayValue = property name to display in the dropdown options
    - placeholder = placeholder in the input section
    - setList = function that will update the listType variable (holds all valid tags)
    - searchValue = current string of search field input
    - tagValue = current array of selected tags
    - otherValue = current array of selected values (blog --> releaseBatch, opp --> city)
    - handleChange = function in main jsx file that will execute every change 
    - isFilterTag = boolean indicating if the filter is for tags or otherValue
*/
export const Multiselector = ({
  options,
  displayValue,
  placeholder,
  setList,
  searchValue,
  tagValue,
  otherValue,
  handleChange,
  isFilterTag = true,
  isObject = false,
  emptyRecordMsg = "No results found",
  avoidHighlightFirstOption = true,
  showArrow = true,
  ...props
}) => {
  const multiselectRef = useRef([]);
  const handleAdd = () => {
    setList(multiselectRef.current.getSelectedItems());
    if (isFilterTag) {
      handleChange(
        searchValue,
        multiselectRef.current.getSelectedItems(),
        otherValue
      );
    } else {
      handleChange(searchValue, tagValue, multiselectRef.current.getSelectedItems());
    }
  };

  const handleRemove = () => {
    setList(multiselectRef.current.getSelectedItems());
    if (isFilterTag) {
      handleChange(
        searchValue,
        multiselectRef.current.getSelectedItems(),
        otherValue
      );
    } else {
      handleChange(searchValue, tagValue, multiselectRef.current.getSelectedItems());
    }
  };

  return (
    <Wrapper>
      <Multiselect
        options={options}
        displayValue={displayValue}
        placeholder={placeholder}
        isObject={isObject}
        emptyRecordMsg={emptyRecordMsg}
        avoidHighlightFirstOption={avoidHighlightFirstOption}
        showArrow={showArrow}
        onSelect={handleAdd}
        onRemove={handleRemove}
        ref={multiselectRef}
        style={{
          multiselectContainer: {
            width: "97%",
            padding: "20px",
          },
          inputField: {
            "font-size": baseTheme.size.default,
            "font-family": baseTheme.font.lato,
          },
          chips: {
            background: baseTheme.colors.yellow,
            color: baseTheme.colors.navy,
            "font-size": baseTheme.size.default,
            "font-weight": 500,
          },
          searchBox: {
            background: baseTheme.colors.input,
            "border-radius": baseTheme.radius.border,
            padding: "20px",
            "box-shadow": baseTheme.boxShadow.shallow,
            width: "auto",
            transition: baseTheme.transitions.cubicBezier,
            "font-family": baseTheme.font.lato,
          },
          optionContainer: {
            width: "97%",
          },
          option: {
            width: "auto",
          },
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
