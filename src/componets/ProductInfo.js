import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const ProductInfo = () => {
  const productId = useParams().id;
  const state = useSelector((state) => state.rootReducer.HomeSlice);
  const obj = state.ApiData.filter((item) => item.id == productId)[0];

  return (
    <>
      <div
        className="p-3 row gap-3 position-absolute w-100"
        style={{ top: 55 }}
      >
        <img
          src="https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg"
          alt=""
          className="rounded border border-3 col-6"
        />
        <div className="px-2 text-capitalize col-5">
          <Typography variant="h6" color="initial">
            {obj.title}
          </Typography>
          <Typography variant="body2">{obj.body}</Typography>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
