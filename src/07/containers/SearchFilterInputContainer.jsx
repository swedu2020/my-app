import { connect } from "react-redux";
import { setFilter } from "../actions/searchFilterActions";
import Input from '../../04/InputWithStyle';

const mapStateToProps = (state, props) => {
    console.log('SearchFilterInputContainer mapStateToProps : ', state, props);
    const value = state.searchFilter[props.name] || '';
    return {
        value
    };
};
const mapDispatchToProps = {
    onChange: setFilter
}
// Input에게 props로 전달되는 값
// errorMessage, label, value, name, type
export default connect(mapStateToProps, mapDispatchToProps)(Input);