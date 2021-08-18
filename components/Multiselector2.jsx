/*import { useRef } from "react";
import Multiselect from 'multiselect-react-dropdown';
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { baseTheme } from "../theme";

//idea: send in the list of filtered blogs from blog.jsx and then
//use it in here to perform the rest of the loading stuff?
//issue: will not be as usable...? can first try and make things more reusable later

export const Multiselector = ({
    options,
    displayValue,
    placeholder,
    filteredList,
    setList,
    customError,
    isObject = false,
    emptyRecordMsg = "No results found",
    avoidHighlightFirstOption = true,
    showArrow = true,
    ...props
}) => {
    const multiselectRef = useRef([]);
    const handleAdd = (e) => {
        console.log(multiselectRef.current.getSelectedItems());
        axios
            .get(`/api/blog?tags=${multiselectRef.current.getSelectedItems()}`)
            .then((res) => {
                console.log('hello');
                console.log(res.data.results);
                setList(res.data.results);
            })
            .catch(() => {
                toast.error(customError);
            });
    };

    const handleRemove = (e) => {
        console.log('Remove change!');
        console.log(multiselectRef.current.getSelectedItems());
        console.log('end remove');
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
                        width: 'auto',
                        padding: '20px'
                    },
                    chips: {
                        background: baseTheme.colors.yellow,
                        color: baseTheme.colors.navy,
                        'font-size': baseTheme.size.default,
                        'font-weight': 500
                    },
                    searchBox: {
                        background: baseTheme.colors.input,
                        'border-radius': baseTheme.radius.border,
                        padding: '20px',
                        'box-shadow': baseTheme.boxShadow.shallow,
                        width: 'auto',
                        transition: baseTheme.transitions.cubicBezier,
                        'font-family': baseTheme.font.lato,
                    }
                }}
            />
        </Wrapper>
    );
}


/*onSelect(selectedList, selectedItem) {
    ...
}

onRemove(selectedList, removedItem) {
    ...
}


const Wrapper = styled.div``;
*/
