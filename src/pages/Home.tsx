import { Button } from "antd"
import AdjustIcon from "@mui/icons-material/Adjust"
const Home = () => {
  function showName(num: number) {
    console.log(num, "Name");
  }
  return (
    <>
      <div>Home</div>
      <AdjustIcon />
      <Button onClick={() => showName(2)}>click me</Button>
    </>
  )
}

export default Home
