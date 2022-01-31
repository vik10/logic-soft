import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleApiData } from "../reducer/HomeSlice";
import CardItem from "./Card";
import { Pagination, Paper } from "@mui/material";
import { handlePagination } from "../utils";

const CardContainer = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer.HomeSlice);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((promise) => promise.json())
      .then((item) => dispatch(handleApiData(item)));
  }, []);

  const filterArr = state.ApiData.filter((item) =>
    item.title.includes(state.searchText)
  );

  const singlePageArr = handlePagination(filterArr, page - 1);
  // console.log(singlePageArr);
  if (!filterArr.length)
    return <h1 className="text-center mt-3">Loading...</h1>;

  return (
    <>
      <div
        className="cardContainer py-5 px-3 position-absolute w-100"
        style={{ top: 54 }}
      >
        {singlePageArr.map((item) => (
          <CardItem obj={item} key={item.id} />
        ))}
      </div>
      <div
        className="d-flex justify-content-center position-fixed bottom-0 w-100 py-3"
        style={{ backgroundColor: `rgba(0,0,0,.8)` }}
      >
        <Paper sx={{ maxWidth: 650 }}>
          <Pagination
            color="primary"
            count={10}
            page={page}
            onChange={(e, val) => setPage(val)}
            variant="text"
            shape="rounded"
          />
        </Paper>
      </div>
    </>
  );
};

export default CardContainer;
