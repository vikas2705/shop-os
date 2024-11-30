import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import FileUpload from "./FileUpload"
type Props = {}

const CreateStore = ({}: Props) => {
  return (
    <>
      <div className="flex justify-center items-center p-5">
        <div className="w-[919px]">
          <div className="flex items-center w-full">
            <div
              className="hover:cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
              onClick={() => {
                history.back();
              }}
            >
              <ArrowBackIcon />
            </div>
            <h1 className="text-3xl font-semibold pl-5">Create a new store</h1>
          </div>

          <div className="p-2 flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Store Name</h2>
              <input
                className="border border-[#E5E5E5] h-5 p-5 w-full rounded-full"
                type="text"
                placeholder="Enter your store"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Store Description</h2>
              <textarea
                className="border border-[#E5E5E5] h-[165px] p-5 w-full rounded"
                placeholder="Describe your store"
              />
            </div>

            <div className="w-full">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateStore
