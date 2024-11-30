import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import img1 from "../../assets/images/tshirt.jpeg"
import ImageCard from "./components/ImageCard"
import { useNavigate } from "react-router-dom"

export type ImageCardData = {
  image: string
  title: string
}
type Props = {}

export default function index({}: Props) {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate("/")
  }
  const imageCardData: ImageCardData[] = [
    {
      image: img1,
      title: "Product 1",
    },
    {
      image: img1,
      title: "Product 2",
    },
    {
      image: img1,
      title: "Product 3",
    },
  ]
  return (
    <div className="flex justify-center items-center">
      <div className="w-[750px] p-5">
        <div className="flex items-center w-full">
          <div
            className="hover:cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </div>
          <h1 className="text-3xl font-semibold pl-5">My Stores</h1>
        </div>

        <div className="bg-[#f6f5f4] my-5 rounded-lg p-3">
          <h1 className="text-2xl font-semibold">Generate Store</h1>
          <div className="mt-2 text-lg font-medium text text-[#808080]">
            <p>
              Generatives stores are AI built shopping destinations for your
              users. They adapt, personalize and present information real time.
              It's simply a better way to shop.
            </p>
            <br />
            <p>
              Start by adding everything in your mind about the brand and what
              you are seeling
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl">Examples</h1>
          <div className="flex gap-6 flex-wrap py-3 px-2">
            {imageCardData.map((card) => (
              <div className="flex flex-col">
                <ImageCard title={card.title} image={card.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            className="bg-black text-white px-5 py-2 rounded-full flex justify-center items-center gap-2"
            onClick={() => {
              navigate("/create-store")
            }}
          >
            <AddCircleOutlineIcon />
            Create Store
          </button>
        </div>
      </div>
    </div>
  )
}
