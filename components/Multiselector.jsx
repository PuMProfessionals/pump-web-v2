import { useRef } from "react";
import Multiselect from "multiselect-react-dropdown";
import styled from "styled-components";
import { baseTheme } from "../theme";

/*
    params: 
    - options = available items to choose from
    - displayValue = property name to display in the dropdown options
    - placeholder = placeholder in the input section
    - listType = variable that holds all the tags
    - setList = function that will update the listType variable (holds all valid tags)
    - searchValue = current string of search field input
    - releaseValue = releaseBatch dates selected (only valid for posts)
    - handleChange = function in main jsx file that will execute every change 
*/
export const Multiselector = ({
  options,
  displayValue,
  placeholder,
  listType,
  setList,
  searchValue,
  handleChange,
  isObject = false,
  emptyRecordMsg = "No results found",
  avoidHighlightFirstOption = true,
  showArrow = true,
  ...props
}) => {
  const multiselectRef = useRef([]);
  const handleAdd = (e) => {
    setList(multiselectRef.current.getSelectedItems());
    handleChange(searchValue, multiselectRef.current.getSelectedItems());
  };

  const handleRemove = (e) => {
    setList(multiselectRef.current.getSelectedItems());
    handleChange(searchValue, multiselectRef.current.getSelectedItems());
  };

  return (
    <Wrapper>
      <Multiselect
        options={options}
        displayValue={displayValue}
        placeholder={placeholder}
        isObject={false}
        emptyRecordMsg={emptyRecordMsg}
        avoidHighlightFirstOption={true}
        showArrow={true}
        onSelect={handleAdd}
        onRemove={handleRemove}
        ref={multiselectRef}
        style={{
          multiselectContainer: {
            width: "97%",
            padding: "20px",
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
