import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSearchInput } from "../reducer/HomeSlice";
import debounce from "lodash/debounce";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header
      className="d-flex justify-content-between align-items-center py-2 ps-2 bg-primary text-light position-fixed w-100"
      onClick={() => navigate("/")}
      style={{ zIndex: 10, cursor: "pointer" }}
    >
      <h2 className="text-uppercase mb-0">LogicSoft</h2>
      <input
        onInput={(e) => dispatch(handleSearchInput(e.target.value))}
        className="form-control mx-auto"
        placeholder="Search Your Items"
        style={{ maxWidth: 600 }}
      ></input>
      <Button variant="text" className="text-light">
        Login
      </Button>
    </header>
  );
};

export default Header;
